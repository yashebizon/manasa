"use client"

import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, List, ListItem, ListItemText, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import './GuidedChatScreen.scss';
import isEmpty from 'lodash/isEmpty';
import Image from 'next/image';
import img from '../../images/img2.jpg';
import Link from 'next/link';

const GuidedChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('practice');
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
        // prompt: input,
        // // chatHistory: messages,
        // mode: mode,
        // user_id: "84e40628-b98f-424f-9e18-78eecc8b617a"
        input_message: input,
        chatHistory: messages,
        mode: mode,
        user_id: userId
      });

      console.log('yanu11', response);

      const botMessage = { sender: 'bot', text: response.data.response_message };
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
      const response = await axios.post('/api/chat', {
        input_message: input,
        chatHistory: messages,
        mode: mode,
        user_id: newSessionId
      });

      // Handle successful response
      const botMessage = { sender: 'bot', text: response.data.response_message };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      isLoading(false);
    } catch (error) {
      console.error('Error sending message after retry:', error);
    }
  };

  function resetInput() {
    setInput('');
  }


  const generateSession = async () => {
    try {
      const response = await axios.get('/api/create_session');
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
        {
          messages.map((msg, index) => (
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
                  // <Typography variant="body1" component="span">
                  //   <strong>{msg.sender === 'user' ? 'Parth' : 'Yoda AI'}:</strong>
                  //   <span>
                  //     {(loading && msg.sender !== 'user') ? renderFormattedText(msg.text) : renderFormattedText(msg.text)}
                  //   </span>
                  // </Typography>
                  <Typography variant="body1" component="span">
                    <strong>{msg.sender === 'user' ? 'Parth' : 'Yoda AI'}:</strong>
                    {msg.sender === 'bot' ? (
                      loading ? renderFormattedText(msg.text) : renderFormattedText(msg.text)
                    ) : (
                      renderFormattedText(msg.text)
                    )}
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
        {isVisible && (
          <ul className='chatBoxSuggestion'>
            <li className='darkRigh'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4t.713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10t.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20" /></svg>
              Guided Session
            </li>
            <li onClick={(e) => setInput('What can I do to challenge my worries?')}>
              For an explanation on how to make the most out of this session, tap on the card below
            </li>
            <li className='cardBox' onClick={(e) => setInput('How do I know if my worries are true?')}>
              <div className='card'>
                <Link href="guided-session">
                  <Image src={img} alt='img' />
                </Link>
                <div className='cardText'>
                  Intro to guided session
                </div>
              </div>
            </li>
            <li onClick={(e) => setInput('How can I challenge my worries?')}>
              Im here to help you work through a challenge or issue. What would you like to talk about today ?
            </li>
          </ul>
        )}
      </div>
      {renderSubmitForm()}
    </div>
  );
};

export default GuidedChatComponent;