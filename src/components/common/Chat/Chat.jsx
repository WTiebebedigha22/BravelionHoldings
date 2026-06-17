import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Chat.css';

// ─── Contextual WhatsApp Config per Division ──────────────────────────────
const WHATSAPP_DATA = {
  estates: {
    label: 'Estates',
    accent: '#1a5c3a',
    accentLight: '#e8f5ee',
    greeting: 'Looking for property insights or investment opportunities? Chat with our team right now on WhatsApp.',
    templateMessage: 'Hello Bravelion Estates, I am interested in your property listings and investment opportunities. Can I get more details?',
  },

  services: {
    label: 'Services',
    accent: '#1a3a5c',
    accentLight: '#e8f0f8',
    greeting: 'Need help choosing the right strategic or engineering service? Let\'s discuss your project requirements on WhatsApp.',
    templateMessage: 'Hello Bravelion Services, I would like to make an inquiry regarding your consulting and corporate advisory services.',
  },

  training: {
    label: 'Training',
    accent: '#7c3a00',
    accentLight: '#fdf0e6',
    greeting: 'Interested in a professional course or corporate HSE certification? Message our admissions desk on WhatsApp.',
    templateMessage: 'Hello Bravelion Training, I am interested in your professional training programs and would like to find out about upcoming cohorts.',
  },

  general: {
    label: 'General',
    accent: '#25D366', // Standard WhatsApp Green for general entry
    accentLight: '#e6f7ed',
    greeting: 'Hi there! How can Bravelion Holdings help you today? Connect with us instantly over WhatsApp.',
    templateMessage: 'Hello Bravelion Holdings, I visited your website and would like to make a general inquiry.',
  },
};

// ─── Your Company Phone Number (Include country code, no "+" or dashes) ────
const WHATSAPP_NUMBER = '+2347081728260'; // Replace with your actual company WhatsApp number

// ─── Determine which division the user is in ───────────────────────────────
function useDivision() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/estates')) return 'estates';
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/training')) return 'training';
  return 'general';
}

// ─── Component ─────────────────────────────────────────────────────────────
const ChatButton = () => {
  const division = useDivision();
  const config = WHATSAPP_DATA[division];

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Delayed entry animation
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Auto-close bubble if they switch pages/divisions
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [division]);

  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(config.templateMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open in a new tab safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className={`chat-widget ${isVisible ? 'chat-widget--visible' : ''}`}>

      {/* ── Contextual Pop-up Panel ── */}
      <div
        className={`chat-panel ${isOpen ? 'chat-panel--open' : ''}`}
        aria-hidden={!isOpen}
        style={{ '--accent': config.accent, '--accent-light': config.accentLight }}
      >
        {/* Header */}
        <div className="chat-panel__header">
          <div className="chat-panel__header-info">
            <span className="chat-panel__status-dot" />
            <div>
              <p className="chat-panel__title">Bravelion Holdings</p>
              <p className="chat-panel__subtitle">{config.label} Division</p>
            </div>
          </div>
          <button className="chat-panel__close" onClick={() => setIsOpen(false)} aria-label="Close chat">✕</button>
        </div>

        {/* Body Text */}
        <div className="chat-panel__body chat-panel__body--whatsapp">
          <div className="chat-panel__greeting-box">
            <div className="chat-panel__avatar">BL</div>
            <p className="chat-panel__greeting-text">{config.greeting}</p>
          </div>

          {/* Action Button */}
          <button className="chat-panel__wa-btn" onClick={handleWhatsAppRedirect}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.143 1.233 8.38 3.472 2.238 2.24 3.466 5.223 3.461 8.391-.01 6.533-5.335 11.857-11.866 11.857-2.017-.001-3.998-.518-5.753-1.501L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.316 0 9.647-4.32 9.654-9.637.003-2.576-1.001-5-2.83-6.83C16.31 2.316 13.89 1.32 11.31 1.32c-5.323 0-9.654 4.33-9.66 9.647-.002 1.708.487 3.376 1.419 4.823l-.998 3.644 3.732-.977s.002-.001.004-.001zM17.486 14.4c-.3-.15-1.774-.875-2.05-.974-.276-.1-.476-.15-.676.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.496-1.78-1.671-2.08-.175-.3-.018-.463.13-.612.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.625-.926-2.225-.244-.585-.491-.507-.676-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.025-.275.95-1.05 3.1-1.05 3.35 0 .25.175.5.375.75.2.3 2.05 3.13 4.96 4.387.693.3 1.233.479 1.654.613.697.221 1.33.19 1.83.115.557-.084 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
            </svg>
            Start Chat
          </button>
        </div>
      </div>

      {/* ── Trigger Button (WhatsApp Branded) ── */}
      <button
        className={`chat-trigger ${isOpen ? 'chat-trigger--open' : ''}`}
        style={{ '--accent': config.accent }}
        onClick={() => setIsOpen((p) => !p)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {/* SVG WhatsApp Icon */}
        <span className="chat-trigger__icon chat-trigger__icon--chat">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.143 1.233 8.38 3.472 2.238 2.24 3.466 5.223 3.461 8.391-.01 6.533-5.335 11.857-11.866 11.857-2.017-.001-3.998-.518-5.753-1.501L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.316 0 9.647-4.32 9.654-9.637.003-2.576-1.001-5-2.83-6.83C16.31 2.316 13.89 1.32 11.31 1.32c-5.323 0-9.654 4.33-9.66 9.647-.002 1.708.487 3.376 1.419 4.823l-.998 3.644 3.732-.977s.002-.001.004-.001zM17.486 14.4c-.3-.15-1.774-.875-2.05-.974-.276-.1-.476-.15-.676.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.496-1.78-1.671-2.08-.175-.3-.018-.463.13-.612.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.625-.926-2.225-.244-.585-.491-.507-.676-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.025-.275.95-1.05 3.1-1.05 3.35 0 .25.175.5.375.75.2.3 2.05 3.13 4.96 4.387.693.3 1.233.479 1.654.613.697.221 1.33.19 1.83.115.557-.084 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
          </svg>
        </span>
        
        {/* Close Icon when open */}
        <span className="chat-trigger__icon chat-trigger__icon--close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </button>

    </div>
  );
};

export default ChatButton;