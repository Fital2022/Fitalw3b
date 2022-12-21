import { CameraAlt } from '@mui/icons-material'
import styles from "../../styles/form.module.css";
import { Grid, Badge, Avatar, Typography, Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch, setShowForm2 } from '../../store';

export const ResumeFormP = () => {
    const dispatch = useDispatch<AppDispatch>();
    const closeform = () => {
        dispatch(setShowForm2(false));
      };
  return (
    <>
                      <Grid item xs={2}>
                        <Badge
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          badgeContent={<CameraAlt />}
                        >
                          <Avatar
                            alt="service1"
                            src="/images/avatar/casa1.jpeg"
                            sx={{ width: "70px", height: "70px" }}
                          />
                        </Badge>
                        <br />
                        <br />
                        <Typography sx={{color: "black"}}>SUCESION</Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        xs={8}
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                        className={styles["table-data"]}
                      >
                        <Grid item container direction="row" sx={{mt: "50px"}} justifyContent="center">
                          <div className={styles["form-title"]}>
                            <Typography variant="h4">Fideicomitente</Typography>
                          </div>
                          <br />
                          <br />
                          <br />
                          <Grid item  xs={6} sx={{mt: "5px"}}>
                            <Typography sx={{color: "black"}}>Rentabilidad Estimada</Typography>
                            <hr />
                          </Grid>
                          <Grid item container justifyContent="center" alignItems="center" direction="row">
                            <Grid
                              item
                              xs={5}
                              justifyContent="flex-start"
                              container
                              direction="column"
                            >
                              <Grid item>
                                <Typography sx={{color: "black"}}>Inversión Inicial</Typography>
                                <Typography sx={{color: "black"}}>Plusvalía Estimada</Typography>
                                <Typography sx={{color: "black"}}>Renta Total Estimada</Typography>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              xs={5}
                              container
                              justifyContent="flex-end"
                              direction="column"
                            >
                              <Grid item>
                                <Typography sx={{color: "black"}}>$58,520.00</Typography>
                                <Typography sx={{color: "black"}}>$53,830.33</Typography>
                                <Typography sx={{color: "black"}}>$66,050.36</Typography>
                              </Grid>
                            </Grid>
                            <Grid item container direction="column">
                              <Grid item>
                                <hr />
                              </Grid>
                              <br />
                              <Grid
                                item
                                container
                                alignItems="center"
                                spacing={2}
                                justifyContent="space-evenly"
                                direction="row"
                              >
                                <Typography sx={{color: "black"}}>Valor Final</Typography>
                                <Typography sx={{ color: "#0E9643" }}>
                                  $178,400.69
                                </Typography>
                              </Grid>
                              <Grid item>
                                <hr />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <br />
                            <br />
                            <Typography sx={{color: "black"}}>Rendimiento Estimado</Typography>
                            <hr />
                          </Grid>
                          <br />
                          <Grid
                            item
                            container
                            xs={12}
                            justifyContent="space-evenly"
                            direction="row"
                          >
                            <Typography sx={{color: "black"}}>Promedio Anual</Typography>
                            <Typography sx={{ color: "#097381" }}>
                              20.49%
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            container
                            xs={12}
                            justifyContent="space-evenly"
                            direction="row"
                          >
                            <Typography sx={{color: "black"}}>Total de Periodo</Typography>
                            <Typography sx={{ color: "#097381" }}>
                              204.85%
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-end"
                            
                          >
                            <Button
                              className={styles["button-form-select"]}
                              sx={{
                                bgcolor: "#31A354",
                                color: "white",
                                borderRadius: "10px",
                                width: "130px",
                                height: "37px",
                                mt: "40px",
                              }}
                              onClick={closeform}
                            >
                              Finalizar
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
  )
}
