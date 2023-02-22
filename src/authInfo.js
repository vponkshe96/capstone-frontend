import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token");
const decodedToken = jwt_decode(token);

export const usersId = decodedToken.id;

export const config = {
  headers: { Authorization: `Bearer ${token}` },
};

