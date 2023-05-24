import { useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);

    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('dark');
  }

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    </button>
  );
}