import {useState} from "react";
import {createTheme} from "@mui/material";

export const useTheme = () => {

    const [themeMode, setThemeMode] = useState(() => {
        return sessionStorage.getItem('themeMode') || 'dark'
    });

    const themeModeOptions = createTheme({
        palette: {
            mode: themeMode
        }
    });

    const switchThemeMode = () => {
        if(themeMode === 'dark') {
            setThemeMode('light');
            sessionStorage.setItem('themeMode', 'light');
        } else {
            setThemeMode('dark');
            sessionStorage.setItem('themeMode', 'dark');
        }
    }

    return [themeMode, switchThemeMode, themeModeOptions];
}
