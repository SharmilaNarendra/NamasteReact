import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./loginComponent.css";
import loginLogo from "../../../images/hustler_login.png";
import { addUser } from "../store/userInfoSlice";

const LoginComponent = () => {
  const [githubID, setGitHubID] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userDetail = useSelector((store) => store.userInfo.value);
  const gitId = useRef();
  const passWrd = useRef();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap flex-col min-h-screen w-full content-center justify-center purple py-10">
      <div className="flex">
        <div className="flex flex-wrap flex-col content-center justify-center rounded-l-md purple">
          <h1 className="text-9xl font-mono appName">HUSTLERS</h1>
          <img className="w-80 h-80 logo" src={loginLogo} />

          <div className="w-72 loginForm">
            <small className="text-gray-700 pl-4">
              Welcome! Please enter your details
            </small>

            <form
              className="mt-4"
              onSubmit={(e) => {
                dispatch(
                  addUser({
                    userId: gitId.current.value,
                    password: passWrd.current.value,
                  })
                );
                console.log(userDetail);
                navigate("/hustlers");
              }}
            >
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  GitHub ID
                </label>
                <input
                  onChange={(e) => {
                    setGitHubID(e.target.value);
                  }}
                  required={true}
                  value={githubID}
                  type="text"
                  ref={gitId}
                  autoComplete="on"
                  placeholder="Enter your github id"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required={true}
                  value={password}
                  ref={passWrd}
                  type="password"
                  autoComplete="on"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  className="mb-1.5 block w-full text-center text-white bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginComponent;
