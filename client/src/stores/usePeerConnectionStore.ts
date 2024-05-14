import { create } from "zustand";

export interface PeerConnection {
  peerId: string;
  connection?: RTCPeerConnection;
}

interface PeerConnectionState {
  peerConnections: PeerConnection[];
  setPeerConnections: (peerConnections: PeerConnection[]) => void;
  addPeerConnection: (peerConnection: PeerConnection) => void;
}

export const usePeerConnectionStore = create<PeerConnectionState>((set) => ({
  peerConnections: [],
  setPeerConnections: (peerConnections) =>
    set((state) => ({ ...state, peerConnections })),
  addPeerConnection: (peerConnection) =>
    set((state) => ({
      ...state,
      peerConnections: [...state.peerConnections, peerConnection],
    })),
}));
