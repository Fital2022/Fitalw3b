import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { OnboardingForm } from "../../components/forms";

const OnboardingPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "var(--top-gradient)",
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
          width: { xs: "55px", md: "70px" },
          height: { xs: "55px", md: "70px" },
          position: "absolute",
          top: { xs: "20px", md: "40px" },
          left: { xs: "20px", md: "40px" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          // bgcolor: "grey",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: {xs: "95%", sm: "90%", md: "auto" } }}>
          <OnboardingForm />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            ml: 9,
          }}
        >
          <CardMedia
            image="icons/Pagina-Web-logo.png"
            component="img"
            alt="Fital Logo"
            sx={{
              width: { lg: "490px", xl: "590px" },
              height: { lg: "490px", xl: "590px" },
            }}
          />
        </Box>
      </Box>
      {/* <Box sx={{ marginX: "auto", p: 3, width: "1600px", maxWidth: "95%" }}>
        <Box sx={{ marginLeft: 11 }}>
          <Typography sx={{ fontSize: "34px", bold: "", color: "white" }}>
            Bienvenido
          </Typography>
          <Typography sx={{ fontSize: "24px", mb: 2, color: "white" }}>
            Sube tus datos
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Box display="flex" justifyContent="center">
            <OnboardingForm />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <CardMedia
              image="icons/Pagina-Web-logo.png"
              component="img"
              alt="Fital Logo"
              sx={{ width: "590px", height: "590px" }}
            />
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default OnboardingPage;
