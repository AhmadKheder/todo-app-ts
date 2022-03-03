import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Link from "@mui/material/Link";
import { useState } from "react";

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
    backgroundColor: "#FFB520",

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
  links: {
    underline: "none",
    textDecoration: "none",
    color: "#fffff",
  },
}));

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { heading, submitButton, signupContainer, links } = useStyles();

  const onSubmit = async () => {
    const res = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    }).then(async (res) => {
      const resJson = await res.json();
      localStorage.setItem("token", resJson.token);
    });
  };

  return (
    <Container className={signupContainer} maxWidth="xs">
      <Typography className={heading} variant="h4">
        Sign Up Form
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        label="Email"
        // helperText={errors.email?.message}
        // error={!!errors.email?.message}
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
        Sign Up
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
          href="Signin"
          sx={{
            color: "#ffff",
            textDecoration: "none",
          }}
        >
          Log in
        </Link>
      </Button>
      {/* <Link href="Signin">Signin</Link> */}
    </Container>
  );
}

export default SignUp;
