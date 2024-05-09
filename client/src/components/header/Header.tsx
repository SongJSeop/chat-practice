import { useUserStore } from "stores/useUserStore.ts";
import { createUser } from "api";

export default function Header() {
  const { user, setUser } = useUserStore();

  const handleCreateUser = async () => {
    const createdUserId = await createUser();
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
