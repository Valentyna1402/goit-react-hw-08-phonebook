import { lazy } from 'react';
import SharedLayout from './Layout';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export const App = () => {

  return (
    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<PublicRoute component={<HomeView />} />} />
      <Route
        path="/register"
        element={
          <PublicRoute
            restricted
            redirectTo="/contacts"
            component={<RegisterView />}
          />
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute
            restricted
            redirectTo="/contacts"
            component={<LoginView />}
          />
        }
      />
      <Route
        path="/todos"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsView />} />
        }
      />
    </Route>
  </Routes>
  );
};
