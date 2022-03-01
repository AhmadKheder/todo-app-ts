import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
interface IUser {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(120),
});

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
}));

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  const { heading, submitButton, signupContainer } = useStyles();

  const [json, setJson] = useState<string>();

  const onSubmit = (data: IUser) => {
    setJson(JSON.stringify(data));
  };
  const postUser = async () => {
    await axios
      .post("http://localhost:8080/auth/register", { json })
      .then((response) => {
        console.log("response");
        console.log(response);
      });
  };
  useEffect(() => {
    console.log("useEffect response");
    postUser();

    // await axios
    //   .post("http://localhost:8080/auth/register", { json })
    //   .then((response) => {
    //     console.log("response");
    //     console.log(response);
    //   });
  }, []);

  return (
    <Container className={signupContainer} maxWidth="xs">
      <Typography className={heading} variant="h4">
        Sign Up Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register("email")}
          variant="outlined"
          margin="normal"
          label="Email"
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          fullWidth
          required
        />

        <TextField
          {...register("password")}
          variant="outlined"
          margin="normal"
          label="Password"
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={submitButton}
        >
          Sign Up
        </Button>
        {json && (
          <>
            <Typography variant="body1">
              Below is the JSON that would normally get passed to the server
              when a form gets submitted
            </Typography>
            <Typography variant="body2">{json}</Typography>
          </>
        )}
      </form>
    </Container>
  );
}

export default SignUp;
