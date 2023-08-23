import React from 'react';
import ReactDOM from 'react-dom/client';
// src/main.js or src/main.ts
import 'tailwindcss/tailwind.css';
// Rest of your code follows...

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
