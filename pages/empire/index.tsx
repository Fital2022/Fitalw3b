import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ActionsLayout } from "../../components/Layout/ActionsLayout";
import styles from "../../styles/Things.module.css";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  CardActions,
  IconButton,
  Button,
  Modal,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { IRight } from "../../interfaces/empireInterfaces";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ReactCanvasConfetti from "react-canvas-confetti";
import router from "next/router";

// confetti
function randomInRange(min: any, max: any) {
  return Math.random() * (max - min) + min;
}

function getAnimationSettings(originXA: any, originXB: any) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}
// confetti

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

interface Props {
  rights: IRight[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ResponsiveGrid: FC<Props> = ({ rights }) => {
  // confetti
  const refAnimationInstance = useRef<any>(null);
  const [intervalId, setIntervalId] = useState<any | null>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);
  // confetti

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // modal
  const [status, setStatus] = useState<string>("");

  const right: IRight[] = [
    {
      name: "casa 1",
      value: 2000000,
      type: "casa",
      id: 1,
      img: "/images/avatar/casa1.jpeg",
    },
    {
      name: "casa 2",
      value: 20000000,
      type: "casa",
      id: 2,
      img: "/images/avatar/casa2.jpeg",
    },
    {
      name: "auto 1",
      value: 2000000,
      type: "auto",
      id: 3,
      img: "/images/avatar/coche1.jpeg",
    },
    {
      name: "auto 2",
      value: 2000000,
      type: "auto",
      id: 4,
      img: "images/avatar/coche2.jpeg",
    },
    {
      name: "Seguro AXA",
      value: 2000000,
      type: "seguro",
      id: 5,
      img: "/images/avatar/axa.png",
    },
    {
      name: "Seguro gnp",
      value: 2000000,
      type: "seguro",
      id: 6,
      img: "/images/avatar/gnp.png",
    },
    {
      name: "Seguro AC/DC",
      value: 2000000,
      type: "seguro",
      id: 7,
      img: "/images/avatar/gnp.png",
    },
    {
      name: "Seguro Fital",
      value: 2000000,
      type: "seguro",
      id: 8,
      img: "/images/avatar/gnp.png",
    },
  ];

  const rightss = useSelector(
    (state: RootState) => state.empire.selectedEmpire?.rights
  );

  return (
    <ActionsLayout pageDescription="" title="">
      <Box sx={{ flexGrow: 1, paddingTop: 2, paddingLeft: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* {Array.from(Array(right.length)).map((_, index) => ( */}
          <>
            {rightss &&
              rightss.length > 0 &&
              rightss.map(({ name, img }, index) => (
                <Grid key={index} item xs={2} sm={2} md={2}>
                  <Card
                    sx={{
                      height: 160,
                      width: 300,
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent sx={{ marginLeft: 1 }}>
                      <Grid
                        container
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        paddingTop={1}
                      >
                        <Grid item>
                          <Avatar
                            alt="Remy Sharp"
                            src={img}
                            sx={{ width: 56, height: 56 }}
                          />
                          {name}
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions disableSpacing sx={{ marginLeft: 1 }}>
                      {/* {object.length > 0 &&
                    object.map((bien, index) => ( */}
                      <Grid container wrap="nowrap" spacing={0}>
                        <IconButton
                          onClick={function (event) {
                            startAnimation();
                            handleOpen();
                          }}
                        >
                          <Grid item>
                            <EditIcon sx={{ color: "black" }} />
                          </Grid>
                          <Grid item xs>
                            <Typography
                              sx={{ paddingRight: 5, color: "black" }}
                            >
                              Editar
                            </Typography>
                          </Grid>
                        </IconButton>
                      </Grid>

                      <Grid container wrap="nowrap" spacing={0}>
                        <IconButton
                          onClick={function (event) {
                            startAnimation();
                            handleOpen();
                          }}
                        >
                          <Grid item>
                            <DeleteIcon sx={{ color: "black" }} />
                          </Grid>
                          <Grid item xs>
                            <Typography
                              sx={{ paddingRight: 9, color: "black" }}
                            >
                              Eliminar
                            </Typography>
                          </Grid>
                        </IconButton>
                      </Grid>

                      {/* ))} */}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </>
          {/* // ))} */}
        </Grid>
      </Box>
      <>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <span
              className={styles.closeModal}
              onClick={function (event) {
                handleClose();
                pauseAnimation();
              }}
            >
              <img
                src="https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png"
                className={styles.closeModal}
              />
            </span>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={3}>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, color: "blue", fontSize: 20 }}
                >
                  <b>¡Felicidades Juan!</b>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={3}>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, color: "black" }}
                >
                  ¿Te gustaría volverlo realidad?
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                className={styles.buttonGreen}
                sx={{
                  borderRadius: "30px",
                  color: "white",
                  bgcolor: "#31a354",
                  opacity: "1",
                }}
                
                onClick={function (event) {
                  handleClose();
                  pauseAnimation();
                  router.push("/onboarding");
                }}
              >
                OK
              </Button>
            </Box>
          </Box>
        </Modal>
        <ReactCanvasConfetti
          refConfetti={getInstance}
          style={{
            position: "fixed",
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
      </>
    </ActionsLayout>
  );
};

export default ResponsiveGrid;
