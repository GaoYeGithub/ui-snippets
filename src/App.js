import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Copy, CheckCircle } from 'lucide-react';
import { cssSnippets, globalStyles } from './components/cssSnippets';
import './App.css';

const App = () => {
  const handleCopy = (css, name) => {
    navigator.clipboard.writeText(css).then(() => {
      toast.success(`${name} CSS Copied!`, {
        style: {
          background: '#212121',
          color: '#b3b3b3',
          borderRadius: '8px',
          fontWeight: 'bold',
          border: '1px solid #535353'
        },
        icon: <CheckCircle size={24} color="#1db954" />
      });
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#b3b3b3] p-6">
      <Toaster position="bottom-right" />
      
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#1db954] mb-8">
          CSS Snippet Grid
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cssSnippets.map((snippet) => (
            <div 
              key={snippet.id} 
              className="bg-[#212121] rounded-lg border border-[#535353] 
                         overflow-hidden transition-all duration-300 
                         hover:border-[#1db954] hover:scale-105"
            >
              <div className="p-5">
                <h2 className="text-xl font-semibold text-[#b3b3b3] mb-4 
                               border-b border-[#535353] pb-2">
                  {snippet.name}
                </h2>
                
                <div 
                  onClick={() => handleCopy(snippet.css.trim(), snippet.name)}
                  className="relative cursor-pointer bg-[#212121] 
                             rounded-lg p-4 flex items-center justify-center 
                             group hover:bg-[#535353] transition-all duration-300"
                >
                  {snippet.preview}
                  
                  <div className="absolute inset-0 bg-[#1db954] bg-opacity-0 
                                  group-hover:bg-opacity-10 
                                  flex items-center justify-center 
                                  transition-all duration-300">
                    <div className="flex items-center text-[#1db954] 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity">
                      <Copy className="mr-2" /> 
                      <span className="font-semibold">Copy CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{globalStyles}</style>
    </div>
  );
};

export default App;
