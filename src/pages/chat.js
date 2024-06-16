import Head from 'next/head';
import ChatScreen from '../components/chat/ChatScreen';
import Header from '@/components/header';

const Chat = () => {
    return (
        <div>
          <Header />
          <Head>
            <title>Mental Health Chatbot</title>
            <meta name="description" content="Chat with GPT using Next.js and Material-UI" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
              <ChatScreen />
          </main>
        </div>
      );  
}

export default Chat;