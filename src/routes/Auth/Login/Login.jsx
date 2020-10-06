import React, { useState } from "react";
import "../Auth.css";
import {
  Form,
  Grid,
  Segment,
  Header,
  Icon,
  Button,
  Message,
} from "semantic-ui-react";
import firebase from "../../../server/firebase";
import { Link } from "react-router-dom";

function Signup() {
  let user = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  let errors = [];

  let userRef = firebase.database().ref("user");

  const [userData, setUserData] = useState(user);
  const [errorState, setErrorState] = useState(errors);
  const [loading, setLoading] = useState(false);

  const controllInput = (e) => {
    let { name, value } = e.target;

    setUserData((curState) => {
      let curuser = { ...curState };
      curuser[name] = value;
      return curuser;
    });
  };

  const formCheck = () => {
    if (emptyForm()) {
      setErrorState((error) =>
        error.concat({ message: "Please fill in All fields" })
      );
      return false;
    } else if (!passwordCheck()) {
      return false;
    }

    return true;
  };

  const emptyForm = () => {
    return (
      !userData.password.length ||
      !userData.email.length
    );
  };

  const passwordCheck = () => {
    if (userData.password.length < 8) {
      setErrorState((error) =>
        error.concat({ message: "Password length greater then 8" })
      );
      return false;
    } else if (userData.password !== userData.confirmpassword) {
      setErrorState((error) =>
        error.concat({
          message: "Password and Confirm Password does not match",
        })
      );
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    setErrorState(() => []);
    setSucces(false);
    if (formCheck()) {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(userData.email, userData.password)
        .then((user) => {
          setLoading(false);
          updateUser(user);
        })
        .catch((errorMesseage) => {
          setErrorState((error) => error.concat(errorMesseage));
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
    }
  };

  

  const showError = () => {
    return errorState.map((error, index) => <p key={index}>{error.message}</p>);
  };

  

  return (
    <Grid verticalAlign="middle" textAlign="center" className="grid-form">
      <Grid.Column style={{ maxWidth: "500px" }}>
        <Header icon as="h2">
          <Icon name="slack hash" />
          Login
        </Header>
        <Form onSubmit={onSubmit}>
          <Segment stacked>
            

            <Form.Input
              name="email"
              value={userData.email}
              icon="mail"
              iconPosition="left"
              onChange={controllInput}
              type="email"
              placeholder="User Email"
            />

            <Form.Input
              name="password"
              value={userData.password}
              icon="lock"
              iconPosition="left"
              onChange={controllInput}
              type="password"
              placeholder="User Password"
            />

           
          </Segment>
          <Button disabled={loading} loading={loading}>
            Login
          </Button>
        </Form>
        {errorState.length > 0 && (
          <Message error>
            <h3>Errors</h3>
            {showError()}
          </Message>
        )}

        <Message>
          Do not have account? <Link to="/sign-up">sign up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Signup;
