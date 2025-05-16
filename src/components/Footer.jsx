import React from 'react';
import './Footer.css';

const Footer = () => {
  const now = new Date();
  const formatted = now.toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <footer className="footer">
      <span class="status-item"><i class="fas fa-circle connected"></i> Connected</span>
      <span class="status-item"><i class="fas fa-clock"></i> <span id="current-time">{formatted}</span></span>
    </footer>
  );
};

export default Footer;
