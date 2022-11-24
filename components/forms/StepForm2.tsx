import {
  CameraAlt,
  CheckCircle,
  CloseOutlined,
  InputOutlined,
  Star,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import styles from "../../styles/form.module.css";
import { TextField } from "@mui/material";
import DataTable from "../tables/DataTable";
import {
  IEmpire,
  IRight,
  IRightBeneficiary,
} from "../../interfaces/empireInterfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  addBeneficiaryProperties,
  addid,
  addRight,
  AppDispatch,
  RootState,
  setShowForm,
  setShowForm2,
} from "../../store";
import { useFilePicker } from "use-file-picker";
import { useRouter } from "next/router";

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
  title: IRight["type"];
  img: string;
}

export const StepForm2: FC<Props> = ({ premium, iempire, title, img }) => {
  const [formoption, setFormoption] = useState("data");
  const [showPremiumModal, setShowPremiumModal] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  let idvalue = useSelector((state: RootState) => state.form.currentid);
  const closeform = () => {
    dispatch(setShowForm2(false));
  };

  const [formValue, setformValue] = useState({
    name: "",
  });
  const onFormFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const { name } = formValue;

  const handleSubmitF = async (event: any) => {
    event.preventDefault();

    // const data = {
    //   name: event.target.name.value,
    //   birth: event.target.birth.value,
    //   genre: event.target.genre.value,
    //   curp: event.target.curp.value,
    //   rfc: event.target.rfc.value,
    //   direction: event.target.direction.value,
    //   marital: event.target.marital.value,
    // };

    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data);

    // // API endpoint where we send form data.
    // const endpoint = "/api/form2";

    // // Form the request for sending data to the server.
    // const options = {
    //   // The method is POST because we are sending data.
    //   method: "POST",
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: JSONdata,
    // };

    // // Send the form data to our forms API on Vercel and get a response.
    // const response = await fetch(endpoint, options);

    // // Get the response data from server as JSON.
    // // If server returns the name submitted, that means the form works.
    // const result = await response.json();
    // alert(
    //   `nombre: ${data.name}, fecha de nacimiento: ${data.birth}, sexo: ${data.genre}, domicilio: ${data.direction}, estado civil: ${data.marital} `
    // );
    dispatch(addid());
    console.log(idvalue);
    let dataright: IRight = {
      name: name,
      value: 100000,
      type: title,
      id: idvalue,
      img: img,
    };
    let propertie: IRightBeneficiary = {
      idRight: idvalue,
      percentage: 0,
    };
    console.log(dataright);
    dispatch(addRight(dataright));
    dispatch(addBeneficiaryProperties(propertie));
    dispatch(setShowForm2(false));
  };

  useEffect(() => {
    if (formoption !== "resume" && formoption !== "data")
      setShowPremiumModal(true);
  }, [formoption]);

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
          sx={{ width: "717px", height: "540px" }}
        >
          <Grid
            item
            container
            xs={12}
            justifyContent="flex-end"
            alignItems={"center"}
            sx={{ marginLeft: "3px", position: "absoluta" }}
          >
            <IconButton onClick={closeform}>
              <CloseOutlined />
            </IconButton>
          </Grid>
          <CardContent align="center">
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
                            src={img}
                            sx={{ width: "70px", height: "70px" }}
                          />
                        </Badge>
                        <br />
                        <br />
                        <Typography>{title}</Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        xs={10}
                        justifyContent="center"
                        direction="column"
                      >
                        <Grid item>
                          <div className={styles["form-title"]}>
                            <Typography variant="h4">{title}</Typography>
                          </div>
                          <br />
                          <form onSubmit={handleSubmitF}>
                            {/* <FileField description="Escritura"/> */}
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 3,
                              }}
                            >
                              <input
                                className={styles["form-input-file"]}
                                required
                                placeholder="Escritura"
                                name="name"
                                value={name}
                                onChange={onFormFieldChanges}
                              />
                            </Box>

                            <FileField description="Ultima boleta de pago de predial y de agua*" />
                            <FileField description="Escritura de régimen de condominio *" />
                            <FileField description="Constancia de no adeudo de cuotas de mantenimiento *" />
                            <FileField description="Valor de referencia *" />
                            <FileField description="Ubicación *" />
                            <Grid
                              container
                              justifyContent="right"
                              item
                              direction="row"
                            >
                              <Grid item>
                                <Button
                                  sx={{ marginRight: "100px" }}
                                  onClick={closeform}
                                  className={styles["button-form-select"]}
                                >
                                  Cancelar
                                </Button>
                                <Button
                                  sx={{ marginRight: "100px" }}
                                  type="submit"
                                  className={styles["button-form-select"]}
                                >
                                  Finalizar
                                </Button>
                              </Grid>
                            </Grid>
                          </form>
                        </Grid>
                      </Grid>
                    </>
                  );
                } else if (formoption === "resume") {
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
                        <Grid item container direction="row">
                          <div className={styles["form-title"]}>
                            <Typography variant="h4">Fideicomitente</Typography>
                          </div>
                          <br />
                          <br />
                          <br />
                          <Grid item xs={5}>
                            <Typography>Rentabilidad Estimada</Typography>
                            <hr />
                          </Grid>
                          <Grid item container direction="row">
                            <Grid
                              item
                              xs={5}
                              justifyContent="flex-start"
                              container
                              direction="column"
                            >
                              <Grid item>
                                <Typography>Inversión Inicial</Typography>
                                <Typography>Plusvalía Estimada</Typography>
                                <Typography>Renta Total Estimada</Typography>
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
                                <Typography>$58,520.00</Typography>
                                <Typography>$53,830.33</Typography>
                                <Typography>$66,050.36</Typography>
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
                                spacing={2}
                                justifyContent="space-evenly"
                                direction="row"
                              >
                                <Typography>Valor Final</Typography>
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
                            <Typography>Rendimiento Estimado</Typography>
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
                            <Typography>Promedio Anual</Typography>
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
                            <Typography>Total de Periodo</Typography>
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
                      <Modal
                        open={showPremiumModal}
                        onClose={() => setShowPremiumModal(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box
                          sx={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "500px",
                            bgcolor: "white",
                            borderRadius: "10px",
                            p: 4,
                          }}
                        >
                          <IconButton
                            sx={{
                              bgcolor: "white",
                              borderRadius: "100%",
                              border: "1px solid #888",
                              position: "absolute",
                              top: "-40px",
                              right: "-40px",
                            }}
                            onClick={() => setShowPremiumModal(false)}
                          >
                            <CloseOutlined />
                          </IconButton>
                          <Typography
                            sx={{
                              color: "#707070",
                              fontWeight: "bold",
                              fontSize: "20px",
                              textAlign: "center",
                            }}
                          >
                            Fital en su versión gratis no esta avalado bajo las
                            leyes mexicanas. Prueba la version premium para
                            darle validez oficial.
                          </Typography>
                          <Box display="flex" justifyContent="center" mt={3}>
                            <Button
                              sx={{
                                color: "white",
                                bgcolor: "#31A354",
                                fontSize: "16px",
                                backgroundImage: "none",
                                textTransform: "none",
                              }}
                              onClick={() => router.push("/onboarding")}
                            >
                              Registrarse ahora
                            </Button>
                          </Box>
                        </Box>
                      </Modal>
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
    </Grid>
  );
};

interface FileFieldProps {
  description: string;
}
const FileField: FC<FileFieldProps> = ({ description }) => {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: ".pdf",
  });

  useEffect(() => {
    console.log(filesContent);
  }, [filesContent]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <input
          className={styles["form-input-file"]}
          required
          readOnly
          onClick={() => openFileSelector()}
          value={description}
        ></input>
      </Box>
    </>
  );
};
