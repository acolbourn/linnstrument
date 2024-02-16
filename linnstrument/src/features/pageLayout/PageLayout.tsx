import Box from '@mui/material/Box';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#181818',
      }}
    >
      {children}
    </Box>
  );
};

export default PageLayout;
