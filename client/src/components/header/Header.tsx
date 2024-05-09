import { createUser, existUserId } from "api";
import { useEffect } from "react";
import { useUserStore } from "stores";

export default function Header() {
  const { user, setUser } = useUserStore();

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

  const handleCreateUser = async () => {
    const createdUserId = await createUser();
    localStorage.setItem("userId", createdUserId);
    setUser({ id: createdUserId });
  };

  return (
    <header>
      {user ? (
        <span>회원 id: {user.id}</span>
      ) : (
        <button onClick={handleCreateUser}>유저 생성</button>
      )}
      {user ? <button>방 생성</button> : null}
    </header>
  );
}
