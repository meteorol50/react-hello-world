import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from '.';

it('renders without craching', () => {
  const history = createMemoryHistory();
  const div = document.createElement('div');
  ReactDOM.render(
    <Router {...{ history }}>
      <Home isShow />
    </Router>,
    div,
  );
});
