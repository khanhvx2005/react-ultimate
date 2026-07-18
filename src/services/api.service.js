import axios from "./axios.customer";

const createUserAPI = (fullName, email, password, phone) => {
  const BACKEND_URL = "/api/v1/user";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone
  }
  return axios.post(BACKEND_URL, data)
}

const getAllUserAPI = () => {
  const BACKEND_URL = "/api/v1/user";
  return axios.get(BACKEND_URL)
}
export { createUserAPI, getAllUserAPI }