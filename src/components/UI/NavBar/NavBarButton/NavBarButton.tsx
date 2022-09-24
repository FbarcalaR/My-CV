import React, { FunctionComponent, useContext, useEffect, useMemo, useRef } from 'react';
import { SectionsContext } from '../../../../store/sections/sections-context';
import classes from "./NavBarButton.module.css";

interface Props {
  id: string;
  usesDecorators?: boolean;
  children?: React.ReactNode;
};

const NavBarButton: FunctionComponent<Props> = (props) => {
  const {activeButton, sections} = useContext(SectionsContext);
  const navButton = useRef<HTMLButtonElement>(null);

  const isButtonActive = useMemo(() => activeButton === props.id, [activeButton, props.id]);

  useEffect(() => {
    if (isButtonActive) {
      navButton.current?.classList.add(classes['button-active'])
      navButton.current?.classList.remove(classes['button-inactive'])
    }
    else {
      navButton.current?.classList.add(classes['button-inactive'])
      navButton.current?.classList.remove(classes['button-active'])
    }
  }, [activeButton, isButtonActive])

  const scrollToSection = (key: string) => {
    const sectionToScrollTo = sections.get(key);
    sectionToScrollTo?.current?.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
  };

  return (
    <button ref={navButton} className={classes['button-basic-style']} onClick={() => scrollToSection(props.id)}>
      {isButtonActive && props.usesDecorators ? `{ ${props.children} }` : props.children}
    </button>
  );
}

export default NavBarButton;