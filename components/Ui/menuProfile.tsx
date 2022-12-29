import {
  Menu,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import router from "next/router";
import React from "react";


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
              height: 190,
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
                  <Typography sx={{ marginTop: 1 }}>
                    Cambia tu imagen
                  </Typography>
                </Grid>

                {/* <IconButton
                      // className={styles.iconCamera}
                      // onClick={() => openFilePicker()}
                    >
                      <PhotoCameraIcon
                        sx={{ color: "gray", fontSize: "30px" }}
                      />
                    </IconButton> */}
                <Grid item xs>
                  {/* <Typography sx={{ marginTop: 3.5 }}>
                        Cambia tu imagen
                      </Typography> */}
                </Grid>
              </Grid>
              <br />
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
                      // dispatch(logout());
                      router.push("/login");
                    }}
                  >
                    Cerrar sesión
                  </Button>
                </Grid>
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
                      // dispatch(logout());
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
}



