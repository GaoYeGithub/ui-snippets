import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cssSnippets } from './cssSnippets';

const IDE = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const snippet = cssSnippets.find((snippet) => snippet.id === id);

  const previewClasses = snippet.preview.props.className || '';

  const initialHtml = `
<body>
    <div class="${previewClasses}">${snippet.preview.props.children || ''}</div>
</body>
  `.trim();

  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(snippet.css.trim());

  return (
<div className="min-h-screen bg-spotify-primary text-spotify-primary p-6 flex flex-col">
  <div className="container mx-auto space-y-6">
    <button
      onClick={() => navigate('/')}
      className="group flex items-center text-spotify-accent border border-spotify-accent rounded-full px-4 py-2 hover:bg-spotify-accent hover:text-spotify-primary spotify-transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 group-hover:rotate-180 spotify-transition"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Back to Snippets
    </button>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-spotify-secondary rounded-xl shadow-lg border border-spotify p-6 space-y-4">
        <h2 className="text-xl font-bold text-center text-spotify-accent border-b border-spotify pb-3">
          Code Editor
        </h2>
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="w-full min-h-[150px] h-[calc(50%-1rem)] p-4 bg-spotify-primary text-spotify-primary rounded-lg border border-spotify focus:ring-2 focus:ring-spotify-accent spotify-transition resize-y"
          placeholder="Write HTML here..."
        />
        <textarea
          value={css}
          onChange={(e) => setCss(e.target.value)}
          className="w-full min-h-[150px] h-[calc(50%-1rem)] p-4 bg-spotify-primary text-spotify-primary rounded-lg border border-spotify focus:ring-2 focus:ring-spotify-accent spotify-transition resize-y"
          placeholder="Write CSS here..."
        />
      </div>

      <div className="bg-spotify-secondary rounded-xl shadow-lg border border-spotify p-6">
        <h2 className="text-xl font-bold text-center text-spotify-accent border-b border-spotify pb-3">
          Live Preview
        </h2>
        <div className="w-full h-[400px] bg-white rounded-lg overflow-hidden shadow-inner">
          <iframe
            title="live-preview"
            className="w-full h-full"
            srcDoc={`
              <html>
                <head>
                  <style>${css}</style>
                </head>
                <body>${html}</body>
              </html>
            `}
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default IDE;
