import type { NextPage } from 'next'

import * as React from 'react';

import { Box, Button, Grid, Link } from '@mui/material';

import { FirstLayout } from '../../components/Layout';
import styles from './Welcome.module.css'
import NextLink from 'next/link';


const WelcomePage: NextPage = () => {
  return (
    <FirstLayout title={'Fital'} pageDescription={'Inicio'}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "70vh" }}
      >
        <Grid item>
          <Box
            component="img"
            sx={{
              height: 203,
              width: 320,
              maxHeight: { xs: 233, md: 150 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Fital Logo"
            src="/backgrounds/fitalLogo.svg"
          />
        </Grid>
        <Grid>
          <br />
          <Buttons />
        </Grid>
      </Grid>
    </FirstLayout >
  )
}

const Buttons = () => {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <NextLink href='/login' passHref>
        <Link className={styles['linkk']}>
        <Button className={styles['buttonLogin']} size="large" variant="contained" color="primary">
        Iniciar Sesión
      </Button>
        </Link>
      </NextLink>
      
      <br /><br />
      <Button className={styles['buttonRegistro']} size="large" variant="contained" color="primary" href="/registro">
        Registrarse
      </Button>
    </Grid>
  );
};

export default WelcomePage