import React, { useState, useRef, useEffect } from "react";

export default function AnimateComponent(props) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '0px 0px 100px 0px' }
      );
      const currentRef = containerRef.current;
      observer.observe(currentRef);
      return () => observer.unobserve(currentRef);
    }, []);
  
    return (
      <div ref={containerRef} className={props.animationStyle + ` ${isVisible ? ' is-visible' : ''}`}>
        {props.children}
      </div>
    );
}
