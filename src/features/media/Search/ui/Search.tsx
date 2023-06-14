import { TextField, Button, Box } from '@mui/material';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAppDispatch } from '@/shared/model';
import {searchMediaThunk} from '../model/search'

const MovieSearch: React.FC = () => {
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        dispatch(searchMediaThunk({ title: searchTerm }));
    };

    return (
        <>
            <Box component={'form'} display={'flex'} alignItems={'stretch'} onSubmit={handleSubmit}>
                <TextField
                    
                    variant="outlined"
                    placeholder='Введіть назву'
                    value={searchTerm}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit">
                    Пошук
                </Button>
            </Box>
           
        </>
    );
};

export default MovieSearch;