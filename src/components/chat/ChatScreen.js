"use client"

import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, List, ListItem, ListItemText, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import './ChatScreen.scss'
import isEmpty from 'lodash/isEmpty';
import Loader from '../../components/loader/loader';
import CircularProgress from '@mui/material/CircularProgress';

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
      const response = await axios.post('/chat-api/chat', {
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
      if (error.response) {
        // The request was made, and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error status:', error.response.status);
        console.error('Error data:', error.response.data);
        if (error?.response?.data?.error?.includes("valid session is required")) {
          let newSessionId = await generateSession();
          await retrySendChatMessage(input, messages, mode, newSessionId);
          return;
        }
      }
      isLoading(false);
    }
  };


  const retrySendChatMessage = async (input, messages, mode, newSessionId) => {
    try {
      const response = await axios.post('/chat-api/chat', {
        input_message: input,
        chatHistory: messages,
        mode: mode,
        user_id: newSessionId
      });

      // Handle successful response
      const botMessage = { sender: 'assistant', text: response.data.response_message };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      isLoading(false);
    } catch (error) {
      console.error('Error sending message after retry:', error);
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
                  {(loading && msg.sender !== 'user') ? renderFormattedText(msg.text) : renderFormattedText(msg.text)}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    )
  }
  const renderFormattedText = (text) => {
    text = "\n" + text;
    let html = text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.split('**').map((part, idx) => (
          idx % 2 === 0 ? part : <strong key={idx}>{part}</strong>
        ))}
        <br /> {/* Render <br> for new lines */}
      </React.Fragment>
    ));
    return html;
  };
  const generateSession = async () => {
    try {
      const response = await axios.get('/chat-api/create_session');
      let userId = response.data.user_id;
      localStorage.setItem('userId', userId);
      setUserId(userId);
      return userId;
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    let userId = localStorage.getItem('userId');
    console.log("userId: ", userId);
    if (!userId) {
      generateSession();
    }
    else {
      setUserId(userId);
    }

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