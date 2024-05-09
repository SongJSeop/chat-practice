export const createUser = async () => {
  const response = await fetch("http://localhost:8080/users/create", {
    method: "POST",
  });
  return response.text();
};

export const existUserId = async (userId: string) => {
  const response = await fetch(
    `http://localhost:8080/users/check-exist?id=${userId}`,
    {
      method: "GET",
    },
  );
  return response.json();
};
