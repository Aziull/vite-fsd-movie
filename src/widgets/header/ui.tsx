import React from 'react'
import { AppBar, Container, Toolbar, Box, Button, } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { selectIsAuthorized } from '@/entities/authToken';
import { LogoutButton } from '@/features/authentication/Logout';
import './index.scss'
import { Search } from '@/features/media/Search';

export const Header: React.FC = () => {
    const isAuthorized = useAppSelector(selectIsAuthorized)
    return (
        <>
            <AppBar position='fixed' sx={{
                top: 0,
                left: 0,
            }}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Button component={Link} sx={{fontWeight:600}} color='inherit' to='/'> MovieHUB </Button>
                        <Box sx={{ paddingLeft: 10, flexGrow: 1, display: { xs: 'none', md: 'flex' } }} gap={4}>
                            <Button component={NavLink} to='/movies' color='inherit'>
                                Фільми
                            </Button>
                            <Button component={NavLink} to='/series'  color='inherit'>
                                Серіали
                            </Button>
                        </Box>

                        {/* <Search/> */}
                        {/* <Search /> */}
                        {isAuthorized ? (
                        <>
                        <Button component={NavLink} to='/profile' color="inherit">Профіль</Button>
                        <LogoutButton/>
                        </>
                        
                        )
                            : <Button component={NavLink} to='/login' color="inherit">Увійти</Button>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </>

    )
}
