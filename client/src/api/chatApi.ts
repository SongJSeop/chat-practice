export const createChatRoom = async (title: string, ownerId: string) => {
  const response = await fetch("http://localhost:8080/chat-rooms", {
    method: "POST",
    body: JSON.stringify({
      title,
      ownerId,
    }),
  });
  return response.json();
};

export const getAllChatRooms = async () => {
  const response = await fetch("http://localhost:8080/chat-rooms");
  return response.json();
};
