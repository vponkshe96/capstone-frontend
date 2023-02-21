import * as React from "react";
import { TextField, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/system";

function LoginForm(props) {
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const navigate = useNavigate();
  const [message, setMessage] = React.useState("");

  // const handleRegister = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     console.log(user);
  //     navigate("/Home");
  //   } catch (error) {
  //     console.log(error.message);
  //     setMessage(error.message);
  //   } finally {
  //     setLoginEmail("");
  //     setLoginPassword("");
  //   }
  // };

  // const handleLogin = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     console.log(user);
  //     navigate("/Home");
  //   } catch (error) {
  //     console.log(error.message);
  //     setMessage(error.message);
  //   } finally {
  //     setLoginEmail("");
  //     setLoginPassword("");
  //   }
  // };

  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <div className="App" style={{ backgroundColor: "#2196f3" }}>
            <Typography
              variant="h4"
              padding={3}
              textAlign="center"
              color="white"
              font-weight="bold"
              font-size=" 20px"
              fontFamily={("Nunito", "sans-serif")}
            >
              Rolodex
            </Typography>
          </div>

          <TextField
            margin="normal"
            variant="outlined"
            required
            id="email"
            label="Email Address"
            name="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            variant="outlined"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <Button
            // onClick={handleLogin}
            variant="contained"
            sx={{ mt: 3, borderRadius: 3 }}
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
          <Button
            // onClick={handleRegister}
            variant="contained"
            sx={{ mt: 3, borderRadius: 3 }}
            endIcon={<HowToRegIcon />}
          >
            Register
          </Button>
          <br />
          <div>{message}</div>
        </Box>
      </form>
    </div>
  );
}

export default LoginForm;
