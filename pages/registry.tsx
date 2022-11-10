import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FormLayout } from "../components/Layout";
import { FormRegistry } from '../components/Ui/FormRegistry';

const registry = () => {
  return (
    <FormLayout
      title={"Fital - Registro"}
      pageDescription={"Formulario de registro"}
    >
      <Box>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{marginTop: 15}}
        >

          <Grid item xs={9} sx={{ paddingLeft:20}}>
            <Typography sx={{padding:5}} variant="h2">Registrate</Typography>
            <FormRegistry/>
          </Grid>
          <Grid item xs={3} sx={{paddingRight:10}} >
            <Image
              alt="logo"
              src="/icons/Form-logo.png"
              width={300}
              height={300}
            />
          </Grid>
        </Grid>
      </Box>
    </FormLayout>
  );
};

export default registry;
