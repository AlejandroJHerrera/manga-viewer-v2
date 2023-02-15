import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../Atoms';

export default function Navbar() {
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      const res = await axios.get('/auth/logout');
      console.log(res.data);
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-primary max-w-full sm:mx-auto py-2 ">
      <div className="flex-1">
        <NavLink
          to={'/home'}
          className="btn btn-ghost normal-case text-xl bg-secondary"
        >
          MangaViewer
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <div className="btn btn-secondary">
          <NavLink>Library</NavLink>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search.."
            className="input input-bordered focus:border-secondary"
          />
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  user ? user.avatar : 'https://i.ibb.co/MBtjqXQ/no-avatar.gif'
                }
                alt="Not available"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={'/user'} className="justify-between">
                Profile
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink onClick={signOut}>Logout</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to={'/'}>Sign in</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
