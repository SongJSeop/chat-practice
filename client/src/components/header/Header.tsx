import { createUser, existUserId } from "api";
import { useEffect, useState } from "react";
import { useUserStore } from "stores";
import { Modal, Overlay } from "components/shared";

export default function Header() {
  const { user, setUser } = useUserStore();
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
            <input id={"room-title"} placeholder={"방 제목을 입력하세요"} />
            <button>생성</button>
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
