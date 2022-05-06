import React from 'react'
import { useAuth } from '../context/ChatContext';
import { Button } from '@mui/material' 
import { doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

const Chat = () => {
  const {Signout,user} = useAuth();
  const Navigate = useNavigate();
  const handleClick = async()=>{
    await updateDoc(doc(db,"users",user.uid),{
      isOnline:false
      })
      console.log(user.uid);
      await Signout();    
      Navigate('/')
  }
  return (
    <div>
      <Button onClick={handleClick}>logout </Button>
    </div>
  )
}

export default Chat