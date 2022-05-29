import React, { FunctionComponent } from 'react';
import classes from "./NavBar.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode
};

const NavBarButton: FunctionComponent<Props> = (props) => {
  return (
    <div className={[classes.buttonStyle, props.className].join(' ')}>
      {props.children}
    </div>
  );
}

export default NavBarButton;