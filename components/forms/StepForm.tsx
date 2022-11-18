import { CameraAlt, CheckCircle, Star } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "../../styles/Things.module.css";
import { TextField } from "@mui/material";
import DataTable from "../tables/DataTable";
import { IEmpire } from "../../interfaces/empireInterfaces";
import { useDispatch } from "react-redux";
import { AppDispatch, setShowForm } from "../../store";
import ReactCanvasConfetti from "react-canvas-confetti";

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

const StyledTextField = styled(TextField)`
label.Mui-focused{
    width: 446px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
}
.MuiOutlinedInput-root {
    width: 446px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
    fieldset {
        width: 446px;
        height: 38px;
        border-radius: 5px;
        border: 1px solid #707070;
    }
  }
  &:hover fieldset {
    width: 446px;
    height: 38px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
  &.Mui-focused fieldset {
    width: 446px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
}
` as typeof TextField;

const StyledTextField2 = styled(TextField)`
label.Mui-focused{
    width: 273px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
}
.MuiOutlinedInput-root {
    width: 273px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
    fieldset {
        width: 273px;
        height: 38px;
        border-radius: 5px;
        border: 1px solid #707070;
    }
  }
  &:hover fieldset {
    width: 273px;
    height: 38px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
  &.Mui-focused fieldset {
    width: 273px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
}
` as typeof TextField;

interface Props {
  premium: boolean;
  iempire: IEmpire;
}

export const StepForm: FC<Props> = ({ premium, iempire }) => {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status, setStatus] = useState<string>("");

  const handleSubmitF = async (event: any) => {
    startAnimation();
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      birth: event.target.birth.value,
      genre: event.target.genre.value,
      curp: event.target.curp.value,
      rfc: event.target.rfc.value,
      direction: event.target.direction.value,
      marital: event.target.marital.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form2";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    if (response.status == 200) {
      setStatus("success");
      handleOpen();
    }

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    // alert(
    //   `nombre: ${data.name}, fecha de nacimiento: ${data.birth}, sexo: ${data.genre}, domicilio: ${data.direction}, estado civil: ${data.marital} `
    // );
  };

  const [sucesion, setSucesion] = useState(true);

  const [formoption, setFormoption] = useState("data");

  const changecontent = () => {
    if (sucesion) {
      setSucesion(false);
    } else {
      setSucesion(true);
    }
  };

  console.log(iempire);

  const dispatch = useDispatch<AppDispatch>()
  
  const closeform = () => {
    dispatch(setShowForm(false))
  }
  const handleSubmitF = async (event: any) => { 

    event.preventDefault();
  
    const data = {
      name: event.target.name.value,
      birth: event.target.birth.value,
      genre: event.target.genre.value,
      curp: event.target.curp.value,
      rfc: event.target.rfc.value,
      direction: event.target.direction.value,
      marital: event.target.marital.value,
    }
  
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
  
    // API endpoint where we send form data.
    const endpoint = '/api/form2'
  
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
  
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
  
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`nombre: ${data.name}, fecha de nacimiento: ${data.birth}, sexo: ${data.genre}, domicilio: ${data.direction}, estado civil: ${data.marital} `)
    dispatch(setShowForm(false))
  }


  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
    >
      <Grid
        item
        container
        xs={8}
        justifyContent="flex-end"
        sx={{ marginRight: 80 }}
      >
        <Button
          onClick={() => setFormoption("data")}
          className={
            formoption === "data"
              ? styles["button-form-select"]
              : styles["button-form-unselect"]
          }
        >
          Datos
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={() => setFormoption("resume")}
          className={
            formoption === "resume"
              ? styles["button-form-select"]
              : styles["button-form-unselect"]
          }
        >
          Resumen
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={() => setFormoption("premium")}
          className={
            formoption === "premium"
              ? styles["button-form-select"]
              : styles["button-form-unselect"]
          }
          startIcon={<Star />}
        >
          Premium
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Card
          className={styles["form"]}
          sx={
            sucesion
              ? { width: "717px", height: "540px" }
              : { width: "1034px", height: "542px" }
          }
        >
          <CardContent>
            <Grid container>
              {(() => {
                if (formoption === "data") {
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
                        <Typography >Fideicomitente</Typography>
                      </Grid>
                      {sucesion ? (
                        <Grid
                          item
                          container
                          xs={10}
                          justifyContent="center"
                          direction="column"
                        >
                          <Grid item>
                            <div className={styles["form-title"]}>
                              <Typography variant="h4">
                                Fideicomitente
                              </Typography>
                            </div>
                            <form onSubmit={handleSubmitF}>
                              <StyledTextField
                                required
                                placeholder="Nombre Completo"
                                name="name"
                              />
                              <br />
                              <br />

                              <StyledTextField
                                required
                                type={"date"}
                                placeholder="Fecha de nacimiento"
                                name="birth"
                              />
                              <br />
                              <FormControl component="fieldset">
                                <FormLabel component="legend">Sexo</FormLabel>
                                <RadioGroup
                                  row
                                  aria-label="genre"
                                  defaultValue="null"
                                  name="genre"
                                >
                                  <FormControlLabel
                                    value="Mujer"
                                    control={<Radio color="primary" />}
                                    label="Mujer"
                                  />
                                  <FormControlLabel
                                    value="Hombre"
                                    control={<Radio color="primary" />}
                                    label="Hombre"
                                  />
                                </RadioGroup>
                              </FormControl>
                              <br />
                              <br />
                              <StyledTextField
                                required
                                placeholder="Curp"
                                name="curp"
                              />
                              <br />
                              <br />
                              <StyledTextField
                                required
                                placeholder="RFC"
                                name="rfc"
                              />
                              <br />
                              <br />
                              <StyledTextField
                                required
                                placeholder="Domicilio"
                                name="direction"
                              />
                              <br />
                              <br />
                              <StyledTextField
                                required
                                placeholder="Estado civil"
                                name="marital"
                              />
                              <br />
                              <br />
                              <Grid
                                container
                                justifyContent="center"
                                item
                                direction="row"
                              >
                                <Grid item>
                                  <Button
                                    sx={{ marginRight: "100px" }}
                                    type="submit"
                                    className={styles["button-form-select"]}
                                  >
                                    Finalizar
                                  </Button>
                                  <Button
                                    className={styles["button-form-select"]}
                                    onClick={changecontent}
                                  >
                                    Sucesion
                                  </Button>
                                </Grid>
                              </Grid>
                            </form>
                          </Grid>
                        </Grid>
                      ) : (
                        <>
                          <Grid
                            item
                            container
                            xs={5}
                            justifyContent="center"
                            direction="column"
                          >
                            <Grid item>
                              <div className={styles["form-title"]}>
                                <Typography variant="h4">SUCESIÓN</Typography>
                              </div>
                              <form onSubmit={handleSubmitF}>
                                <StyledTextField
                                  required
                                  placeholder="Nombre Completo"
                                  name="name"
                                />
                                <br />
                                <br />

                                <StyledTextField
                                  required
                                  type={"date"}
                                  placeholder="Fecha de nacimiento"
                                  name="birth"
                                />
                                <br />
                                <FormControl component="fieldset">
                                  <FormLabel component="legend">Sexo</FormLabel>
                                  <RadioGroup
                                    row
                                    aria-label="Genre"
                                    defaultValue="null"
                                    name="genre"
                                  >
                                    <FormControlLabel
                                      value="Mujer"
                                      control={<Radio color="primary" />}
                                      label="Mujer"
                                    />
                                    <FormControlLabel
                                      value="Hombre"
                                      control={<Radio color="primary" />}
                                      label="Hombre"
                                    />
                                  </RadioGroup>
                                </FormControl>
                                <br />
                                <br />
                                <StyledTextField
                                  required
                                  placeholder="Curp"
                                  name="curp"
                                />
                                <br />
                                <br />
                                <StyledTextField
                                  required
                                  placeholder="RFC"
                                  name="rfc"
                                />
                                <br />
                                <br />
                                <StyledTextField
                                  required
                                  placeholder="Domicilio"
                                  name="direction"
                                />
                                <br />
                                <br />
                                <StyledTextField
                                  required
                                  placeholder="Estado civil"
                                  name="marital"
                                />
                                <br />
                                <br />
                                <Grid
                                  container
                                  justifyContent="center"
                                  item
                                  direction="row"
                                >
                                  <Grid item>
                                    <Button
                                      sx={{ marginRight: "100px" }}
                                      type="submit"
                                      className={styles["button-form-select"]}
                                    >
                                      Finalizar
                                    </Button>
                                    <Button
                                      className={styles["button-form-select"]}
                                      onClick={changecontent}
                                    >
                                      Atras
                                    </Button>
                                  </Grid>
                                </Grid>
                              </form>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            container
                            xs={5}
                            justifyContent="center"
                            direction="column"
                          >
                            <Grid item>
                              <div className={styles["form-title"]}>
                                <Typography variant="subtitle1">
                                  Condiciones
                                </Typography>
                              </div>
                              <br />
                              <Typography>Educación</Typography>
                              <hr className={styles["form-line"]} />
                              <Grid
                                container
                                justifyContent="center"
                                item
                                direction="row"
                              >
                                <Typography>Licenciatura</Typography>{" "}
                                &nbsp;&nbsp;
                                <CheckCircle className={styles["icon-check"]} />
                              </Grid>
                              <Grid
                                container
                                justifyContent="center"
                                item
                                direction="row"
                              >
                                <Typography>Maestria</Typography> &nbsp;&nbsp;
                                <CheckCircle className={styles["icon-check"]} />
                              </Grid>
                              <br />
                              <Typography>Familia</Typography>
                              <hr className={styles["form-line"]} />
                              <Grid
                                container
                                justifyContent="center"
                                item
                                direction="row"
                              >
                                <Typography>Prueba de paternidad</Typography>{" "}
                                &nbsp;&nbsp;
                                <CheckCircle className={styles["icon-check"]} />
                              </Grid>
                              <Grid
                                container
                                justifyContent="center"
                                item
                                direction="row"
                              >
                                <Typography>Casa</Typography> &nbsp;&nbsp;
                                <CheckCircle className={styles["icon-check"]} />
                              </Grid>
                              <Grid
                                container
                                justifyContent="center"
                                item
                                direction="row"
                              >
                                <Typography>Tener un hijo</Typography>{" "}
                                &nbsp;&nbsp;
                                <CheckCircle className={styles["icon-check"]} />
                              </Grid>
                              <br />
                              <Typography>Patrimonio</Typography>
                              <hr className={styles["form-line"]} />
                              <Grid
                                container
                                justifyContent="center"
                                item
                                direction="row"
                              >
                                <Typography>Tener $1,000,000,000</Typography>{" "}
                                &nbsp;&nbsp;
                                <CheckCircle className={styles["icon-check"]} />
                              </Grid>
                              <br />
                              <Typography>Otra</Typography>
                              <hr className={styles["form-line"]} />
                              <Grid
                                container
                                justifyContent="center"
                                item
                                direction="row"
                              >
                                <StyledTextField2 />
                              </Grid>
                            </Grid>
                          </Grid>
                        </>
                      )}
                    </>
                  );
                } else if (formoption === "resume") {
                  return (
                    <>
                      {sucesion != false ? setSucesion(false) : ""}
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
                        <Typography>SUCESION</Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        xs={8}
                        justifyContent="center"
                        direction="column"
                        className={styles["table-data"]}
                      >
                        <Grid item container direction="column">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <div className={styles["form-title"]}>
                            <Typography  variant="h4">Fideicomitente</Typography>
                          </div>
                          <Grid item >
                          <DataTable
                            rights={iempire.rights}
                            beneficiarys={iempire.beneficiary}
                          />
                          </Grid>
                          <br />
                          <Grid
                          item
                            container
                            direction="row"
                            justifyContent="flex-end"
                          >
                            <Button className={styles["button-form-select"]}>
                              Finalizar
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  );
                } else {
                  return (
                    <>
                      {sucesion != true ? setSucesion(true) : ""}

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
                        <Typography>Persona</Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        xs={10}
                        justifyContent="center"
                        direction="column"
                      >
                        <div className={styles["form-title"]}>
                          <Typography variant="h4">
                            Sube tus documentos
                          </Typography>
                        </div>
                        <br />
                        <br />
                        <br />
                        <FormControl>
                          <FormLabel>Curp</FormLabel>
                          <StyledTextField
                            required
                            type="file"
                            placeholder="Curp"
                            disabled={!premium}
                          />
                        </FormControl>

                        <FormControl>
                          <FormLabel>RFC</FormLabel>
                          <StyledTextField
                            required
                            type="file"
                            placeholder="RFC"
                            disabled={!premium}
                          />
                        </FormControl>
                        <FormLabel>Comprobante de domicilio</FormLabel>
                        <StyledTextField
                          required
                          type="file"
                          placeholder="Comprobante"
                          disabled={!premium}
                        />

                        <FormControl component="fieldset">
                          <FormLabel component="legend">Estado Civil</FormLabel>
                          <RadioGroup
                            row
                            aria-label="Genre"
                            defaultValue="null"
                          >
                            <FormControlLabel
                              value="Casado"
                              control={<Radio color="primary" />}
                              label="Casado"
                              disabled={!premium}
                            />
                            <FormControlLabel
                              value="Soltero"
                              control={<Radio color="primary" />}
                              label="Soltero"
                              disabled={!premium}
                            />
                            <FormControlLabel
                              value="Divorciado"
                              control={<Radio color="primary" />}
                              label="Divorciado"
                              disabled={!premium}
                            />
                            <FormControlLabel
                              value="Viudo"
                              control={<Radio color="primary" />}
                              label="Viudo"
                              disabled={!premium}
                            />
                          </RadioGroup>
                        </FormControl>
                        <StyledTextField
                          required
                          type="file"
                          placeholder="Curp"
                          disabled={!premium}
                        />
                        <br />
                        <br />
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-end"
                        >
                          <Button
                            sx={{ marginRight: "80px" }}
                            className={styles["button-form-select"]}
                          >
                            Finalizar
                          </Button>
                        </Grid>
                      </Grid>
                    </>
                  );
                }
              })()}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <form onSubmit={handleSubmitF}>
        {status === "success" ? (
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
                  // style={{ minHeight: "100vh" }}
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
                  // style={{ minHeight: "100vh" }}
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
                    variant="contained"
                    color="primary"
                  >
                    Regístrate ahora
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
        ) : (
          <></>
        )}
      </form>
    </Grid>
  );
};
