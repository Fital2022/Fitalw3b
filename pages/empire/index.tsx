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
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
import { EditRounded, DeleteRounded } from "@mui/icons-material";
import { NextPage } from "next";

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

const TITLES = [
  "Bien",
  "Estatus",
  "Heredero",
  "Porcentaje de herencia",
  "Valor",
];

const EmpirePage: NextPage = () => {
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
  };

  const rightss = useSelector(
    (state: RootState) => state.empire.selectedEmpire?.rights
  );

  return (
    <>
      {/* <RightsList data={rightss} onClick={handleClick}/> */}
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "550px",
          // boxShadow: "0px -10px 15px #00000029",
          borderRadius: "10px",
          bgcolor: "transparent",
          maxWidth: "95%",
          mx: "auto",
          mt: 3,
        }}
      >
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {TITLES &&
                TITLES.length > 0 &&
                TITLES.map((title) => (
                  <TableCell
                    key={title}
                    align="center"
                    sx={{
                      bgcolor: "rgba(142, 75, 168, 0.16)",
                      color: "#7B7B7B",
                    }}
                  >
                    {title}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflowY: "hidden" }}>
            {rightss &&
              rightss.length > 0 &&
              rightss.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    bgcolor:
                      index % 2 !== 0
                        ? "rgba(142, 75, 168, 0.16)"
                        : "transparent",
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{
                      color: "#7B7B7B",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "50%",
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        // bgcolor: 'grey'
                      }}
                    >
                      <Avatar src={item.img} sx={{ mr: 3 }} />
                      <Typography>{item.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#7B7B7B" }}>
                    <Typography>Sin asignar</Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#7B7B7B" }}>
                    <Typography>Sin asignar</Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#7B7B7B" }}>
                    <Typography>0%</Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#7B7B7B" }}>
                    <Typography>1,000,000</Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
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

export default EmpirePage;
