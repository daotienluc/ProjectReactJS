import { Button, Input } from "@nextui-org/react";
import React from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

function Login() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const variants = ["underlined"];

  return (
    <div className="max-w-md mx-auto mt-36 p-5 bg-white shadow-lg">
      <h2 className="text-3xl font-bold">Welcome</h2>
      {variants.map((variant) => (
        <div key={variant} className=" w-ful mb-6 md:mb-0 ">
          <Input
            type="email"
            variant={variant}
            label="Email"
            placeholder="Enter your email"
          />

          <Input
            className="mt-5"
            variant={variant}
            label="Password"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
        </div>
      ))}
      <Button className="w-full mt-5 bg-blue-500 text-white">Login</Button>
    </div>
  );
}

export default Login;
