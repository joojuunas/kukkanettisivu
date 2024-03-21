import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { darktheme } from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ErrorPage from "./routes/error-page";
import About from './routes/About';
import App from './routes/App';
import FlowerDetail from "./routes/FlowerDetail"
import FlowerIndex from './routes/FlowerIndex';
import FlowerGame from "./routes/FlowerGame";

// import { APIClientProvider } from './apiClient/context';
// import { getAPIClient } from './getapi-client';

 const router = createBrowserRouter([
    {
      path: "",
      element: <App/>,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <FlowerIndex/>
        },
        {
          path: "about",
          element: <About/>, 
        },
        {
          path: "flowers/:nameFi",
          element: <FlowerDetail/>
        },
        {
          path: "flowergame",
          element: <FlowerGame/>
        },
      ],
    },
    {
      path:"photos/",
      
    },
  ]);

// const apiClient = getAPIClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darktheme}>
    <RouterProvider router={router}/>
  </ThemeProvider>
);