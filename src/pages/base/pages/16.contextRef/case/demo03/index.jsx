import { useRef } from 'react';
import Button from 'components/Button'
import Post from './Post'

export default function Demo03() {
  const postRef = useRef(null);

  function handleClick() {
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <Button onClick={handleClick} primary>Write a comment</Button>
      <Post ref={postRef} />
    </>
  );
}
