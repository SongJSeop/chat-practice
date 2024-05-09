import { createUser } from "api";
import { useEffect, useState } from "react";

export default function Header() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");
    if (savedUserId) {
      setUserId(savedUserId);
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
