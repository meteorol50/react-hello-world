import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import EnhancedHome from './container';

jest.mock('.', () => ({ isShow }: { isShow: boolean }) => <div data-testid="isShow">{isShow ? 'true' : 'false'}</div>);

describe('Home', () => {
  it('has no text', async () => {
    const history = createMemoryHistory();
    const { findByTestId } = render(
      <Router {...{ history }}>
        <EnhancedHome />
      </Router>,
    );
    const isShowDiv = await findByTestId('isShow');
    expect(isShowDiv.innerHTML).toEqual('false');
  });
  it('has no text', async () => {
    const history = createMemoryHistory();
    render(
      <Router {...{ history }}>
        <EnhancedHome />
      </Router>,
    );
    expect((await screen.findByTestId('isShow')).innerHTML).toEqual('false');
  });

  it('has a text', async () => {
    const history = createMemoryHistory();
    history.push('/?category=1');
    const { findByTestId } = render(
      <Router {...{ history }}>
        <EnhancedHome />
      </Router>,
    );
    const isShowDiv = await findByTestId('isShow');
    expect(isShowDiv.innerHTML).toEqual('true');
  });
});
