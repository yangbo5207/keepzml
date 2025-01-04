import {createRandomMessage, uuid} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage(), id: uuid() }
}