import SimpleButton from "@/components/molecules/SimpleButton/SimpleButton";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface RegisterFormProps {
  onRegister: (displayName: string, email: string, password: string,confirmedPassword: string) => void;
  loading: boolean;
}

export default function RegisterForm({
  loading,
  onRegister,
}: RegisterFormProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onRegister(name, email, password,confirmedPassword)
      }}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your name
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="jhon walker"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="walker@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          required
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="confirm-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm password
        </label>
        <input
          required
          type="password"
          name="confirm-password"
          id="confirm-password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-[#70B852]  focus:ring-3 focus:ring-[#70B852]  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#70B852]  dark:ring-offset-gray-800"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{" "}
            <a
              className="font-medium text-[#70B852]  hover:underline dark:text-[#70B852] "
              href="#"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <SimpleButton
        loading={loading}
        text="Create an account"
        type="submit"
        className="w-full flex justify-center text-white bg-[#70B852]  hover:bg-[#5e9945] focus:ring-4 focus:outline-none focus:ring-[#70B852]  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#70B852]  dark:hover:bg-[#70B852]  dark:focus:ring-[#70B852] "
      />
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <NavLink
          to={"/login"}
          className="font-medium text-[#70B852]  hover:underline dark:text-[#70B852] "
        >
          Login here
        </NavLink>
      </p>
    </form>
  );
}
