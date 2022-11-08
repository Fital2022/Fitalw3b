import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

export const FormRegistry = () => {
    const submit = () => {
        console.log('Registro de datos')
    };
    const [formValue, setformValue] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmpass:'',
        showPassword: false,
    });
    const onFormFieldChanges = (event: ChangeEvent<HTMLInputElement>, option:string ) => {

        setformValue({ ...formValue, [event.target.name]: event.target.value });
        // setInputValue(event.target.value);
      }
      const handleClickShowPassword = () => {
        setformValue({ ...formValue, showPassword: !formValue.showPassword });
      };
  return (
    <>
        <form  onSubmit={submit} >
            <Grid direction="row"
  justifyContent="center"
  alignItems="baseline" spacing={5}>

            <Grid item xs={6} sx={{padding:3}} >
                <TextField required sx={{paddingX:2}} autoFocus placeholder='Nombre' name='name'  />
                <TextField required placeholder='Apellido'  name='lastname'  />
            </Grid>

            <Grid item xs={6} sx={{padding:3}}>
                <TextField required sx={{paddingX:2}} placeholder='Correo' name='email'  />
                <TextField required type={formValue.showPassword ? 'text' : 'password'} placeholder='Contraseña' InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {formValue.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
          ),
        }} />
            </Grid>
            <Grid item xs={6} sx={{padding:3}}>
                <TextField required sx={{paddingX:2}} placeholder='Confirmar contraseña' />
      <FormControlLabel
        control={<Checkbox/>}
        label="Acepto Term. y Cond."
      />
      
            </Grid>

            <Grid item sx={{padding:3}}>
            <Button sx={{paddingX:7}}  type='submit'>Registrate</Button>
            </Grid>
            </Grid>
            
        </form>
    </>
  )
}
