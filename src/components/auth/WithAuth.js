import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import Router from 'next/router';
import Loader from '../loader/loader'

const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const cookies = parseCookies();
            const userToken = cookies.userToken;

            if (!userToken) {
                Router.push('/login');
            } else {
                setLoading(false); // User is authenticated, stop loading
            }
        }, []);

        if (loading) {
            return <Loader/>; 
        }

        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default withAuth;