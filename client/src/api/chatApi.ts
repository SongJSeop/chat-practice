import { ChatRoomData } from "stores/useChatRoomStore";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import { PeerConnection } from "stores/usePeerConnectionStore.ts";

let stompClient: CompatClient;

export const createChatRoom = async (title: string, ownerId: string) => {
  const response = await fetch("http://localhost:8080/chat-rooms", {
    method: "POST",
    body: JSON.stringify({
      title,
      ownerId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getAllChatRooms = async (): Promise<ChatRoomData> => {
  const response = await fetch("http://localhost:8080/chat-rooms");
  return response.json();
};

export const subscribeToRoom = async (
  roomId: string,
  userId: string,
  peerConnections: PeerConnection[],
) => {
  const socket = new SockJS("http://localhost:8080/signaling");
  stompClient = Stomp.over(socket);

  stompClient.connect({}, () => {
    stompClient.subscribe(`/topic/offer/${roomId}`, (message) => {
      const peerId = JSON.parse(message.body).userId;
      const offer = JSON.parse(message.body).offer;

      const peerConnection = peerConnections.find(
        (peerConnection) => peerConnection.peerId === peerId,
      );
      if (!peerConnection) {
        throw new Error("Peer connection not found");
      }

      peerConnection.connection?.setRemoteDescription(
        new RTCSessionDescription({ type: offer.type, sdp: offer.sdp }),
      );
      sendAnswer(userId, roomId, peerConnection);
    });

    stompClient.subscribe(`/topic/answer/${roomId}`, (message) => {
      const peerId = JSON.parse(message.body).userId;
      const answer = JSON.parse(message.body).answer;

      const peerConnection = peerConnections.find(
        (peerConnection) => peerConnection.peerId === peerId,
      );
      if (!peerConnection) {
        throw new Error("Peer connection not found");
      }

      peerConnection.connection?.setRemoteDescription(
        new RTCSessionDescription(answer),
      );
    });
  });
};

const sendAnswer = async (
  userId: string,
  roomId: string,
  peerConnection: PeerConnection,
) => {
  peerConnection.connection?.createAnswer().then((answer) => {
    peerConnection.connection?.setLocalDescription(answer);
    stompClient.send(
      `/app/answer/${roomId}`,
      {},
      JSON.stringify({
        peerId: userId,
        answer,
      }),
    );
  });
};
