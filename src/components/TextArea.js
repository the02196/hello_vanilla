import React, { useState } from 'react'

function TextArea() {
    const [commentValue, setCommentValue] = useState("");
    console.log(commentValue)
  return (
  
          <textarea
            onChange={(e)=>{setCommentValue(e.target.value)}}
            name="postContent"
            placeholder="댓글을 입력하세요!"
            rows={4}
            cols={40}
            value={commentValue}
          />
  )
}

export default TextArea