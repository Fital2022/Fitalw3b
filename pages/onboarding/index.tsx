import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { OnboardingForm } from "../../components/forms";

const OnboardingPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "linear-gradient(117deg, #000000 0%, #2e3192 53%, #3b1458 100%)",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        image="icons/Pagina-Web-logo.png"
        component="img"
        alt="Fital Logo"
        sx={{
          width: "70px",
          height: "70px",
          position: "absolute",
          top: "40px",
          left: "40px",
        }}
      />

      <Box sx={{ minWidth: "1600px", marginX: "auto", p: 3 }}>
        <Box sx={{marginLeft: 11}} >
          <Typography sx={{ fontSize: "34px", bold: "" }}>
            Bienvenido
          </Typography>
          <Typography sx={{ fontSize: "24px", mb: 2 }}>
            Sube tus datos
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-around" >
          <Box display="flex" justifyContent="center">
            <OnboardingForm />
          </Box>
          <Box display="flex" justifyContent="center">
            <CardMedia
              image="icons/Pagina-Web-logo.png"
              component="img"
              alt="Fital Logo"
              sx={{ width: "590px", height: "590px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingPage;
