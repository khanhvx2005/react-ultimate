import { Input } from 'antd';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import axios from "axios";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClickBtn = () => {
    const BACKEND_URL = "http://localhost:8080/api/v1/user";
    const data = {
      fullName,
      email,
      password,
      phoneNumber
    }
    axios.post(BACKEND_URL, data)
  }
  return (
    <>
      <div className='user-form' style={{ margin: "20px 0" }}>
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>FullName</span>
            <Input
              value={fullName}

              onChange={(event) => { setFullName(event.target.value) }}
            />
          </div>
          <div>
            <span>Email</span>
            <Input
              onChange={(event) => { setEmail(event.target.value) }}
              value={email} />
          </div>
          <div>
            <span>Password</span>
            <Input.Password
              onChange={(event) => { setPassword(event.target.value) }}
              value={password} />
          </div>
          <div>
            <span>Phone Number</span>
            <Input
              onChange={(event) => { setPhoneNumber(event.target.value) }}
              value={phoneNumber} />
          </div>
          <div>
            <Button
              onClick={handleClickBtn}
              type="primary">Create User</Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserForm;