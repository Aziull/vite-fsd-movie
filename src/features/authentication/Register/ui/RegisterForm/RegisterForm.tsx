import { CssBaseline, Box, Typography, TextField, FormControlLabel, Checkbox, Button, Grid } from '@mui/material'
import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Copyright } from '@/shared/ui'
import { FieldValues, Resolver, useForm } from 'react-hook-form'
import { useAppDispatch } from '@/shared/model'
import { registrantionThunk } from '../../model/registration'
import { z } from 'zod'
import { RegirstrationFormSchema, regirstrationFormSchema } from '../../model/registerFormSchema'

type Props = {
    onComplete?: () => void
}

const RegisterForm: React.FC<Props> = (props) => {

    const dispatch = useAppDispatch();

    const {
        setError,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<RegirstrationFormSchema>({
        resolver: zodResolver(regirstrationFormSchema),
    })

    const onSubmitHandler = useCallback(
        ({ email, username, password }: RegirstrationFormSchema) => {
            dispatch(registrantionThunk({ email, username, password }))
                .unwrap()
                .then(() => props.onComplete?.())
                .catch((error: { message: any; }) => {
                    setError('email', { type: 'server', message: error.message })
                })
        },
        []
    )


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
                    Реєстрація
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmitHandler)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        type="email"
                        {...register('email')}
                    />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        type="username"
                        id="username"
                        autoComplete="current-password"
                        {...register('username')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="username"
                        {...register('password')}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Реєстрація
                    </Button>
                    <Grid container>
                        <Grid item xs>

                        </Grid>
                        <Grid item>
                            <Link to='/login'>
                                {"вже маєте акаунт?"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </ >
    )
}

export default RegisterForm

function zodResolver<TFieldValues extends FieldValues>(schema: z.ZodSchema<TFieldValues>): Resolver<TFieldValues> {
    return async (values) => {
      try {
        const validatedData = schema.parse(values);
        return { values: validatedData, errors: {} };
      } catch (error) {
        return { values: {}, errors: (error as any).formErrors.fieldErrors };
      }
    };
  }