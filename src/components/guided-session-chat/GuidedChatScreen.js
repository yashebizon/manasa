"use client"

import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, List, ListItem, ListItemText, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import './GuidedChatScreen.scss';
import isEmpty from 'lodash/isEmpty';
import Loader from '../../components/loader/loader';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import img from '../../images/img2.jpg';

const GuidedChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('Chat');
  const [preselectQuestion, setPreselectQuestion] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [loading, isLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    isLoading(true);

    try {
      const response = await axios.post('/api/guided-chat-yash', {
        prompt: input,
        chatHistory: messages,
        mode: mode,
      });

      console.log('yanu11', response);

      const botMessage = { sender: 'bot', text: response.data.text.choices[0].message.content };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      isLoading(false);
    } catch (error) {
      console.error('Error fetching response:', error);
      isLoading(false);
    }
  };

  function resetInput() {
    setInput('');
  }

  const renderSubmitForm = () => {
    return(
      <div className='chatBoxBtn'>
          <button className='closeBtn' onClick={() => resetInput()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"/></svg>
        </button>
        <TextField
          InputProps={{
            placeholder: 'Enter your message here...',
          }}
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ mr: 1 }} />
        <button onClick={handleSend} className='sendBtn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z"/></svg>
        </button>
      </div>
    );
}

  const renderChat = () => {
    return(
        <List>
        {messages.map((msg, index) => (
          <ListItem
            key={index}
            className={index % 2 === 0 ? 'user-input' : 'user-response'}
            sx={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              marginBottom: 1,
              borderRadius: 1,
            }}
          >
            <ListItemText
              primary={
                <Typography variant="body1" component="span">
                  <strong>{msg.sender === 'user' ? 'Parth' : 'Manoveda AI'}:</strong> 
                    {(loading && msg.sender !== 'user') ? msg.text : msg.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
        </List> 
    )
  }

  useEffect(() => {

    if(!isEmpty(messages)){
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [messages]); 

  return (

          <div className='chatBoxWrap'>
              <div className='chatBox'>
                  { renderChat() }
                  {isVisible && (
                      <ul className='chatBoxSuggestion'>
                        <li className='darkRigh'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4t.713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10t.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20"/></svg>
                          Guided Session
                        </li>
                        <li onClick={(e) => setInput('What can I do to challenge my worries?')}>
                          What can I do to challenge my worries?
                        </li>
                        <li className='cardBox' onClick={(e) => setInput('How do I know if my worries are true?')}>
                          <div className='card'>
                            <Image src={img} alt='img' />
                            <div className='cardText'>
                              Intro to guided session
                            </div>
                          </div>
                        </li>
                        <li onClick={(e) => setInput('How can I challenge my worries?')}>
                          How can I challenge my worries?
                        </li>
                      </ul>
                  )}
              </div>
                  { renderSubmitForm() }
          </div>
  );
};

export default GuidedChatComponent;