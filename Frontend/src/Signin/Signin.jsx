import { Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Lottie from "lottie-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import animation from "../assets/Animation - 1712774736687.json";

const Signin = () => {
  const [error, seterror] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginstate = JSON.parse(sessionStorage.getItem("login") || "false");
  const changelogin = () => {
    sessionStorage.setItem("login", JSON.stringify(!loginstate));
  };

  const handle = async () => {
    if (!email && !password) {
      seterror("please fill every fields");
      return;
    } else {
      try {
        const userdata = {
          email: email,
          password: password,
        };

        const response = await axios.post("/api/auth/login", userdata);

        if (response.status == 400) {
          console.log(userdata);
          console.log("login successfully");
          changelogin();
        } else {
          console.log("login unsuccessfull");
        }
      } catch (er) {
        console.error("Error:", er);
        seterror("Error during login");
      }
    }
  };
  return (
    <div className="bg-[#1D232A]">
      <div className="h-screen flex justify-center item-center">
        <div className="flex justify-center mb-[100px]">
          <Lottie
            animationData={animation}
            loop
            autoplay
            style={{ maxWidth: "650px" }} // Make sure animation fills its container
          />
        </div>
        <div className="flex justify-center items-center min-w-[800px]">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "35ch",
                "&:hover": {
                  "& .MuiInputBase-input": {
                    color: "gray", // Change text color to gray on hover
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "gray", // Change border bottom color to gray on hover
                  },
                },
              },
              "& .MuiInputLabel-root": {
                color: "white", // Set placeholder color to white
              },
              "& .MuiTextField-root .MuiInputBase-input": {
                color: "white", // Set text color to white
              },
              "& .MuiTextField-root .MuiInput-underline:before": {
                borderBottomColor: "white", // Set border bottom color to white
              },
              "& .MuiFilledInput-root": {
                backgroundColor: "white",
                border: "1px solid gray",
              },
              "& .MuiFilledInput-root:hover": {
                borderColor: "white",
              },
              "& .MuiFilledInput-root.Mui-focused": {
                borderColor: "white",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div className=" rounded-2xl p-[100px] flex justify-center items-center min-h-[200px]">
              <div>
                <div className="flex justify-center">
                  <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="flex justify-center">
                  <TextField
                    id="password"
                    label="Password"
                    variant="standard"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-center">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Terms & Policy"
                    className="text-white"
                  />
                </div>
                <div className="text-white flex justify-center hover:text-gray-300">
                  Forgot your Password?
                </div>
                <div className="text-white flex justify-center mt-3 hover:text-gray-300">
                  <Link href="../Signup">
                    Do not have an account?{" "}
                    <span className="text-[#0095F6] text-[18px] font-semibold">
                      Sign up
                    </span>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-[#4CB5F9] px-[120px] py-3 rounded-xl text-white font-semibold mt-3 hover:bg-[#4c97f9]"
                    onSubmit={handle}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Signin;
