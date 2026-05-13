import React from 'react';
import { motion } from 'framer-motion';
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
  const content = (
    <>
      {children}
      {Icon && <Icon size={size === 'lg' ? 22 : 18} style={{ marginLeft: '0.5rem' }} />}
    </>
  );

  const baseStyles = `btn btn-${variant} btn-${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={baseStyles} 
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
};

export default Button;
