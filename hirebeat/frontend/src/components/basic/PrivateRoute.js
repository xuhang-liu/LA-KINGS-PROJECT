import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from '../shared/Loader';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const [loading, setLoading] = useState(true);
  let isAuthenticated = JSON.parse(sessionStorage.getItem("isAuthenticated")) || auth.isAuthenticated;
  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
    }
    setTimeout(() => setLoading(false), 222);
    window.addEventListener('storage', () => {
      if (!localStorage.getItem("token")){
        return <Redirect to="/" />;
      }
    });
  }, []);
  var uri = window.location.pathname;
  uri = uri.substring(1, uri?.length);
  return (
    <React.Fragment>
    <Loader loading={loading} />
    <Route
      {...rest}
      render={(props) => {
        if (auth.isLoading) {
          return <h2>Loading...</h2>;
        } else if (!isAuthenticated) {
          if(uri == "employer_dashboard" || uri == "dashboard"){
            return <Redirect to="/employer-login" />;
          }else{
          return <Redirect to="/employer_register" />;
          }
        } else {
          return <Component {...props} />;
        }
      }}
    />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps)(PrivateRoute);
