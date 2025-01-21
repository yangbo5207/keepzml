export async function likeApi(isLike: boolean) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(isLike)
      } else {
        reject(isLike)
      }
    }, 1000)
  });
  return isLike;
}
