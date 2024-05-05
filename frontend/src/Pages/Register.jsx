import React, { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);

        const { data } = await axios.post(
          "http://localhost:5555/users/register",
          {
            name,
            email,
            password,
          },
          config
        );

        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/DashBoard");
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className=" w-96 mx-auto p-6 border rounded-lg bg-gray-100 shadow-md mt-10">
      <h1 className="text-center mb-6 text-xl font-semibold">REGISTO</h1>
      <form onSubmit={submitHandler} class="max-w-sm mx-auto">
        <div class="flex flex-col mb-5 ">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="rounded-lg px-4 py-2 focus:outline-none shadow-sm"
            placeholder="Nome"
            required
          />
        </div>
        <div class="flex flex-col mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            class="rounded-lg px-4 py-2 focus:outline-none shadow-sm"
            placeholder="Email"
            required
          />
        </div>
        <div class="flex flex-col mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="rounded-lg px-4 py-2 focus:outline-none shadow-sm"
            placeholder="Password"
            required
          />
        </div>
        <div class="flex flex-col mb-5">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          <input
            type="password"
            id="repeat-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            class="rounded-lg px-4 py-2 focus:outline-none shadow-sm"
            placeholder="Repeat Password"
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

        {message && (
          <div className="error-message text-red-500 mb-3 text-center w-48 items-center">
            {message}
          </div>
        )}

        <div class="flex items-start mb-5"></div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-80 ml-2"
        >
          Registar
        </button>
      </form>
    </div>
  );
};

export default Register;