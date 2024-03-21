import React from 'react';
import TopToolbar from '../toolbar/TopToolBar'
import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const StyledContainer = styled(Container)<ContainerProps>(({ theme }) => 
  theme.unstable_sx({
    bgcolor: 'background.default',
    marginTop: 8,
    borderRadius: 1,
    border: "2px solid yellow",
    maxWidth: "fit-content",
  }
))

const App: React.FunctionComponent = () => {

  return (
    <>
      <TopToolbar/>
      <StyledContainer component="main" role="main" maxWidth={false} >
        <Outlet/>
      </StyledContainer>
    </>
  )
}

export default App;
