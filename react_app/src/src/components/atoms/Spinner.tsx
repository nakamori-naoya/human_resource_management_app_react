import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Spineer = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={400} />
    </Box>
  );
};
export default Spineer;
