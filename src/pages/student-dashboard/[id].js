import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/page-header';
import SideBar from '@/components/page-left-side-bar';
import PageDetails from '@/components/page-details';
import '../../app/globals.scss';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Chat = () => {
  const { t } = useTranslation()
  const router = useRouter();


  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // Option 1: Redirect to another page
      router.push('/dashboard');
      
    }
  }, [router]);
  

    return (
        <div className='pageWrap'>
          <Head>
            <title></title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className='pageWrapMain'>
            <SideBar />
            <PageDetails />
          </main>
        </div>
      );  
}

export async function getStaticPaths() {
  // Define the paths to pre-render based on the IDs available
  const paths = [];

  return { paths, fallback: true };
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale)),
			// Will be passed to the page component as props
		},
	}
}

export default Chat;