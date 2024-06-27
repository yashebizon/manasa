/* eslint-disable react/no-children-prop */
"use client"

import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, List, ListItem, ListItemText, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import './ChatScreen.scss'
import isEmpty from 'lodash/isEmpty';
import Loader from '../../components/loader/loader';
import CircularProgress from '@mui/material/CircularProgress';
import ReactMarkdown from 'react-markdown';


const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
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
      const response = await axios.post('/api/chat', {
        input_message: input,
        chatHistory: messages,
        mode: mode,
        user_id: userId
      });

      console.log('yanu11', response);

      const botMessage = { sender: 'assistant', text: response.data.response_message };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      isLoading(false);
    } catch (error) {
      console.error('Error fetching response:', error);
      isLoading(false);
    }
  };

  const renderStaticQuestions = () => {
    return (
      isVisible && (
        <ul className='chatBoxSuggestion'>
          <li className='light'>
            Tap on suggested question, or ask your own
          </li>
          <li onClick={(e) => setInput('I am feeling stressed about my exams.')}>
            I am feeling stressed about my exams.
          </li>
          <li onClick={(e) => setInput('I feel anxious when I talk to people.')}>
            I feel anxious when I talk to people.
          </li>
          <li onClick={(e) => setInput('I have been feeling down lately.')}>
            I have been feeling down lately.
          </li>
        </ul>
      )
    );
  }

  function resetInput() {
    setInput('');
  }

  const renderSubmitForm = () => {
    return (
      <div className='chatBoxBtn'>
        <div className='chatBoxBtnInner'>
          <button className='closeBtn' onClick={() => resetInput()}>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" /></svg>
          </button>
        </div>
      </div>
    );
  }

  const renderChat = () => {
    return (
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
                  <strong>{msg.sender === 'user' ? 'Parth' : 'Yoda AI'}:</strong>
                  {(loading && msg.sender !== 'user') ? <ReactMarkdown children={msg.text} /> : <ReactMarkdown children={msg.text} />}
                </Typography>
              }
              sx={{ whiteSpace: 'pre-wrap' }}
            />
          </ListItem>
        ))}
      </List>
    )
  }
  const generateSession = async () => {
    try {
      let userId = localStorage.getItem('userId');
      if (!userId) {
        const response = await axios.get('/api/create_session');
        userId = response.data.user_id;
        localStorage.setItem('userId', userId);

      }
      console.log("userId: ", userId);
      setUserId(userId);

    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    generateSession();

  }, []);

  useEffect(() => {

    if (!isEmpty(messages)) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [messages]);

  return (

    <div className='chatBoxWrap'>
      <div className='chatBox'>
        {renderChat()}
        {renderStaticQuestions()}
      </div>
      {renderSubmitForm()}
    </div>
  );
};

export default ChatComponent;