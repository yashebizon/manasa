"use client"

import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, List, ListItem, ListItemText, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import './ChatScreen.scss'
import isEmpty from 'lodash/isEmpty';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('Chat');
  const [preselectQuestion, setPreselectQuestion] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('/api/chat-yash', {
        prompt: input,
        chatHistory: messages,
        mode: mode,
      });

      console.log('yanu11', response);

      const botMessage = { sender: 'bot', text: response.data.text.choices[0].message.content };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  useEffect(() => {

    if(!isEmpty(messages)){
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [messages]); 

  return (

    // <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, maxWidth: 600, mx: 'auto' }}>
    //           {/* <Typography variant="h4" gutterBottom>
    //               Mental Health Chatbot
    //           </Typography>
    //           <Typography variant="subtitle1" gutterBottom>
    //               A friendly chatbot to discuss your mental health concerns.
    //           </Typography> */}

    //           <Paper elevation={3} sx={{ width: '100%', height: 400, overflowY: 'auto', mb: 2, p: 2 }}>
    //               <List>
    //                   {messages.map((msg, index) => (
    //                       <ListItem key={index} sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
    //                           <ListItemText
    //                               primary={<Typography variant="body1" component="span">
    //                                   <strong>{msg.sender === 'user' ? 'You' : 'Response'}:</strong> {msg.text}
    //                               </Typography>} />
    //                       </ListItem>
    //                   ))}
    //               </List>
    //           </Paper>
    //           <Box sx={{ display: 'flex', width: '100%' }}>
    //               <TextField
    //                   variant="outlined"
    //                   fullWidth
    //                   value={input}
    //                   onChange={(e) => setInput(e.target.value)}
    //                   sx={{ mr: 1 }} />
    //               <Button variant="contained" color="primary" onClick={handleSend}>
    //                   Send
    //               </Button>
    //           </Box>
    //       </Box>


          <div className='chatBoxWrap'>
              <div className='chatBox'>
                  <List>
                      {messages.map((msg, index) => (
                          <ListItem key={index} sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                              <ListItemText
                                  primary={<Typography variant="body1" component="span">
                                      <strong>{msg.sender === 'user' ? 'You' : 'Response'}:</strong> {msg.text}
                                  </Typography>} />
                          </ListItem>
                      ))}
                  </List>

                  {isVisible && (
                      <ul className='chatBoxSuggestion'>
                        <li className='light'>
                          Tap on suggested question, or ask your own
                        </li>
                        <li onClick={(e) => setInput('What can I do to challenge my worries?')}>
                          What can I do to challenge my worries?
                        </li>
                        <li onClick={(e) => setInput('How do I know if my worries are true?')}>
                          How do I know if my worries are true?
                        </li>
                        <li onClick={(e) => setInput('How can I challenge my worries?')}>
                          How can I challenge my worries?
                        </li>
                      </ul>
                  )}
              </div>
              <div className='chatBoxBtn'>
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
          </div>
  );
};

export default ChatComponent;