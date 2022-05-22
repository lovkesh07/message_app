import React from 'react'
import axios from 'axios'
import { useEffect } from "react";

const Chatpage = () => {

  const fetchChat = async() =>{
    const data = await axios.get('/api/chat')

    console.log(data);
  };
  useEffect(() =>{

    fetchChat()

  }, [])

  return (
    <div>Chatpage</div>
  )
}

export default Chatpage;