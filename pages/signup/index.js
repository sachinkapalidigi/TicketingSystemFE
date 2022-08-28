import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AuthBody from "../../components/Authentication/AuthBody";
import AuthHeader from "../../components/Authentication/AuthHeader";
import AuthSubmitButton from "../../components/Authentication/AuthSubmitButton";
import Form from "../../components/Common/Form";
import InputEmail from "../../components/Authentication/InputEmail";
import InputPassword from "../../components/Authentication/InputPassword";
import InputText from "../../components/Common/InputText";
import useUserLogin from "../../hooks/userUserLogin";
import { loginUser, registerUser } from "../../utils/apis/login";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    registerUser({ firstName, lastName, email, password }).then((res1) => {
      loginUser({ email, password })
        .then((res2) => {
          router.push("/issues");
        })
        .catch((err2) => {});
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
                ></path>
              </svg>
            </div>
            <h1 className="text-5xl text-gray-800 font-bold">
              Raise your voice for a change
            </h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Make your move and raise your voice. This is a platform
              designed to create impact and  influence leaders, Higher
              government officials by raising issues.
            </p>
          </div>
          <AuthBody>
            <AuthHeader>Sign Up</AuthHeader>
            <Form handleSubmit={handleSubmit}>
              <InputText
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                id="first-name"
                placeholder={`Please enter your first name`}
                label="First name"
              />
              <InputText
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                id="first-name"
                placeholder={`Please enter your last name`}
                label="Last name"
              />
              <InputEmail
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <InputPassword
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div id="button" className="flex flex-col w-full my-5">
                <AuthSubmitButton buttonText="Sign Up" />
                <div className="flex justify-evenly mt-5">
                  {/* <a
                    href="#"
                    className="w-full text-center font-medium text-gray-500"
                    >Recover password!</a
                  > */}
                  <Link
                    href="/signin"
                    className="w-full text-center font-medium text-gray-500"
                  >
                    SignIn!
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

export default SignUp;
