import {
  Menu,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import router from "next/router";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import styles from "../../styles/Things.module.css";

export const MenuProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CardMedia
        image="images/profile.png"
        sx={{
          width: { xs: "45px", md: "55px" },
          height: { xs: "45px", md: "55px" },
        }}
        onClick={handleClick}
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Grid item xs={3}>
          <Card
            sx={{
              height: 280,
              width: 290,
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ marginLeft: 1 }}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid
                  item
                  container
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                  flexDirection={"column"}
                  paddingTop={1}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/img/test/avatar.png"
                    sx={{ width: 50, height: 50 }}
                  />
                  <span className={styles.infoMember}>
                    <CameraAltIcon fontSize="small" />
                  </span>
                  <Typography sx={{ marginTop: 1 }}>Juan</Typography>
                  <Typography sx={{ marginTop: 0 }}>juan@gmail.com</Typography>
                </Grid>
                <Grid item xs></Grid>
              </Grid>
              <hr />
              <Grid container wrap="nowrap" spacing={2}>
                <Grid
                  item
                  container
                  spacing={1}
                  alignItems="left"
                  paddingTop={1}
                >
                  <PersonIcon
                    sx={{ marginTop: "6px", marginLeft: "5px" }}
                  ></PersonIcon>
                  <Typography sx={{ marginTop: 1 }}>Editar perfil</Typography>
                </Grid>
                <Grid item xs></Grid>
              </Grid>
              <hr />
              <Grid container wrap="nowrap" spacing={2}>
                <Grid
                  item
                  container
                  spacing={1}
                  alignItems="left"
                  paddingTop={1}
                >
                  <SettingsIcon
                    sx={{ marginTop: "6px", marginLeft: "5px" }}
                  ></SettingsIcon>
                  <Typography sx={{ marginTop: 1 }}>Configuraciones</Typography>
                </Grid>
                <Grid item xs></Grid>
              </Grid>
              <hr />
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
                paddingTop={1}
              >
                <Grid item>
                  <Button
                    sx={{
                      color: "gray",
                      background: "white",
                      borderColor: "gray",
                      border: "1px solid #ced4da",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Cerrar sesión
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Menu>
    </>
  );
};
