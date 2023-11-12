import React, { useEffect, useRef } from 'react'
import { Engine, Bodies, MouseConstraint, Composite } from 'matter-js'
import classes from '../Home.module.css'

const Scene = ({wrapperElement}) => {
  const requestRef = useRef();
  const fernandoRef = useRef();
  const barcalaRef = useRef();
  const rodriguezRef = useRef();
  const engineRef = useRef();

  const animate = (parentElement) => {
    engineRef.current = Engine.create();
    const engine = engineRef.current;

    const fernandoBox = {
      body: Bodies.rectangle(150, 0, fernandoRef.current.getBoundingClientRect().width, fernandoRef.current.getBoundingClientRect().height),
      elem: fernandoRef.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - 20}px`;
        this.elem.style.left = `${x - 20}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const barcalaBox = {
      body: Bodies.rectangle(150, 0, barcalaRef.current.getBoundingClientRect().width, barcalaRef.current.getBoundingClientRect().height),
      elem: barcalaRef.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - 20}px`;
        this.elem.style.left = `${x - 20}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const rodriguezBox = {
      body: Bodies.rectangle(150, 0, rodriguezRef.current.getBoundingClientRect().width, rodriguezRef.current.getBoundingClientRect().height),
      elem: rodriguezRef.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - 20}px`;
        this.elem.style.left = `${x - 20}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
        const cw = parentElement?.getBoundingClientRect().width ?? 100;
        const ch = parentElement?.getBoundingClientRect().height ?? 100;
    const mouseConstraint = MouseConstraint.create(
      engine,
      { element: document.body }
    );
    Composite.add(engine.world, [
      fernandoBox.body,
      barcalaBox.body,
      rodriguezBox.body,
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch-60, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw-10, ch / 2, 20, ch, { isStatic: true }),
      mouseConstraint,
    ]);

    (function rerender() {
      fernandoBox.render();
      barcalaBox.render();
      rodriguezBox.render();
      Engine.update(engine);
      requestRef.current = requestAnimationFrame(rerender);
    })();
  };

  useEffect(() => {
    const parentElement = wrapperElement.parentElement;
    animate(parentElement);
    return () => {
      cancelAnimationFrame(requestRef.current);
      Engine.clear(engineRef.current);
      // see https://github.com/liabru/js/issues/564
      // for additional cleanup if using MJS renderer/runner
    };
  }, []);

  return (
    <>
        <div ref={fernandoRef} className={classes['absolute']}><span className={`font-title ${classes['inner']}`} >FERNANDO</span></div>
        <div ref={barcalaRef} className={classes['absolute']}><span className={`font-title ${classes['inner']}`} >BARCALA</span></div>
        <div ref={rodriguezRef} className={classes['absolute']}><span className={`font-title ${classes['inner']}`} >RODRIGUEZ</span></div>
    </>
  );
};

export default Scene