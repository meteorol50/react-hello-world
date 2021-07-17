import { VFC } from 'react';
import { useLocation } from 'react-router';
import Home from '.';

const EnhancedHome: VFC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const categoryParam = queryParams.get('category');
  const isShow = !!categoryParam;

  return <Home {...{ isShow }} />;
};

export default EnhancedHome;
