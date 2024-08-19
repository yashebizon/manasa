import { Toaster } from 'react-hot-toast';
import { appWithTranslation } from 'next-i18next';
import withAuth from '../components/auth/WithAuth'; 

function MyApp({ Component, pageProps }) {
    // Example: Protecting the admin panel and dashboard routes
    const protectedRoutes = ['Dashboard', 'Chat', 'Intro', 'MiniGuide'];

    const ProtectedComponent = protectedRoutes.includes(Component.name)
        ? withAuth(Component)
        : Component;

    return (
        <>
            <ProtectedComponent {...pageProps} />
            <Toaster position="top-center" />
        </>
    );
}

export default appWithTranslation(MyApp);