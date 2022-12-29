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
import { RightsList } from "../../components/List";

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

  const handleClick = () => {
    startAnimation();
    handleOpen();
  }

  const rightss = useSelector(
    (state: RootState) => state.empire.selectedEmpire?.rights
  );
  
  return (
    <>
      <RightsList data={rightss} onClick={handleClick}/>
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
    </>
  );
};

export default ResponsiveGrid;
