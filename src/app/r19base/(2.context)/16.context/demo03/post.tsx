import { useRef, useImperativeHandle, RefObject } from 'react'
import CommentList, { CommentListRef } from './comment-list'
import AddComment from './add-comment'

export interface PostRef {
  scrollAndFocusAddComment: () => any
}

interface PostProps {
  ref: RefObject<PostRef | null>
}

export default function Post({ ref }: PostProps) {
  const commentsRef = useRef<CommentListRef>(null);
  const addCommentRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        if (commentsRef.current) {
          commentsRef.current.scrollToBottom();
        }
        if (addCommentRef.current) {
          addCommentRef.current.focus();
        }
      }
    };
  }, []);

  return (
    <>
      <article>
        <p>Welcome to my Blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  );
}