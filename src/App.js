import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import ProductDetails from './Screens/ProductDetails';


function App() {
  return (
    <Router>
      <Header />
      <main className='my-3'>
        <Container>
          <h2>satya shoping</h2>
          <HomeScreen />

          <Routes path='/' Component={HomeScreen} exact />
          <Routes path='/Product/:id' Component={ProductDetails} exact />


        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
