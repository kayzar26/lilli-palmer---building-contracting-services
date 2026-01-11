import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  color?: string;
  strokeWidth?: number;
  size?: number;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ 
  isOpen, 
  onToggle, 
  color = "currentColor", 
  strokeWidth = 2, // Slightly thinner than Framer default to match site elegance
  size = 24       // Default to 24px (standard icon size)
}) => {
  return (
    <button
      onClick={onToggle}
      className="relative z-50 flex items-center justify-center -mr-2"
      style={{ width: size + 20, height: size + 20 }} // Add padding for touch target
      aria-label="Toggle menu"
    >
      <div style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 32 32"
          style={{
            width: "100%",
            height: "100%",
            transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
            transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            strokeDasharray={isOpen ? "20 300" : "12 63"}
            strokeDashoffset={isOpen ? -32.42 : 0}
            style={{
              transition:
                "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke 300ms ease",
            }}
          />
          <path
            className="line"
            d="M7 16 27 16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            style={{
              transition:
                "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke 300ms ease",
            }}
          />
        </svg>
      </div>
    </button>
  );
};

export default HamburgerMenu;
