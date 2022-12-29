import { CloseOutlined } from "@mui/icons-material";
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
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "../../styles/Things.module.css";
import {
  IBeneficiary,
  IEmpire,
  IRight,
  IRightBeneficiary,
} from "../../interfaces/empireInterfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  addBeneficiary,
  adduser,
  AppDispatch,
  getRights,
  RootState,
  setFormValues,
  setShowForm,
} from "../../store";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useRouter } from "next/router";
import { DataFormT } from "./DataFormT";
import { ResumeFormT } from "./ResumeFormT";
import { PremiumFormT } from "./PremiumFormT";
import { MainFormContainer } from "./MainFormContainer";

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
  premium: boolean;
  iempire: IEmpire;
  title: string;
  img: string;
}

export const StepForm: FC<Props> = ({ premium, iempire, title, img }) => {
  const [formValue, setformValue] = useState({
    name: "",
    birth: "",
    genre: "",
    curp: "",
    rfc: "",
    direction: "",
    marital: "",
  });

  const onFormFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name + ": " + event.target.value);
    setformValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  // confetti
  const refAnimationInstance = useRef<any>(null);
  const [intervalId, setIntervalId] = useState<any | null>(null);
  const [showPremiumModal, setShowPremiumModal] = useState<boolean>(true);
  const [showBeneficiaryModal, setShowBeneficiaryModal] =
    useState<boolean>(false);
  const router = useRouter();
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

  let currenid = useSelector((state: RootState) => state.form.userid);
  let currentright = useSelector(
    (state: RootState) => state.empire.currentright
  );
  useEffect(() => {
    console.log("Aqui estan los valores");
    console.log(currentright);
  }, [currentright]);

  const [submit, setSubmit] = useState(false);
  const [nameb, setNameb] = useState("");

  useEffect(() => {
    if (submit) {
      startAnimation();
      console.log("Estos son los rights");
      console.log(currentright);
      console.log(currentright.length);
      if (currentright.length > 0) {
        let data: IBeneficiary = {
          id: currenid,
          name: nameb,
          img: "/images/avatar/person1.jpeg",
          properties: currentright.map((item: IRightBeneficiary) => item),
        };
        console.log(data);
        dispatch(addBeneficiary(data));
        console.log("Beneficiario agregado");
        dispatch(adduser());
        setStatus("success");
        handleOpen();
      } else {
        console.log("Se abre el modal");
        setShowBeneficiaryModal(true);
        console.log(showBeneficiaryModal);
      }
    }
  }, [submit]);

  const handleSubmitF = async (event: any) => {
    event.preventDefault();
    if (title === "Beneficiario") {
      dispatch(getRights());
      setSubmit(true);
    } else {
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
    }
  };

  const [sucesion, setSucesion] = useState(true);

  const [dataoption, setdataoption] = useState(true);

  const [formoption, setFormoption] = useState("Datos");

  const changecontent = () => {
    if (sucesion) {
      setSucesion(false);
    } else {
      setSucesion(true);
    }
  };

  console.log(iempire);

  const dispatch = useDispatch<AppDispatch>();

  const closeform = () => {
    dispatch(setShowForm(false));
    let data = {
      name: "",
      img: ""
    }
    dispatch(setFormValues(data))
  };

  const closemodalform = () => {
    dispatch(setShowForm(false));
    setShowBeneficiaryModal(false);
  };

  const changepage = () => {
    if (dataoption) {
      console.log("Ya lo cambie");
      setSucesion(true);
    } else {
      setSucesion(false);
    }
  };

  const rights = useSelector(
    (state: RootState) => state.empire.selectedEmpire?.rights
  );
  const beneficiary = useSelector(
    (state: RootState) => state.empire.selectedEmpire?.beneficiary
  );

  let formmode = useSelector((state: RootState) => state.form.showform);

  useEffect(() => {
    if (formoption !== "data" && formoption !== "resume")
      setShowPremiumModal(true);
  }, [formoption]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      position="relative"
    >
      <Grid item xs={5}>
        <Grid
          item
          container
          xs={12}
          justifyContent="flex-end"
          alignItems={"center"}
          sx={{ marginLeft: "3px", position: "absoluta" }}
        ></Grid>
        <MainFormContainer
          buttons={["Datos", "Resumen", "Premium"]}
          option={formoption}
          setOption={setFormoption}
          show={formmode}
          setShow={closeform}
        >
          <Grid container>
            {(() => {
              switch (formoption) {
                case "Datos":
                  return (
                    <DataFormT
                      title={title}
                      img={img}
                      status={status}
                      setStatus={setStatus}
                      open={open}
                      setOpen={setOpen}
                      sucesion={sucesion}
                      setSucesion={setSucesion}
                      submit={submit}
                      setSubmit={setSubmit}
                      setNameb={setNameb}
                    />
                  );
                case "Resumen":
                  return (
                    <>
                      
                      <ResumeFormT
                        title={title}
                        img={img}
                        beneficiary={beneficiary}
                        rights={rights}
                      />
                    </>
                  );
                case "Premium":
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
                      <PremiumFormT img={img} premium={premium} title={title} />
                    </>
                  );

                default:
                  break;
              }
            })()}
          </Grid>
        </MainFormContainer>
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
                      bgcolor: "#31A354",
                      color: "white",
                      borderRadius: "10px",
                      width: "130px",
                      height: "37px",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={closeform}
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
        ) : (
          <></>
        )}
      </form>
    </Grid>
  );
};
