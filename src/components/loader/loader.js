import loaderImage from '../../../public/loader.gif'
import Image from 'next/image';
import Box from '@mui/material/Box';

const Loader = () => {
    return (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: add a background to cover the content underneath
          zIndex: 9999, // Ensure the loader is on top of other content
        }}
      >
            <Image src={loaderImage} alt="Loading..." width={500} height={500}/>
        </Box>
    );
};

export default Loader;