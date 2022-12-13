import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contacts from './views/contacts/Contacts';
import AppBar from 'components/AppBar';
import Register from 'views/contacts/Register';
import LogIn from 'views/contacts/LogIn';
import { authOperations, authSelectors } from 'redux/auth';
import { PrivateRoute } from 'components/AppBar/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/AppBar/PublicRoute/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isRefreshing ? (
        <p>Loading...</p>
      ) : (
        <>
          {' '}
          <AppBar></AppBar>
          <Routes>
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LogIn />
                </PublicRoute>
              }
            />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>{' '}
        </>
      )}
    </div>
  );
}

export default App;
