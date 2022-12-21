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
import { DataFormP } from "./DataFormP";
import { ResumeFormP } from "./ResumeFormP";
import { PremiumFormP } from "./PremiumFormP";
import { MainFormContainer } from ".";

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
  const fidename =
    useSelector((state: RootState) => state.empire.selectedEmpire as IEmpire) ||
    {};
  const [formoption, setFormoption] = useState("Datos");
  const [showPremiumModal, setShowPremiumModal] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const closeform = () => {
    dispatch(setShowForm2(false));
  };
  let formmode = useSelector((state: RootState) => state.form.showform2);

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
      position="absolute"
    >
      {/* <IconButton
        onClick={closeform}
        sx={{
          position: "absolute",
          top: "0px",
          left: "500px",
          border: "1px solid #888",
        }}
      >
        <CloseOutlined />
      </IconButton> */}
      {/* <Grid
        item
        container
        xs={8}
        justifyContent="flex-end"
        sx={{ marginRight: 80 }}
      >
        <Button
          onClick={() => setFormoption("data")}
          sx={
            formoption === "data"
              ? {
                  bgcolor: "#31A354",
                  color: "white",
                  borderRadius: "10px",
                  width: "130px",
                  height: "37px",
                  ":hover": {
                    bgcolor: "#31A354",
                    color: "white",
                    borderRadius: "10px",
                    width: "130px",
                    height: "37px",
                  },
                }
              : {
                  bgcolor: "white",
                  border: "0.5px solid black",
                  color: "black",
                  borderRadius: "10px",
                  width: "130px",
                  height: "37px",
                  ":hover": {
                    bgcolor: "#31A354",
                    color: "white",
                    borderRadius: "10px",
                    width: "130px",
                    height: "37px",
                  },
                }
          }
        >
          Datos
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={() => setFormoption("resume")}
          sx={
            formoption === "resume"
              ? {
                  bgcolor: "#31A354",
                  color: "white",
                  borderRadius: "10px",
                  width: "130px",
                  height: "37px",
                  ":hover": {
                    bgcolor: "#31A354",
                    color: "white",
                    borderRadius: "10px",
                    width: "130px",
                    height: "37px",
                  },
                }
              : {
                  bgcolor: "white",
                  border: "0.5px solid black",
                  color: "black",
                  borderRadius: "10px",
                  width: "130px",
                  height: "37px",
                  ":hover": {
                    bgcolor: "#31A354",
                    color: "white",
                    borderRadius: "10px",
                    width: "130px",
                    height: "37px",
                  },
                }
          }
        >
          Resumen
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={() => setFormoption("premium")}
          sx={
            formoption === "premium"
              ? {
                  bgcolor: "#31A354",
                  color: "white",
                  borderRadius: "10px",
                  width: "130px",
                  height: "37px",
                  ":hover": {
                    bgcolor: "#31A354",
                    color: "white",
                    borderRadius: "10px",
                    width: "130px",
                    height: "37px",
                  },
                }
              : {
                  bgcolor: "white",
                  border: "0.5px solid black",
                  color: "black",
                  borderRadius: "10px",
                  width: "130px",
                  height: "37px",
                  ":hover": {
                    bgcolor: "#31A354",
                    color: "white",
                    borderRadius: "10px",
                    width: "130px",
                    height: "37px",
                  },
                }
          }
          startIcon={<Star />}
        >
          Premium
        </Button>
      </Grid> */}
      <Grid item xs={5}>
          <Grid
            item
            container
            xs={12}
            justifyContent="flex-end"
            alignItems={"center"}
            sx={{ marginLeft: "3px" }}
          ></Grid>
          <MainFormContainer buttons={["Datos", "Resumen", "Premium"]} option={formoption} setOption={setFormoption} show={formmode} setShow={closeform}   >
            <Grid container>
              {(() => {
                switch (formoption) {
                  case "Datos":
                    return (
                      <DataFormP
                        premium={premium}
                        iempire={iempire}
                        img={img}
                        title={title}
                        user={fidename.name}
                      />
                    );
                  case "Resumen":
                    return (
                    <ResumeFormP />
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
                              Fital en su versión gratis no esta avalado bajo
                              las leyes mexicanas. Prueba la version premium
                              para darle validez oficial.
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
                        <PremiumFormP premium={premium} />
                      </>
                    );
                  default:
                    break;
                }
              })()}
            </Grid>
          </MainFormContainer>
      </Grid>
    </Grid>
  );
};
