import React from 'react'
import {Avatar,Button,CssBaseline,TextField,Link,Grid,Box,
    Typography,makeStyles, Container} from '@material-ui/core'
import Copyright from './Copyrigth'
import {useForm} from 'react-hook-form'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

export default function({onLogin}){
    const {register, handleSubmit} = useForm()

    const onSubmit = data => {
        const {email, password} = data

        onLogin(email,password)
    }

    const classes = useStyles()

    return (
    <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className = {classes.paper}>
            <Typography component="h1" variant="h3" color="primary">
                D 20
            </Typography>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant= "h5">
                Sign In
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            inputRef={register}
                            margin="normal"
                        />
                    
                    
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            inputRef={register}
                            margin="normal"
                        />
               
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}   
                >
                    Sign In    
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Haven't an account? Sign up
                        </Link>
                    </Grid>
                </Grid>        
            </form>
        </div>
        <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));