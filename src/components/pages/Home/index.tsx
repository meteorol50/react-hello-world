import { VFC } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home: VFC<{ isShow: boolean }> = ({ isShow }) => (
  <Container>
    <h1>Home</h1>
    {isShow && <div>Category param Exists !!</div>}
    <Link to="/next">Next Page</Link>
  </Container>
);

export default Home;
