import React, { FunctionComponent } from 'react';
import classes from "./NavBarButton.module.css";

type Props = {
  children?: React.ReactNode
};

const NavBarButton: FunctionComponent<Props> = (props) => {
  return (
    <button className={classes.buttonStyle}>
      {props.children}
    </button>
  );
}

export default NavBarButton;