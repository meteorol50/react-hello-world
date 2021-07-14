import { VFC } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home: VFC = () => (
  <Container>
    <h1>Home</h1>
    <Link to="/next">Next Page</Link>
  </Container>
);

export default Home;
