import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleService = () => setIsServiceOpen(!isServiceOpen);
  const toggleSolution = () => setIsSolutionOpen(!isSolutionOpen);

  return (
    <div className="relative md:hidden">
      <div onClick={toggleMenu} className="cursor-pointer">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute  right-0 h-96 w-80 bg-white shadow-lg rounded-lg p-4">
          <ul className="space-y-2 text-left">
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/" onClick={toggleMenu}>
                NEW HOME
              </Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/" onClick={toggleMenu}>
                HOME
              </Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/other" onClick={toggleMenu}>
                ABOUT US
              </Link>
            </li>
            <li>
              <div
                onClick={toggleService}
                className="flex items-center justify-between w-full cursor-pointer hover:text-blue-500"
              >
                SERVICE
                <span className="ml-2">+</span>
              </div>
              {/* {isServiceOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li className="cursor-pointer hover:text-blue-500">Service 1</li>
                  <li className="cursor-pointer hover:text-blue-500">Service 2</li>
                </ul>
              )} */}
            </li>
            <li>
              <div
                onClick={toggleSolution}
                className="flex items-center justify-between w-full cursor-pointer hover:text-blue-500"
              >
                SOLUTION
                <span className="ml-2">+</span>
              </div>
              {isSolutionOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li className="cursor-pointer hover:text-blue-500">
                    Reset Your Debit
                  </li>
                  <li className="cursor-pointer hover:text-blue-500">
                    Reset Your Credit
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/" onClick={toggleMenu}>
                PROCESS
              </Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/" onClick={toggleMenu}>
                FAQ
              </Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/" onClick={toggleMenu}>
                CONTACT
              </Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/" onClick={toggleMenu}>
                VLOG
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
