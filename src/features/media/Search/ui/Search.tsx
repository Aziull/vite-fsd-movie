import { TextField, Button } from '@mui/material';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../model/search';
import { useAppDispatch } from '@/shared/model';


const MovieSearch: React.FC = () => {
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        dispatch(searchMovies(searchTerm)).then(re=> {
            console.log('resss',re)
        }) ;
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                label="Search for a movie"
                value={searchTerm}
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit">
                Search
            </Button>
        </form>
    );
};

export default MovieSearch;