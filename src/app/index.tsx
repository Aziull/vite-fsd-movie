import React, { useMemo } from 'react'
import './index.scss';
import { BrowserRouter } from "react-router-dom";
import Routing from 'pages';
import { Layout } from 'pages/layout';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { themeSettings } from './theme';


const App: React.FC = () => {
    const theme = useMemo(() => createTheme(themeSettings), [])
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Routing />
                </Layout>
            </ThemeProvider>

        </BrowserRouter>
    )
}

export default App;