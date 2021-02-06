import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
