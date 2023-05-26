import { UserAvatar, UserProfile } from '@/entities/user';
import { useAppDispatch } from '@/shared/model';
import { Box, Button, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputMask from 'react-input-mask';
import { format, parse } from 'date-fns';
import dayjs from 'dayjs';

type Props = {
    userProfile: UserProfile
}
const ChangeUserProfile: React.FC<Props> = ({ userProfile }) => {
    const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

    const [firstName, setFirstName] = useState(userProfile.firstName);
    const [lastName, setLastName] = useState(userProfile.lastName);
    const [avatar, setAvatar] = useState<File | null | string>(null);



    useEffect(() => {
        setFirstName(userProfile.firstName);
        setLastName(userProfile.lastName);
        setAvatar(userProfile.avatar);
    }, [userProfile]);

    useEffect(() => {
        if (userProfile.birthday) {
            setSelectedDate(dayjs(userProfile.birthday));
            console.log('selectedDate', dayjs(userProfile.birthday), userProfile);
        }
    }, []);


    const dispatch = useAppDispatch();

    const handleDateChange = (date: dayjs.Dayjs | null) => {
        setSelectedDate(date);
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            
    }

    // console.log(userProfile.birthday ? parse(userProfile.birthday, 'dd-MM-yyyy', new Date()) : null)

    return (
        <>
            <CssBaseline />

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Профіль
                </Typography>
                <Box component={'form'} onSubmit={handleSubmit}>
                    <UserAvatar userAvatar={avatar} onFileSelect={setAvatar} />

                    <Typography component={'label'}>
                        Ім'я
                        <TextField
                            defaultValue={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            id="propfile-firstName"
                            autoFocus
                        />
                    </Typography>

                    <Typography component={'label'}>
                        Прізвище
                        <TextField
                            defaultValue={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            id="propfile-lastName"
                        />
                    </Typography>

                    <Typography component={'label'}>
                        Дата Народження <br />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={selectedDate ? selectedDate : null}
                                onChange={handleDateChange}
                            />

                        </LocalizationProvider> <br />
                        <Button type='submit'>
                            Зберегти зміни
                        </Button>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default ChangeUserProfile