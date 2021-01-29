import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  var uri = window.location.pathname;
  uri = uri.substring(1, uri.length);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isLoading) {
          return <h2>Loading...</h2>;
        } else if (!auth.isAuthenticated) {
          if(uri == "employer_dashboard"){
            return <Redirect to="/login" />;
          }else{
          return <Redirect to="/register" />;
          }
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps)(PrivateRoute);
