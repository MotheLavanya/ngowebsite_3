import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon: Icon
}) => {
  const btnRef = useRef(null);
  
  // Magnetic Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Spring Physics
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance and apply a max pull of 15px
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.span 
      style={{ x: springX, y: springY, display: 'inline-flex', alignItems: 'center' }}
    >
      {children}
      {Icon && <Icon size={size === 'lg' ? 22 : 18} style={{ marginLeft: '0.8rem' }} />}
    </motion.span>
  );

  const baseStyles = `btn btn-${variant} btn-${size} ${className}`;

  if (to) {
    return (
      <Link 
        to={to} 
        className={baseStyles}
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div 
          style={{ x: springX, y: springY }}
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button 
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={baseStyles} 
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
};

export default Button;
