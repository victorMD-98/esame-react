import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Componenti/NavBar';
import Container from 'react-bootstrap/esm/Container';
import Footer from './Componenti/Footer';
import Main from './Componenti/Main';


function App() {
  return (
      <>
      <div className='bg-dark'>
        <NavBar/>
        <Container fluid className='p-0 bg-dark'>
            <Main/>
        </Container>
        <Footer className="position-absolute bottom-0"/>
      </div>
      </>
  );
}

export default App;
