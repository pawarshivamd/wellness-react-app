
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Error from './pages/Error';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#112429',
      primaryThemegreen: "#28B463",
      white: '#ffffff',
      black: "#000000",
      textMain: "#4A4758",
      textSecondry: '#4C4958',
      gray: "rgba(86, 78, 78, 0.55)",
    },
  },
})
function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/blog' element={<Blogs/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
