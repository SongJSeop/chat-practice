import { createUser, existUserId } from "api";
import React, { useEffect, useState } from "react";
import { useChatRoomsStore, useUserStore } from "stores";
import { Modal, Overlay } from "components/shared";
import { createChatRoom } from "api/chatApi.ts";

export default function Header() {
  const [newRoomTitle, setNewRoomTitle] = useState("");
  const { user, setUser } = useUserStore();
  const { appendChatRoom } = useChatRoomsStore();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");

    async function checkUserId(id: string) {
      const isExist = await existUserId(id);
      if (!isExist) {
        localStorage.removeItem("userId");
      } else {
        setUser({ id });
      }
    }

    if (savedUserId) {
      checkUserId(savedUserId);
    }
  }, []);

  const handleCreateUserButton = async () => {
    const createdUserId = await createUser();
    localStorage.setItem("userId", createdUserId);
    setUser({ id: createdUserId });
  };

  const handleCreateRoomButton = () => {
    setModalOpen(true);
  };

  const handleModalRoomTitleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewRoomTitle(event.target.value);
  };

  const handleModalCreateRoomButton = async () => {
    if (!newRoomTitle) {
      alert("방 제목을 입력하세요.");
      return;
    }
    const newRoom = await createChatRoom(newRoomTitle, user!.id);
    appendChatRoom(newRoom);
    alert("방이 생성되었습니다.");
    setModalOpen(false);
  };

  return (
    <header>
      {user ? (
        <span>회원 id: {user.id}</span>
      ) : (
        <button onClick={handleCreateUserButton}>유저 생성</button>
      )}
      {user ? <button onClick={handleCreateRoomButton}>방 생성</button> : null}
      {modalOpen ? (
        <Overlay>
          <Modal>
            <input
              id={"room-title"}
              placeholder={"방 제목을 입력하세요"}
              onChange={handleModalRoomTitleInputChange}
            />
            <button onClick={handleModalCreateRoomButton}>생성</button>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
            >
              취소
            </button>
          </Modal>
        </Overlay>
      ) : null}
    </header>
  );
}
