interface UserInfo {
  email: string,
  gender: string,
  name: {
    first: string,
    last: string,
    title: string,
  },
  fullname: string,
  nat: string,
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
  thumb: string,
  desc: string,
  id: string
}