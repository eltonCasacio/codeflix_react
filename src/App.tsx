import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { Box } from '@mui/material';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routes/root';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box 
        component={'main'}
        sx={{
          height: '100vh',
          color: theme => theme.palette.text['primary'],
          backgroundColor: (theme) => theme.palette.grey[900]
        }}
        >
          <Header />
          <Layout>
            <RouterProvider router={routers} />
          </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App;
