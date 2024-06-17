import loaderImage from '../../../public/loader.gif'
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
};

export default Loader;