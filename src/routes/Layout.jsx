/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import Menu from './_components/Menu';
import { AuthContext } from './_auth-components/AuthContext';
import { useState } from 'react';

export default function Layout({ children }) {
  const [user, setUser] = useState({
    access: undefined,
    role: 'user'
  });

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <div className="flex flex-col min-h-screen font-display">
        <nav className="bg-blue-100 shadow-md p-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <p
              className="text-green-400 w-32 sm:w-1/4"
              style={{ width: '76px', height: '13.5px' }}
            >
              debt
              <span className="text-orange-400 rounded-lg">.</span>
              free
            </p>

            {/* <img src={debtLogo} alt="debtLogo" className="w-32 sm:w-1/4" /> */}
          </div>
          <Menu />
        </nav>
        {/* <div className="flex-1 flex flex-col"> */}
        {/* Renders children if provided or Outlet */}
        {children ?? <Outlet />}
        {/* </div> */}
      </div>
    </AuthContext.Provider>
  );
}
