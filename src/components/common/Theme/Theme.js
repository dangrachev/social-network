import {useState} from "react";
import {createTheme} from "@mui/material";

export const useTheme = () => {

    const [themeMode, setThemeMode] = useState('dark');

    const themeModeOptions = createTheme({
        palette: {
            mode: themeMode,
        }
    });

    const switchThemeMode = () => {
        if(themeMode === 'dark') {
            setThemeMode('light')
        } else {
            setThemeMode('dark')
        }
    }

    return [themeMode, switchThemeMode, themeModeOptions];
}
