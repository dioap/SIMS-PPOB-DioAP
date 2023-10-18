import Logo from '../assets/Logo.png';
import At from '../assets/at.svg';
import Pw from '../assets/password.svg';
import EyeShow from '../assets/eye.svg';
import EyeHide from '../assets/eye-off.svg';
import Illustrasi from '../assets/IllustrasiLogin.png';
import { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-auto w-1/2 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center items-center">
              <img className="h-8 w-auto" src={Logo} alt="" />
              <h1 className="px-2 text-xl font-semibold">SIMS PPOB</h1>
            </div>
            <h2 className="text-center mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2 relative">
                  <img
                    src={At}
                    alt=""
                    className="h-4 absolute left-3 top-2.5"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Insert your email address"
                    className="block w-full rounded-md border-0 py-1.5 pl-9 pr-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#F42619] hover:text-[#f6493c]"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2 relative">
                  <img
                    src={Pw}
                    alt=""
                    className="h-4 absolute left-3 top-2.5"
                  />
                  <img
                    src={showPassword ? EyeShow : EyeHide}
                    alt=""
                    className="h-4 absolute right-3 top-2.5"
                    onClick={togglePasswordVisibility}
                  />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Insert your password"
                    className="block w-full rounded-md border-0 py-1.5 pl-9 pr-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md py-1.5 px-3 leading-6 text-white font-semibold shadow-sm  bg-[#F42619] hover:bg-[#f6493c]"
                >
                  Sign In
                </button>
              </div>
            </form>

            <p className="flex justify-center mt-8">
              Don't have an account?
              <a
                href="#"
                className="pl-1.5 font-semibold text-[#F42619] hover:text-[#f6493c]"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-auto w-1/4 flex-col ">
          <img src={Illustrasi} alt="" className="object-cover h-screen" />
        </div>
      </div>
    </>
  );
}
