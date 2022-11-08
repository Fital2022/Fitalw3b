import type { NextPage } from 'next'
import NextLink from 'next/link';

import * as React from 'react';

import { Box, Button, Grid, Link } from '@mui/material';

import { FirstLayout } from '../../components/Layout';
import styles from './Welcome.module.css'


const RegistroPage: NextPage = () => {
  return (
    <FirstLayout title={'Fital'} pageDescription={'Inicio'}>
      <h1>Registro</h1>
    </FirstLayout >
  )
}

export default RegistroPage