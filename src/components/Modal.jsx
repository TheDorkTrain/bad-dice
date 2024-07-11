import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // This should match the animation duration
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      style={{
        position: 'fixed',
        width: '1250px',
        height: '1080px',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isClosing ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
        zIndex: 1000,
      }}
      onClick={closeModal}
    >
      <div
        style={{
          backgroundColor: '#1a1a2e',
          padding: '20px',
          borderRadius: '10px',
          width: '70%',
          height: '60%',
          overflowY: 'auto',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)',
          transform: isClosing ? 'scale(0.9)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
          color: '#e0e0e0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '48px',
            color: '#e0e0e0',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;