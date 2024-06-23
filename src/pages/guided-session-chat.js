import Head from 'next/head';
import GuidedChatComponent from '@/components/guided-session-chat/GuidedChatScreen';
import Header from '@/components/chat-header';

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
              <GuidedChatComponent />
          </main>
        </div>
      );  
}

export default Chat;