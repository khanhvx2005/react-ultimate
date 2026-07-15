import axios from "./axios.customer";
const createUserAPI = (fullName, email, password, phoneNumber) => {
  const BACKEND_URL = "/api/v1/user";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phoneNumber: phoneNumber
  }
  return axios.post(BACKEND_URL, data)
}
export { createUserAPI }