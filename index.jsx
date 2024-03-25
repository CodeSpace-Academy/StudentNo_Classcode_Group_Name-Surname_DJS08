import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './Search'; // Import the Search component
import './index.css'; // Make sure the path matches where you've saved your CSS file


function App() {
  return (
    <div>
      <h1>Spotify Search</h1>
      <Search /> {/* Use the Search component here */}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
