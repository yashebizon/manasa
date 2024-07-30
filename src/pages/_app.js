import { Toaster } from 'react-hot-toast';
import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Toaster position="top-center" />
        </>
    );
}

export default appWithTranslation(MyApp)
