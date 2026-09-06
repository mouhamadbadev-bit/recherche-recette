import { useState, useEffect, useRef,  } from 'react';
import type{ ReactNode } from 'react';
import style from './scrool.module.css';

interface RevealProps {
  direction?: 'bottom' | 'top' | 'left' | 'right' | string;
  children: ReactNode;
  className?: string;
}

function Reveal({ direction = "bottom", children, className = "" }: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${style.reveal} ${style[`reveal-${direction}`] || ''} ${visible ? style.revealVisible : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Reveal;