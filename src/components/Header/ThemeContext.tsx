import React from 'react';

const ThemeContext = () => {
    return (
        <div>
            
        </div>
    );
};

export {ThemeContext};// import React, { createContext, useContext, ReactNode, useState } from 'react';
//
// type Theme = 'light' | 'dark';
//
// interface ThemeContextProps {
//     theme: Theme;
//     toggleTheme: () => void;
// }
//
// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
//
// const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [theme, setTheme] = useState<Theme>('light');
//
//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//     };
//
//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };
//
// const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (!context) {
//         throw new Error('useTheme must be used within a ThemeProvider');
//     }
//     return context;
// };
//
// export { ThemeProvider, useTheme };
