import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Link from "@mui/material/Link";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sendRequest from "../../utils/sendRequest";

interface IUser {
  email: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
    backgroundColor: "red",

    "&:hover": {
      backgroundColor: "#FFB520",
    },
  },
  signupContainer: {
    position: "fixed",
    top: 100,
    bottom: 200,
    left: 0,
    right: 0,
    background: "#fafafa",
    transition: "opacity 500ms",
    borderRadius: 25,
    border: "2px solid #FFB520",
    zIndex: 1,
  },
}));

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { heading, submitButton, signupContainer } = useStyles();
  const token: string = JSON.stringify(localStorage.getItem("token"));

  const logout = () => {
    localStorage.clear();
  };

  type LoginResponse = { token: string; msg: string };

  const onSubmit = async () => {
    const res = await sendRequest<LoginResponse>({
      method: "POST",
      body: { email, password, token },
      endPoint: "auth/login",
    });

    localStorage.setItem("token", res.token);

    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== undefined
    ) {
      navigate("/");
    }
  };
  return (
    <Container className={signupContainer} maxWidth="xs">
      <Typography className={heading} variant="h4">
        Login Form
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        label="Email"
        fullWidth
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        label="Password"
        // helperText={errors.password?.message}
        // error={!!errors.password?.message}
        type="password"
        fullWidth
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={submitButton}
        onClick={() => onSubmit()}
      >
        Log in
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={submitButton}
        onClick={() => onSubmit()}
      >
        <Link
          href="Signup"
          sx={{
            color: "#ffff",
            textDecoration: "none",
          }}
        >
          Register
        </Link>
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={submitButton}
        onClick={() => logout()}
      >
        Log Out
      </Button>
      {/* <Link href="Signup">Signup</Link> */}
    </Container>
  );
}

export default SignIn;
