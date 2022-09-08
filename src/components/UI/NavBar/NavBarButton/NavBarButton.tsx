import React, { FunctionComponent, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { SectionsContext } from '../../../../store/sections-context';
import classes from "./NavBarButton.module.css";

interface Props {
  id: string;
  usesDecorators?: boolean;
  children?: React.ReactNode;
};

const NavBarButton: FunctionComponent<Props> = (props) => {
  const {activeButton, setActiveButton, sections} = useContext(SectionsContext);
  const navButton = useRef<HTMLButtonElement>(null);

  const isButtonActive = useCallback(() => activeButton === props.id, [activeButton]);

  useEffect(() => {
    if (isButtonActive()) {
      navButton.current?.classList.add(classes['button-active'])
      navButton.current?.classList.remove(classes['button-inactive'])
    }
    else {
      navButton.current?.classList.add(classes['button-inactive'])
      navButton.current?.classList.remove(classes['button-active'])
    }
  }, [activeButton])

  const scrollToSection = (key: string) => {
    // setActiveButton(key);
    const sectionToScrollTo = sections.get(key);
    sectionToScrollTo?.current?.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
  };

  return (
    <button ref={navButton} className={classes['button-basic-style']} onClick={() => scrollToSection(props.id)}>
      {isButtonActive() && props.usesDecorators ? `{ ${props.children} }` : props.children}
    </button>
  );
}

export default NavBarButton;