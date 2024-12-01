import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { SignUpUser } from "@/interfaces/SignUpUser";

const API_URL = 'http://localhost:8080'

const signUpUser = async (data: SignUpUser) => {
  return await axios.post(API_URL + '/user', data);
}

export function useSignUpUser() {
  const mutate = useMutation({
    mutationFn: signUpUser
  })

  return mutate;
}