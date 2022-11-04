import * as React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";

export interface IProtectLayoutProps {
  children: React.ReactNode;
}

class ProtectLayout extends React.Component<any> {
  constructor(props: any) {
    super(props);
    console.log(props);
  }

  render() {
    if (this.props?.auth?.isAuth === false) return <Redirect to={"/"} />;

    return <div>{this.props.children}</div>;
  }
}

const mapState2Props = (state: any) => {
  return { ...state };
};

export default connect(mapState2Props)(withRouter(ProtectLayout));
