import { useAppDispatch } from '@/shared/model';
import { Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { FieldValues, useForm, ResolverResult, Resolver } from 'react-hook-form';
import { z } from 'zod';
import { LoginFormSchema, loginFormSchema } from '../../model/loginFormSchema';
import { loginThunk } from '../../model/login';
import { Copyright } from '@/shared/ui';

type Props = {
    onComplete?: () => void
}

const LoginForm: React.FC<Props> = (props) => {

    const dispatch = useAppDispatch();

    const {
        setError,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    })

    const onSubmitHandler = useCallback(
        ({ username, password }: LoginFormSchema) => {
            dispatch(loginThunk({ username, password }))
                .unwrap()
                .then(() => props.onComplete?.())
                .catch((error: { message: any; }) => {
                    setError('username', { type: 'server', message: error.message })
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
                    Увійти
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmitHandler)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="login-username"
                        label="Username"
                        autoFocus
                        type="input"
                        {...register('username')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register('password')}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Увійти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </ >
    )
}


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

export default LoginForm