import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { addDoc, collection, deleteDoc, doc, getDoc, getFirestore, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { faList, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'

const ButtonWarp = styled.div`
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
    margin: 20px 0px;
    background-color: black;
    padding: 0.625rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
    color: #fff;
    display: flex; align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    a{color: #fff;}
    svg{margin-right:12px}
`
const FileUpload = styled.input`
    margin-top: 10px;
`

function Ckeditor({title, postData}) {
    const memberProfile = useSelector(state => state.user);
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate();
    const {board, view} = useParams();
    const [writeData, setWriteData] = useState("");
    const [message, setMessage] = useState("");
    const [editorInstance,setEditorInstance] = useState(null);
    const [fileUrl, setFileUrl] = useState("");
    const [fileArray, setFileArray] = useState([]);

    useEffect(()=>{
        if(postData){
            setWriteData(postData.content);
        }
    },postData)
    
    
    const dataSubmit = async ()=>{
      if(title.length === 0){
        setIsModal(!isModal);
        setMessage("제목을 입력해주세요");
        return;
      }else if(writeData.length === 0){
        setIsModal(!isModal);
        setMessage("내용을 입력해주세요");
        return;
      }



    try{
        if(board && view){
            const postRef = doc(getFirestore(),board, view);
            await updateDoc(postRef,{
                title: title,
                content: writeData
            })

            
            alert("게시글이 성공적으로 등록되었습니다.")
        }else{
            const fileInput = document.querySelector("#file").files;
            console.log(fileInput)
            if(fileInput){

                uploadToFirebase(fileInput)
            }
            await addDoc(collection(getFirestore(),board),{
                //setDoc은 지정 user만들어감 addDoc은 랜덤user로 추가됨
                title: title,
                content: writeData,
                view: 1,
                fileName: fileArray,
                uid: memberProfile.uid,
                name: memberProfile.data.name,
                email: memberProfile.data.email,
                nickname: memberProfile.data.nickname,
                timestamp: serverTimestamp()
            })
            alert("게시글이 성공적으로 등록되었습니다.")
        }

        navigate(`/service/${board}`)
        //어느게시판이던 지금 게시판으로 들어감
    }catch(error){
        setIsModal(!isModal);
        setMessage(error.message);
    }
    }
    useEffect(()=>{
        console.log(fileArray)
    }, fileArray)
    const getCurrentDateTime = () => {
        const now = new Date();
    
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하기 때문에 +1이 필요합니다.
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
    
        return `${year}${month}${day}${hours}${minutes}`;
    }
    console.log(getCurrentDateTime())

    const uploadToFirebase = async (file) =>{
        
        const storageRef = ref(getStorage(), 'images/' + getCurrentDateTime()+"_"+file.name);
        const upload = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject)=>{
            upload.on('state_changed', 
            (snapshot)=>{

            },
            
            (error) =>{
                reject(error)
            },
            ()=>{
                getDownloadURL(upload.snapshot.ref).then((result)=>{
                    setFileArray(prevFileArray => [...prevFileArray, getCurrentDateTime()+"_"+file.name]);
                    resolve(result)
                    setFileUrl(result)
                })
            }

            )
        })

    }

    function UploadAdapter(editor){
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) =>{
            return {                
                upload: async () =>{
                    const file = await loader.file
                    const downURL = await uploadToFirebase(file);
                    return{ default : downURL}
                }
            }
        }
    }





  return (
    <>
    {isModal&& <Modal error={message} onClose={()=>{setIsModal(false)}} />}    
    <CKEditor
                  
                     editor={ClassicEditor}
                     data = {writeData}
                    config={{
                         placeholder: "내용을 입력하세요.",
                         extraPlugins: [UploadAdapter],
                         
                     }}
                    onReady={ editor => {
                        setEditorInstance(editor);                        
                        editor.editing.view.change(writer => {
                            writer.setStyle(                  
                                'height',
                                '500px',
                                editor.editing.view.document.getRoot()
                            );
                        });
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setWriteData(data);
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                {/* <FileUpload type="file" id="file" /> */}
                <ButtonWarp>
                    <Button><Link to="/service/notice"><FontAwesomeIcon icon={faList}/>목록</Link></Button>
                    <Button type="file" id="file" onClick={dataSubmit}><FontAwesomeIcon icon={faPen}/>완료</Button>
                </ButtonWarp>
    
    </>
  )
}

export default Ckeditor