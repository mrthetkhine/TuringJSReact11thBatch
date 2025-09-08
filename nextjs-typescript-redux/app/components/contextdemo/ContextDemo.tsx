'use client';

import {Theme, ThemeContext, useGetTheme} from "@/app/components/contextdemo/ThemeContext";
import { useState } from "react";

export default function ContextDemo()
{
    const [theme, setTheme] = useState<Theme>('light');
    return (
        <ThemeContext.Provider value={theme}>
            <MyComponent />
        </ThemeContext.Provider>
    )
}
function MyComponent() {
    const theme = useGetTheme();

    return (
        <div>
            <p>Current theme: {theme}</p>
        </div>
    )
}
