import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class Login extends Component<any> {
  constructor(props: any) {
    super(props);
    console.log(props);
  }

  // public history = useHistory();
  public state = {
    loginNotif: "not ok",
  };

  componentWillReceiveProps(nextProps: any) {
    console.log("next props", nextProps);
    if (nextProps.auth.isAuth === true) {
      console.log("this props", this.props);
      this.props.history.push("/dashboard");
    }
  }

  handleLogin = (e: any) => {
    this.props.dispatch({ type: "GET_LOGIN", payload: true });
    this.setState({ loginNotif: "ok" });
  };

  render() {
    return (
      <>
        <div>Login</div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Pass</label>
          <input type="password" name="" id="" />
        </div>
        <div>
          <button onClick={() => this.handleLogin(123)}>Submit</button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: any) => ({
  ...state,
});

// export default Login
export default connect(mapStateToProps)(withRouter(Login));
