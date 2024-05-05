import React, { useState, useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setloading(true);

      const { data } = await axios.post(
        "http://localhost:5555/users/login",
        {
          email,
          password,
        },
        config
      );

      //ALTERAR
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/DashBoard");
      //------------------------------
    } catch (error) {
      seterror(error.response.data.message);
      setloading(false);
    }
  };

  return (
    <div className=" w-96 mx-auto p-6 border rounded-lg bg-gray-100 shadow-md mt-10">
      <h1 className="text-center mb-6 text-xl font-semibold">LOGIN</h1>

      <form onSubmit={submitHandler} className="flex flex-col">
        <div className="display: flex flex-col inputField mb-5 w-auto">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg px-4 py-2 focus:outline-none shadow-sm"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className=" rounded-lg px-4 py-2 focus:outline-none shadow-sm"
            placeholder="Password"
            required
          />
        </div>
        {loading && (
          <div className="flex justify-center p-7">
            <Loading />
          </div>
        )}

        {error && (
          <div className="error-message text-red-500 mb-3 text-center w-48 items-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="submitButton bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm py-2.5 w-full sm:w-auto text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;