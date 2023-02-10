import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../Atoms';

function Landing() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [token] = useState(JSON.parse(localStorage.getItem('token')));

  const user = useSetRecoilState(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = () => {
      if (token) {
        user(token);
        navigate('/home');
      }
    };
    verifyToken();
  });

  const handleOnChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('auth/login', credentials);
      localStorage.setItem('token', JSON.stringify(res.data));
      user(res.data);
      navigate('/home');
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-center ml-4">
          <h1 className="text-5xl font-bold ">Welcome to MangaViewer!</h1>
          <p className="py-6">
            This is a website made to discover and keep up with your favorite
            Mangas all in one place!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                id="email"
                onChange={handleOnChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                id="password"
                onChange={handleOnChange}
                className="input input-bordered"
              />
              <label className="label">
                <NavLink className="label-text-alt link link-hover">
                  Forgot password?
                </NavLink>
              </label>
              <label className="label pb-0">
                <NavLink className="label-text-alt link link-hover">
                  Create new account
                </NavLink>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleOnClick} className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
