'use client'
import React, { useEffect, useState } from 'react';

const useIsElementOnScreen = (ref: React.RefObject<any>, threshold=0.65) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const onIntersecting = ([entry]: IntersectionObserverEntry[]) => setIntersecting(entry.isIntersecting);
    const observer = new IntersectionObserver(onIntersecting, { threshold });
    
    observer.observe(ref.current);

    return () => { observer.disconnect() }
  }, [ref, threshold])

  return isIntersecting
}

export default useIsElementOnScreen;