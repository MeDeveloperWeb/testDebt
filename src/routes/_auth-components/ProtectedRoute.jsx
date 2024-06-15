/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';
import getRefreshedCredentials, { isRevalidationRequired } from './refresh';

export default function ProtectedRoute({ children, role }) {
  const [user, setUser] = useContext(AuthContext);

  const [authStatus, setAuthStatus] = useState(
    isRevalidationRequired(user.access) ? 'pending' : user.role === role
  );

  useState(() => {
    const fetchAccess = async () => {
      const credentials = await getRefreshedCredentials();

      if (!credentials.access) {
        setAuthStatus(false);
        return;
      }

      setUser({
        access: credentials.access,
        role: credentials.role
      });

      setAuthStatus(true);
    };
    fetchAccess();
  }, []);

  if (authStatus === 'pending')
    return (
      <h1 className="text-2xl m-32">
        Getting Authentication details. Please Wait...
      </h1>
    );

  return authStatus ? (
    children
  ) : role === 'admin' ? (
    <Navigate to={'/admin/login'} />
  ) : (
    <h1>User Login Not allowed</h1>
  );
}
