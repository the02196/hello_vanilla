import React, { useState } from "react";
import styled from "styled-components";

const GlobalWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CommentBox = styled.div`
  width: 1400px;
  margin: 70px auto;
  display: flex;
  justify-content: flex-end;
`;
const CommentWrap = styled.div`
  width: 1000px;
  margin: 0 100px;
  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
  }
`;
const WirterPicture = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(../images/portraits/woman_1.png);
  background-size: cover;
`;
const TopComment = styled.div`
  background-color: #eaeaea;
  width: 200px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 30px;
`;
const WriterId = styled.div`
  font-size: 22px;
`;
const Comment = styled.div`
  font-size: 18px;
  margin: 30px 0;
`;
const Share = styled.div`
  font-size: 16px;
  color: #808080;
`;
const PostComment = styled.div`
  width: 1400px;
  margin: 150px auto;
  display: flex;
  justify-content: space-between;
`;

const InputWrap = styled.div`
  width: 1200px;
  textarea {
    width: 1200px;
    height: 160px;
    background-color: #fff;
    border: 0;
    outline: none;
    font-size: 20px;
    box-sizing: border-box;
    resize: none;
  }
  button {
    width: 1200px;
    padding: 15px 0;
    background-color: #c5cdeb;
    font-size: 18px;
    font-weight: bold;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChangeBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #ddd;
`;

const DeleteBtn = styled(ChangeBtn)`
  background-color: #c5cdeb;
`;
const Confirm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  textarea{
    width: 800px;
    height: 500px;
    background-color: #fff;
    border: 0;
    outline: none;
    font-size: 20px;
    box-sizing: border-box;
    resize: none;
  }
  div{
    button:nth-of-type(1){
      width: 100px;
      height: 50px;
    }
    button:nth-of-type(2){
      width: 100px;
      height: 50px;
    }
  }
`;

function Comments() {
  
  const [idNumber, setIdNumber] = useState(0);
  const [userName, setUserName] = useState("#001235");
  const [userProfile, setUserProfile] = useState();
  const [comment, setComment] = useState("");
  const [feedComments, setFeedComments] = useState([]);

  const [isSelect, setIsSelect] = useState(false);
  const [isSelect2, setIsSelect2] = useState(false);

  const [editValue, setEditValue] = useState(comment);
  const [isEdit, setIsEdit] = useState(false);

  const [editedComment, setEditedComment] = useState("");

  const [isValid, setIsValid] = useState(false);

  const post = (e) => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment("");
    setIsSelect(false);
    setIsSelect2(false);
  };
  const editComment = (index) => {
    const updatedComments = [...feedComments];
    updatedComments[index] = editedComment;
    setFeedComments(updatedComments);
    setIsSelect(false);
    setIsSelect2(false);
    setIsEdit(true);
    setEditedComment("");
  };
  const deleteComment = (index) => {
    const newfeedComments = [...feedComments];
    newfeedComments.splice(index, 1);
    setFeedComments(newfeedComments);
    setIsSelect(false);
    setIsSelect2(false);
  };
  const Modal = ({onEdit, onClose, index}) => {
    return (
      <Confirm>
        <textarea
          type='text'
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
          placeholder="수정할 내용을 입력해주세요."
        />
        <p>수정하시겠습니까?</p>
        <div>
          <button onClick={() => onEdit(index)}>수정</button>
          <button onClick={onClose}>취소</button>
        </div>
    </Confirm>
    );
  };
  const Modal2 = ({onDelete, onClose, index}) => {
    return (
      <Confirm>
        <p>삭제하시겠습니까?</p>
        <div>
          <button onClick={() => onDelete(index)}>삭제</button>
          <button onClick={onClose}>취소</button>
        </div>
      </Confirm>
    );
  };

  const CommentList = (e) => {
    return (
      <CommentBox>
        <WirterPicture className="userProfile">{e.userProfile}</WirterPicture>
        <CommentWrap className="userCommentBox">
          <div>
            <WriterId className="userName">{e.userName}</WriterId>
            {/* <TopComment>Top Comment</TopComment> */}
          </div>
          <Comment className="userComment">{e.userComment}</Comment>
          <BtnWrap>
            <Share>share code</Share>
            {
              <div>
                <ChangeBtn onClick={() => {setIsSelect(true); setIdNumber(e.index); setEditValue(e.userComment);}}>수정</ChangeBtn>
                <DeleteBtn onClick={() => {setIsSelect2(true); setIdNumber(e.index)}}>삭제</DeleteBtn>
              </div>
            }
          </BtnWrap>
        </CommentWrap>
        {isSelect && (
          <Modal
            onEdit={() => {editComment(idNumber, editValue); setIsSelect(false); setIsEdit(true); }}
            onClose={() => setIsSelect(false)} index={idNumber}
          />
        )}
        {isSelect2 && (
          <Modal2
            onDelete={() => deleteComment(idNumber)}
            onClose={() => setIsSelect2(false)}
          />
        )}
      </CommentBox>
    );
  };

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  return (
    <>
    <GlobalWrap>
      <PostComment>
        <WirterPicture></WirterPicture>
        <InputWrap>
          <textarea
            type="text"
            className="inputComment"
            placeholder="댓글 달기..."
            onChange={(e) => {
              setComment(e.target.value);
            }}
            onKeyUp={(e) => {
              e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
            }}
            value={comment}
          />
          <button
            type="button"
            className={
              comment.length > 0
                ? "submitCommentActive"
                : "submitCommentInactive"
            }
            onClick={post}
            disabled={isValid ? false : true}
          >
            Post
          </button>
        </InputWrap>
      </PostComment>
      <CommentBox>
        <WirterPicture style={{backgroundImage : `url("../images/portraits/man_1.png")`}}></WirterPicture>
        <CommentWrap>
          <div>
            <WriterId>lorem</WriterId>
            <TopComment>Top Comment ★</TopComment>
          </div>
          <Comment>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            quae perferendis similique a ad expedita ex accusamus aperiam
            laborum! Vel, ipsum! Non, deserunt error repudiandae magni
            consequuntur quos provident cumque?
          </Comment>
          <Share>share code</Share>
          <button onClick={handleCopyClipBoard}>Click to Copy</button>
        </CommentWrap>
      </CommentBox>
      {feedComments.map((el, index) => {
        return (
          <CommentList
            userProfile={userProfile}
            userName={userName}
            userComment={el}
            key={index}
            index={index}
            // editValue={editValue}
            // onDelete={() => deleteComment(index)}
            // onEdit={() => editComment(index)}
            // isEdit={idNumber === index ? true : false}
            editedComment={editedComment}
          />
        );
      })}
      </GlobalWrap>
    </>
  );
}

export default Comments;
