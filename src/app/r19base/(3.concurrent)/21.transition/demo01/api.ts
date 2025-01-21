import { createRandomMessage } from '@/utils';

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions: RequestInit = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const url = 'https://echo.apifox.com/delay/1'

export async function getMessage() {
  await fetch(url, requestOptions)
  return { value: createRandomMessage()}
}