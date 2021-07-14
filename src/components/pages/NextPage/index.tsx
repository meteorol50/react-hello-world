import { VFC } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NextPage: VFC = () => (
  <Container>
    <h1>Next Page</h1>
    <Link to="/">Back to Home</Link>
  </Container>
);

export default NextPage;
