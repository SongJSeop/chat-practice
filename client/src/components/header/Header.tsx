import { useUserStore } from "../../stores/useUserStore.ts";

export default function Header() {
  const { user, setUser } = useUserStore();
  return (
    <header>
      {user ? <span>회원 id: {user.id}</span> : <button>유저 생성</button>}
      {user ? <button>방 생성</button> : null}
    </header>
  );
}
