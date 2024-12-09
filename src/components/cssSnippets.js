export const cssSnippets = [
  {
    id: 'glassmorphism-button',
    name: 'Glassmorphism Button',
    preview: (
      <button className="glassmorphism-button">
        Hover Me
      </button>
    ),
    css: `
  .glassmorphism-button {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 12px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .glassmorphism-button:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }`
  },
  {
    id: 'gradient-text',
    name: 'Gradient Text',
    preview: (
      <div className="gradient-text">
        Colorful Text
      </div>
    ),
    css: `
  .gradient-text {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 24px;
  }`
  },
  {
    id: 'hover-shadow-card',
    name: 'Hover Shadow Card',
    preview: (
      <div className="hover-shadow-card">
        Hover Over Me
      </div>
    ),
    css: `
  .hover-shadow-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    width: 200px;
    text-align: center;
  }
  
  .hover-shadow-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }`
  },
  {
    id: 'toggle-button',
    name: 'Toggle Button',
    preview: (
      <label className="toggle-switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    ),
    css: `
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }
  
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 25px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 2.5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #4ecdc4;
  }
  
  input:checked + .slider:before {
    transform: translateX(25px);
  }`
  },
  {
    id: 'animated-loader',
    name: 'Animated Loader',
    preview: (
      <div className="animated-loader">
        <div></div><div></div><div></div>
      </div>
    ),
    css: `
  .animated-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .animated-loader div {
    width: 12px;
    height: 12px;
    background-color: #4ecdc4;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  
  .animated-loader div:nth-child(2) {
    animation-delay: -0.32s;
  }
  
  .animated-loader div:nth-child(3) {
    animation-delay: -0.16s;
  }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }`
  },
];

export const globalStyles = `
  .glassmorphism-button {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 12px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .glassmorphism-button:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .gradient-text {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 24px;
  }
  
  .hover-shadow-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    width: 200px;
    text-align: center;
  }
  
  .hover-shadow-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }
  
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 25px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 2.5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #4ecdc4;
  }
  
  input:checked + .slider:before {
    transform: translateX(25px);
  }
  
  .animated-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .animated-loader div {
    width: 12px;
    height: 12px;
    background-color: #4ecdc4;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  
  .animated-loader div:nth-child(2) {
    animation-delay: -0.32s;
  }
  
  .animated-loader div:nth-child(3) {
    animation-delay: -0.16s;
  }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;
