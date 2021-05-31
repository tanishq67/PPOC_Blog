import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styling/home.css";

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className="home__page hello" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login__message">
          <h2>📚</h2>
          <h1>Opine matter karke kuch toh!</h1>
          <p>
            We provide timepass related stuff, ok and we also newslatter which no one likes to read.
            Hail BSBE!
          </p>
          <GoogleLogin
            clientId="57529085775-fk8rn8hren1q8o5ja2idq4m7hug5aong.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            // isSignedIn={true}
            // cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
