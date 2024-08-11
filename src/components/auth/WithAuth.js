import { parseCookies } from 'nookies';
import Router from 'next/router';

const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        return <WrappedComponent {...props} />;
    };

    Wrapper.getInitialProps = async (ctx) => {
        const { req, res } = ctx;
        const cookies = parseCookies(ctx);
        const userToken = cookies.userToken;
        
        if (!userToken) {
            if (typeof window === 'undefined') {
                res.writeHead(302, { Location: '/login' });
                res.end();
            } else {
                Router.push('/login');
            }
        }

        const componentProps =
            WrappedComponent.getInitialProps &&
            (await WrappedComponent.getInitialProps(ctx));

        return { ...componentProps, userToken };
    };

    return Wrapper;
};

export default withAuth;