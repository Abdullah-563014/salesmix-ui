// // ThemeContext.js
// import { CloseButton } from "@/app";
// import { getLoginSelector } from "@/store/reducer/login.reducer";
// import { createContext, useContext, useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
// // Create a context for the theme
// const ThemeContext = createContext();

// // Create a provider component to wrap your app
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light"); // 'light' or 'dark'
//   const { userDetails } = useSelector(getLoginSelector);
//   // Toggle between 'light' and 'dark' themes
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//     localStorage.theme = theme === "light" ? "dark" : "light";
//     if (theme === "light") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   useEffect(() => {
//     // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//     if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//       setTheme("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "light";
//       setTheme("light");
//     }
//   }, []);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//       {userDetails ? (
//         <ToastContainer
//           position="bottom-center"
//           autoClose={3000}
//           theme={theme}
//           hideProgressBar
//           closeButton={CloseButton}
//           style={{
//             width: "auto",
//             minWidth: 400
//           }}
//         />
//       ) : null}
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook to use the theme context in components
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
