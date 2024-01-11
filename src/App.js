import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Componenti/NavBar';
import Container from 'react-bootstrap/esm/Container';
import Footer from './Componenti/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container fluid="lg" bg="dark" data-bs-theme="dark">
          <p>ciaoo</p>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
