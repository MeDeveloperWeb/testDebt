import { useContext } from 'react';
import { AuthContext } from '../../_auth-components/AuthContext';
import { Navigate } from 'react-router-dom';
import getAuthCredentials from '../../_auth-components/login';

export default function AdminLogin() {
  const [user, setUser] = useContext(AuthContext);

  if (user?.access) return <Navigate to="/admin" />;

  return (
    <div className="flex items-center justify-center mt-20 sm:mt-10">
      <form
        className="flex flex-col gap-8 px-6 py-12 md:px-12 m-2 sm:m-0 shadow-xl"
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          formData.append('role', 'admin');

          const adminData = await getAuthCredentials(formData);
          setUser({
            role: adminData.role,
            access: adminData.access
          });
        }}
      >
        <h1 className="text-center text-3xl font-archivo text-[#36A187] font-bold">
          Admin Login
        </h1>
        <div className="flex gap-4 flex-wrap items-center">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="JohnWick"
            id="username"
            name="username"
            className="py-2 px-4 bg-slate-100 rounded-sm w-full"
          />
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            placeholder="Password"
            id="password"
            name="password"
            className="py-2 px-4 bg-slate-100 rounded-sm w-full"
          />
        </div>
        <div className="text-center mt-2">
          <input
            type="submit"
            value="Login"
            className="bg-[#36A187] py-2 px-4 rounded-md text-white font-medium cursor-pointer font-archivo text-lg"
          />
        </div>
      </form>
    </div>
  );
}
