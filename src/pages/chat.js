import Head from 'next/head';
import ChatScreen from '../components/chat/ChatScreen';
import { Container } from '@mui/material';

const Chat = () => {
    return (
        <div>
          <Head>
            <title>Mental Health Chatbot</title>
            <meta name="description" content="Chat with GPT using Next.js and Material-UI" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
              <ChatScreen />
            </Container>
          </main>
        </div>
      );  
}

export default Chat;