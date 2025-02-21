
import { Route, Routes } from 'react-router-dom';
import { ROUTES_APP } from './routes';

export const Router = () => {
  return (
    <Routes>
      {ROUTES_APP.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
