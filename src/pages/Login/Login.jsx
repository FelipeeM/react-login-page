import React from "react";
import './login.css'

import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  InputAdornment,
  IconButton,
  FormControl
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [values, setValues] = React.useState({
    keepConnected: false,
    user: '',
    password: '',
    showPassword: false,
  });

  const showValues = () => {
    console.log("values:", values)
  }

  const handleChangeChecked = () => {
    setValues({
      ...values,
      keepConnected: !values.keepConnected,
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="centerContainer">
      <Paper elevation={3} style={{ padding: 30, 'maxWidth': '300px' }}>
        <FormControl>
          <Grid
            container
            spacing={3}
            justify={'center'}
            alignItems={'center'}
          >
            <Grid item xs={12}>
              <TextField fullWidth 
                label="Email"
                onChange={handleChange('user')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth
                label="Senha"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end">
                      <IconButton
                        disabled={!values.password.length > 0}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.keepConnected}
                    onChange={handleChangeChecked}
                  />
                }
                label="Mantenha-me conectado"
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                fullWidth
                onClick={showValues}
              > Entrar </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </div>
  )
}

export default Login