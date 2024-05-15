import { ChatRoomData } from "stores/useChatRoomsStore.ts";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import { PeerConnection } from "stores/usePeerConnectionStore.ts";

let stompClient: CompatClient;

export const createChatRoom = async (title: string, ownerId: string) => {
  const response = await fetch("/api/chat-rooms", {
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

export const getAllChatRooms = async (): Promise<ChatRoomData[]> => {
  const response = await fetch("/api/chat-rooms");
  return response.json();
};

export const subscribeToRoom = async (
  roomId: string,
  userId: string,
  peerConnections: PeerConnection[],
) => {
  const socket = new SockJS("/api/signaling");
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

    stompClient.subscribe(`/topic/chat/${roomId}`, (message) => {
      const chat = JSON.parse(message.body).message;
      console.log(chat);
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
      {
        "Content-Type": "application/json",
      },
      JSON.stringify({
        peerId: userId,
        answer,
      }),
    );
  });
};

export const sendChat = async (
  roomId: string,
  userId: string,
  message: string,
) => {
  stompClient.send(
    `/app/chat/${roomId}`,
    {
      "Content-Type": "application/json",
    },
    JSON.stringify({
      userId,
      message,
    }),
  );
};
