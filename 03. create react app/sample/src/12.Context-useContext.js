import './App.css';
import {useState, createContext} from 'react'
import ContentApp from './Context';

// // // Context & useContext
// // Context
// CompA => CompB (trung gian) => CompC
// // Các bước làm
// 1. Create context
// 2. Provider
// 3. Consumer

// Theme: Dark / Light

// App.js
export const ThemeContext = createContext()
function App() {
  const [theme, setTheme] = useState('dark')
  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <button onClick={changeTheme}>Change Theme</button>
        <ContentApp />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
