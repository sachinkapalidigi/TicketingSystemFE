import Link from "next/link";
import { useRouter } from "next/router";
import AuthBody from "../../components/Authentication/AuthBody";
import AuthHeader from "../../components/Authentication/AuthHeader";
import AuthSubmitButton from "../../components/Authentication/AuthSubmitButton";
import Form from "../../components/Common/Form";
import InputEmail from "../../components/Authentication/InputEmail";
import InputPassword from "../../components/Authentication/InputPassword";
import useUserLogin from "../../hooks/userUserLogin";
import { loginUser } from "../../utils/apis/login";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // use for loader later
  const { isUserLoggedIn } = useUserLogin();

  useEffect(() => {
    if (isUserLoggedIn) {
      router.push("/issues");
    }
  }, [isUserLoggedIn]);

  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser({ email, password })
      .then((res) => {
        router.push("/issues");
      })
      .catch((err) => {
        // display errors
      });
  };

  return (
    <div className="antialiased bg-gradient-to-br from-green-100 to-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <div>
              <svg
                className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h1 className="text-5xl text-gray-800 font-bold">
              Raise Your Voice
            </h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Your voice have power/Show your power/create an impact
            </p>
          </div>
          <AuthBody>
            <AuthHeader>Sign In</AuthHeader>
            <Form handleSubmit={handleSubmit}>
              <InputEmail
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <InputPassword
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div id="button" className="flex flex-col w-full my-5">
                <AuthSubmitButton buttonText="Sign In" />
                <div className="flex justify-evenly mt-5">
                  <Link
                    href="/signup"
                    className="w-full text-center font-medium text-gray-500"
                  >
                    Singup!
                  </Link>
                </div>
              </div>
            </Form>
          </AuthBody>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
