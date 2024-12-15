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
          borderRadius: '12px',
          fontWeight: 'bold',
          border: '1px solid #535353',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      });
    });
  };

  const handleRightClick = (id) => {
    navigate(`/ide/${id}`);
  };

  return (
    <div className="min-h-screen bg-spotify-primary text-spotify-primary p-6">
      <Toaster position="bottom-right" />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-spotify-accent mb-12 tracking-tight">
          CSS Snippets 
          <span className="text-sm text-spotify-primary opacity-70 block mt-2">
            Left Click to Copy, Right Click to Preview
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cssSnippets.map((snippet) => (
            <div
              key={snippet.id}
              className="group"
              onContextMenu={(e) => {
                e.preventDefault();
                handleRightClick(snippet.id);
              }}
            >
              <div className="bg-spotify-secondary rounded-xl border border-spotify overflow-hidden transition-all duration-300 group-hover:border-spotify-accent group-hover:scale-105 group-hover:shadow-2xl spotify-transition h-72">
                <div className="p-6 h-full flex flex-col justify-between">
                  <h2 className="text-xl font-semibold text-spotify-primary mb-4 pb-2 border-b border-spotify truncate">
                    {snippet.name}
                  </h2>
                  <div
                    onClick={() => handleCopy(snippet.css.trim(), snippet.name)}
                    className="relative cursor-pointer bg-spotify-primary rounded-lg flex items-center justify-center spotify-transition h-48"
                  >
                    <style>{snippet.css}</style>
                    {snippet.preview}
                    <div className="absolute inset-0 bg-spotify-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                  </div>
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
