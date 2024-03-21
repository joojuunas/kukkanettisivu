import React, { useContext } from "react";
import { Box, Button, ThemeProvider, createTheme, useTheme } from '@mui/material';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ErrorPage from "../routes/error-page";
// import About from '../routes/About';
// import App from '../routes/App';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const ThemeButton: React.FunctionComponent = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <Button sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? "Dark" : "Light"}
      </Button>
    </Box>
  );
}

const ToggleColorMode: React.FunctionComponent = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

 

return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
     {/* <RouterProvider router={router}/> */}
      <ThemeButton/>
    </ThemeProvider>
  </ColorModeContext.Provider>
);
}
export default ThemeButton; ToggleColorMode;