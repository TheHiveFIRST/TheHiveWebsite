import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

function Root() {
  useEffect(() => {
    // Function to detect system theme and set localStorage theme
    const detectSystemTheme = () => {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Set localStorage based on system preference
      if (darkModeMediaQuery.matches) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark-mode');
      } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark-mode');
      }
    };

    // Run detection on first load
    detectSystemTheme();

    // Add event listener for changes in system theme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', detectSystemTheme);

    // Cleanup event listener on unmount
    return () => {
      darkModeMediaQuery.removeEventListener('change', detectSystemTheme);
    };
  }, []);

  return <App />;
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
