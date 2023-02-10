import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../Atoms';

export default function Navbar() {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <div className="navbar bg-primary">
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
            className="input input-bordered"
          />
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="favicon.ico" alt="Not available" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="justify-between">Profile</NavLink>
            </li>
            <li>
              <NavLink>Settings</NavLink>
            </li>
            <li>
              <NavLink>Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
