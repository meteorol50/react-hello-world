import EnhancedHome from 'components/pages/Home/container';
import NextPage from 'components/pages/NextPage';
import { VFC, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router';

const App: VFC = () => {
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  // ページ遷移時にページ上部に移動させる
  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <EnhancedHome />
        </Route>
        <Route path="/next">
          <NextPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
