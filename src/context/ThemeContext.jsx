import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    // State variable to hold the current theme mode
  const [themeMode, setThemeMode] = useState(
    // Retrieve theme mode from localStorage or default to "system"
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  // Reference to the root HTML element
  const element = document.documentElement;

  // Media query for detecting dark mode preference
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Effect hook to handle changes in system dark mode preference
  useEffect(() => {
    const onDarkQueryChange = (e) => {
      // If theme is not set in localStorage, toggle dark mode based on system preference
      if (!("theme" in localStorage)) {
        if (e.matches) {
          element.classList.add("dark"); // Apply dark mode
        } else {
          element.classList.remove("dark"); // Remove dark mode
        }
      }
    };

    // Add event listener for changes in dark mode preference
    darkQuery.addEventListener("change", onDarkQueryChange);

    // Cleanup function to remove event listener
    return () => {
      darkQuery.removeEventListener("change", onDarkQueryChange);
    };
  }, [darkQuery, element.classList]);

  // Effect hook to handle changes in theme mode
  useEffect(() => {
    // Switch statement to apply appropriate styles based on theme mode
    switch (themeMode) {
      case "dark":
        element.classList.add("dark"); // Apply dark mode
        localStorage.setItem("theme", "dark"); // Save theme mode to localStorage
        break;
      case "light":
        element.classList.remove("dark"); // Remove dark mode
        localStorage.setItem("theme", "light"); // Save theme mode to localStorage
        break;
      default:
        localStorage.removeItem("theme"); // Remove theme mode from localStorage
        // If theme is not set, toggle dark mode based on system preference
        if (darkQuery.matches) {
          element.classList.add("dark"); // Apply dark mode
        } else {
          element.classList.remove("dark"); // Remove dark mode
        }
        break;
    }
  }, [themeMode, darkQuery.matches, element.classList]);

  // Function to toggle theme mode
  const toggleThemeMode = () => {
    // Toggle between light, dark, and system theme modes
    if (themeMode === "light") {
      setThemeMode("dark"); // Set theme mode to dark
    } else if (themeMode === "dark") {
      setThemeMode("system"); // Set theme mode to system
    } else {
      setThemeMode("light"); // Set theme mode to light
    }
  };

 
  return (
    <ThemeContext.Provider value={{themeMode, toggleThemeMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider