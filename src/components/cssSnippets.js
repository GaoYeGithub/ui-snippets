export const cssSnippets = [
  {
    id: 'gradient-text',
    name: 'Gradient Text',
    css: `
.gradient-text {
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
    preview: (
      <h1 className="gradient-text">Gradient Text</h1>
    ),
  },
  {
    id: 'fancy-button',
    name: 'Fancy Button',
    css: `
.fancy-button {
  background-color: #1db954;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.fancy-button:hover {
  background-color: #1aa34a;
}`,
    preview: (
      <button className="fancy-button">Click Me</button>
    ),
  },
  {
    id: 'neon-border',
    name: 'Neon Border',
    css: `
.neon-border {
  border: 2px solid #39ff14;
  box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
  padding: 20px;
  color: white;
  background-color: black;
  text-align: center;
  font-family: Arial, sans-serif;
}`,
    preview: (
      <div className="neon-border">Neon Border</div>
    ),
  },
  {
    id: 'card-hover',
    name: 'Card Hover Effect',
    css: `
.card {
  width: 300px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #1db954;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}`,
    preview: (
      <div className="card"></div>
    ),
  },
  {
    id: 'pulsing-circle',
    name: 'Pulsing Circle',
    css: `
.pulsing-circle {
  width: 100px;
  height: 100px;
  background-color: #1db954;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}`,
    preview: (
      <div className="pulsing-circle"></div>
    ),
  },
  {
    id: 'glass-effect',
    name: 'Glass Effect',
    css: `
.glass-box {
  width: 300px;
  height: 200px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: white;
  font-family: Arial, sans-serif;
}`,
    preview: (
      <div className="glass-box">Glass Effect</div>
    ),
  },
  {
    id: 'loading-spinner',
    name: 'Loading Spinner',
    css: `
.loading-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1db954;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    preview: (
      <div className="loading-spinner"></div>
    ),
  },
  {
    id: 'gradient-border',
    name: 'Gradient Border',
    css: `
.gradient-border {
  padding: 20px;
  border: 5px solid;
  border-image-source: linear-gradient(to right, #ff7e5f, #feb47b);
  border-image-slice: 1;
  text-align: center;
  font-family: Arial, sans-serif;
}`,
    preview: (
      <div className="gradient-border">Gradient Border</div>
    ),
  },
  {
    id: 'wave-animation',
    name: 'Wave Animation',
    css: `
.wave {
  display: inline-block;
  font-size: 2rem;
  animation: wave 1.5s infinite;
}

@keyframes wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
}`,
    preview: (
      <span className="wave">👋</span>
    ),
  },
  {
    id: 'shadow-box',
    name: 'Shadow Box',
    css: `
.shadow-box {
  width: 200px;
  height: 200px;
  background-color: #1db954;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}`,
    preview: (
      <div className="shadow-box"></div>
    ),
  },
  {
    id: 'tilt-effect',
    name: 'Tilt Effect',
    css: `
.tilt-box {
  width: 250px;
  height: 150px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  border-radius: 10px;
  transform: perspective(500px) rotateX(10deg) rotateY(10deg);
  transition: transform 0.3s;
}

.tilt-box:hover {
  transform: perspective(500px) rotateX(0deg) rotateY(0deg);
}`,
    preview: (
      <div className="tilt-box"></div>
    ),
    id: 'rotating-globe',
    name: 'Rotating Globe',
    css: `
.globe {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, #1e3c72, #2a5298);
  position: relative;
  animation: spin 10s linear infinite;
}

.globe::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, transparent, rgba(255, 255, 255, 0.5));
  mix-blend-mode: screen;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,

    preview: (
      <div className="globe"></div>
    ),
  },
  {
    id: 'simple-box',
    name: 'Simple Box',
    css: `
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 14px;
}`,
    preview: (
      <div className="box">Box</div>
    ),
  },
  {
    id: 'hover-button',
    name: 'Hover Button',
    css: `
    .button {
      padding: 10px 20px;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      transition: background-color 0.3s;
    }

    .button:hover {
      background-color: #27ae60;
    }`,
      preview: (
        <button className="button">Hover Me</button>
    ),
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
  .globe, .box, .button {
  margin: 0 auto;
}
`;
