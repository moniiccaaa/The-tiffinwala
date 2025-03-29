import React from 'react';
import { createRoot } from 'react-dom/client'; // Import `createRoot` correctly
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// The Provider component from react-redux makes the store available to all components.

// Now, any component can read from Redux state using useSelector() and update state using useDispatch().