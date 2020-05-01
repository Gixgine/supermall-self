import axios from "axios"
export default function request(config){
  const instance1 = axios.create({
    baseURL:"http://152.136.185.210:8000/api/h8",
    timeout:5000
  })
  return instance1(config)
}