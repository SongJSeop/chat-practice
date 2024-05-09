export const createUser = async () => {
  const response = await fetch("http://localhost:8080/users/create", {
    method: "POST",
  });
  return response.text();
};
