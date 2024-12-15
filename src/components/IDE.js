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
    <div className="min-h-screen bg-[#121212] text-[#b3b3b3] p-6 flex flex-col">
      <button
        onClick={() => navigate('/')}
        className="text-[#1db954] mb-4 px-4 py-2 border border-[#1db954] rounded hover:bg-[#1db954] hover:text-white"
      >
        Back to Snippets
      </button>

      <div className="grid grid-cols-2 gap-4 flex-grow">
        <div className="bg-[#212121] p-4 rounded-lg border border-[#535353]">
          <h2 className="text-xl font-bold text-center mb-4 text-[#1db954]">Editor</h2>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-1/2 p-2 mb-4 bg-[#121212] text-[#b3b3b3] rounded resize-none border border-[#535353]"
            placeholder="Write HTML here..."
          ></textarea>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full h-1/2 p-2 bg-[#121212] text-[#b3b3b3] rounded resize-none border border-[#535353]"
            placeholder="Write CSS here..."
          ></textarea>
        </div>

        <div className="bg-[#212121] p-4 rounded-lg border border-[#535353]">
          <h2 className="text-xl font-bold text-center mb-4 text-[#1db954]">Preview</h2>
          <iframe
            title="live-preview"
            className="w-full h-full bg-white rounded"
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
  );
};

export default IDE;
