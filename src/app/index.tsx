import React, { useMemo } from 'react'
import './index.scss';
import { BrowserRouter } from "react-router-dom";
import Routing from 'pages';
import { Provider as ReduxProvider } from 'react-redux'
import { Layout } from 'pages/layout';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { themeSettings } from './theme';
import { store } from './redux/store';


const App: React.FC = () => {
    const theme = useMemo(() => createTheme(themeSettings), [])
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Layout>
                        <Routing />
                    </Layout>
                </ThemeProvider>
            </BrowserRouter>
        </ReduxProvider>

    )
}

export default App;