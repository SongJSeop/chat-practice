export const createUser = async () => {
  const response = await fetch("/api/users/create", {
    method: "POST",
  });
  return response.text();
};

export const existUserId = async (userId: string) => {
  const response = await fetch(`/api/users/check-exist?id=${userId}`, {
    method: "GET",
  });
  return response.json();
};
