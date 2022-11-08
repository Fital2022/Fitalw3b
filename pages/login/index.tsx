import type { NextPage } from 'next'

import * as React from 'react';

import { Box, Button, Grid } from '@mui/material';

import { FirstLayout } from '../../components/Layout';
import styles from './Login.module.css'

const handleSubmit = async (event: any) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault()

  // Get data from the form.
  const data = {
    first: event.target.first.value,
    last: event.target.last.value,
  }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/form'

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  }

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json()
  alert(`user: ${data.first}, password`)
}

const Inicio: NextPage = () => {
  return (
    <FirstLayout title={'Fital'} pageDescription={'Inicio'}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "70vh" }}
      >
        <h1 className={styles['title']}>Iniciar Sesión</h1>
        <Grid item>
          <Box
            component="img"
            sx={{
              height: 150,
              width: 150,
              maxHeight: { xs: 233, md: 150 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="User Image"
            src="/backgrounds/avatar.png"
          />
        </Grid>
        <Grid>
          <br />
          <Inputs />
        </Grid>
      </Grid>
    </FirstLayout >
  )
}

const Inputs = () => {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <form className={styles['formulario']} onSubmit={handleSubmit}>

        <input className={styles['inputs']} type="text" id="first" name="first" required placeholder='Nombre' /><br />
        <input className={styles['inputs']} type="password" id="last" name="last" required placeholder='Contraseña' /><br />

        <Button type="submit" className={styles['buttonEntrar']} size="large" variant="contained" color="primary">
          Entrar
        </Button>
      </form>
    </Grid>
  );
};

export default Inicio