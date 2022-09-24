import React, { useEffect, useState } from 'react';

const useIsElementOnScreen = (ref: React.RefObject<any>) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const onIntersecting = ([entry]: IntersectionObserverEntry[]) => setIntersecting(entry.isIntersecting);
    const observer = new IntersectionObserver(onIntersecting, { threshold: 0.65 });
    
    observer.observe(ref.current);

    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}

export default useIsElementOnScreen;