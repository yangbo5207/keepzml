import { useRef } from 'react';
import Post, { PostRef } from './post'

export default function Demo03() {
  const postRef = useRef<PostRef>(null);

  function handleClick() {
    if (postRef.current) {
      postRef.current.scrollAndFocusAddComment();
    }
  }

  return (
    <>
      <button onClick={handleClick}>Write a comment</button>
      <Post ref={postRef} />
    </>
  );
}
