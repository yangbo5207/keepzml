import { createRandomMessage } from '@/utils';

var requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow'
};

const url = 'https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo'

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage()}
}