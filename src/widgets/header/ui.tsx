import React from 'react'
import { AppBar, Container, Toolbar, Box, Button, } from '@mui/material';
import { NavLink } from 'react-router-dom';


export const Header: React.FC = () => {
    return (
        <>
            <AppBar position='fixed' sx={{
                top: 0,
                left: 0,
            }}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                       <Box> LOGO </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <NavLink to='/'>
                                Фільми
                            </NavLink>
                            <NavLink to='/about'>
                                Серіали
                            </NavLink>
                        </Box>
                        {/* <Search /> */}
                        <Button color="inherit">Увійти</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>

    )
}
