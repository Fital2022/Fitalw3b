import {
  Box,
  Grid,
  LinearProgress,
  LinearProgressProps,
  Paper,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../../styles/Things.module.css";

const Pensions: NextPage = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("04/01/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <>
      {/* prueba */}
      <Grid item xs={12}>
        <Box
          marginTop={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography fontSize={30}>PENSIONES</Typography>
        </Box>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              boxShadow: "none",
              marginTop: { xs: 0, md: 6 },
              height: { xs: "30vh", sm: "60vh" , md: "49vh" },
            }}
            style={{ background: "transparent" }}
          >
            <Box
              display="flex"
              width={"100%"}
              height={"100%"}
              border="none"
              alignItems="center"
              justifyContent="center"
            >
              <Box className={styles["containerTimer"]}>
                <Typography style={{ fontSize: 20 }}>
                  Tiempo para recibir tu pensión
                </Typography>
                <Box className="timer-inner">
                  <Box className="timer-segment">
                    <span className="time">{days}</span>
                    <Typography className="label">Días</Typography>
                  </Box>
                  <span className="divider">:</span>
                  <Box className="timer-segment">
                    <span className="time">{hours}</span>
                    <Typography className="label">Horas</Typography>
                  </Box>
                  <span className="divider">:</span>
                  <Box className="timer-segment">
                    <span className="time">{minutes}</span>
                    <Typography className="label">Minutos</Typography>
                  </Box>
                  <span className="divider">:</span>
                  <Box className="timer-segment">
                    <span className="time">{seconds}</span>
                    <Typography className="label">Segundos</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6} spacing={0}>
          <Grid item>
            <Paper
              sx={{
                boxShadow: "none",
                marginTop: { xs: "50px" },
                height: { xs: "10vh", sm: "52vh", md: "49vh" },
              }}
              style={{ backgroundColor: "transparent" }}
            >
              <Box
                display="flex"
                width={"100%"}
                height={"100%"}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      marginTop={0}
                      sx={{
                        width: { xs: "90%", sm: "90%", md: "95%" },
                        marginLeft : { xs: 2.5},
                        height: 100,
                        backgroundColor: "#F0F0F0",
                        "&:hover": {
                          backgroundColor: "#F0F0F0",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <Box sx={{ width: "100%" }}>
                        <Box
                          display="flex"
                          justifyContent="left"
                          alignItems="left"
                          sx={{ width: "100%" }}
                        >
                          <Typography sx={{ marginLeft: 2 }}>
                            Pensión 1
                          </Typography>
                        </Box>
                        <LinearProgressWithLabel
                          sx={{ height: 15, marginLeft: 2 }}
                          value={10}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      marginTop={1}
                      sx={{
                        width: { xs: "90%", sm: "90%", md: "95%" },
                        marginLeft : { xs: 2.5},
                        height: 100,
                        backgroundColor: "#F0F0F0",
                        "&:hover": {
                          backgroundColor: "#F0F0F0",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <Box sx={{ width: "100%" }}>
                        <Box
                          display="flex"
                          justifyContent="left"
                          alignItems="left"
                          sx={{ width: "100%" }}
                        >
                          <Typography sx={{ marginLeft: 2 }}>
                            Pensión 2
                          </Typography>
                        </Box>
                        <LinearProgressWithLabel
                          sx={{ height: 15, marginLeft: 2 }}
                          value={40}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Pensions;
