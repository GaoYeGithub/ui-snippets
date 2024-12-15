import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { cssSnippets, globalStyles } from './components/cssSnippets';
import IDE from './components/IDE';
import './App.css';

const App = () => {
  const navigate = useNavigate();

  const handleCopy = (css, name) => {
    navigator.clipboard.writeText(css).then(() => {
      toast.success(`${name} CSS Copied!`, {
        style: {
          background: '#212121',
          color: '#b3b3b3',
          borderRadius: '8px',
          fontWeight: 'bold',
          border: '1px solid #535353',
        },
      });
    });
  };

  const handleRightClick = (id) => {
    navigate(`/ide/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#b3b3b3] p-6">
      <Toaster position="bottom-right" />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#1db954] mb-8">
          CSS Snippets (Left Click for copy, Right Click for preview)
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cssSnippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-[#212121] rounded-lg border border-[#535353] overflow-hidden transition-all duration-300 hover:border-[#1db954] hover:scale-105"
              onContextMenu={(e) => {
                e.preventDefault();
                handleRightClick(snippet.id);
              }}
            >
              <div className="p-5">
                <h2 className="text-xl font-semibold text-[#b3b3b3] mb-4 border-b border-[#535353] pb-2">
                  {snippet.name}
                </h2>
                <div
                  onClick={() => handleCopy(snippet.css.trim(), snippet.name)}
                  className="relative cursor-pointer bg-[#212121] rounded-lg p-4 flex items-center justify-center group hover:bg-[#535353] transition-all duration-300"
                >
                  <style>{snippet.css}</style>
                  {snippet.preview}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ide/:id" element={<IDE />} />
    </Routes>
  </Router>
);

export default AppRoutes;
