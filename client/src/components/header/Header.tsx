import { createUser, existUserId } from "api";
import { useEffect, useState } from "react";

export default function Header() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");

    async function checkUserId(id: string) {
      const isExist = await existUserId(id);
      if (!isExist) {
        localStorage.removeItem("userId");
      } else {
        setUserId(id);
      }
    }

    if (savedUserId) {
      checkUserId(savedUserId);
    }
  }, []);

  const handleCreateUser = async () => {
    const createdUserId = await createUser();
    setUserId(createdUserId);
    localStorage.setItem("userId", createdUserId);
  };

  return (
    <header>
      {userId ? (
        <span>회원 id: {userId}</span>
      ) : (
        <button onClick={handleCreateUser}>유저 생성</button>
      )}
      {userId ? <button>방 생성</button> : null}
    </header>
  );
}
