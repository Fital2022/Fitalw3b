import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Link,
  Modal,
  OutlinedInput,
  Switch,
  Typography,
} from "@mui/material";
import { MainLayout } from "../components/Layout/MainLayout";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addEscrow, RootState, selectEscrow } from "../store";
import { useEffect, useState } from "react";
import index from "./empire/index";
import { useRouter } from "next/router";

const ESCROW_TYPES = [
  "Administración de condominios",
  "Desarrollo inmobiliario",
  "Educativo",
  "Garantía",
  "Fuente de pago",
  "Inversión",
  "Protección alimenticia",
  "Protección patrimonial",
  "Remodelación de edificios",
];

const Home = () => {
  const { empires } = useSelector((state: RootState) => state.empire);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [switches, setSwitches] = useState<boolean[]>(
    ESCROW_TYPES.map((ele) => false)
  );
  const [empireName, setEmpireName] = useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  const onCloseHandler = () => {
    setShowModal(false);
    setSwitches(ESCROW_TYPES.map((ele) => false));
    setEmpireName("");
  };

  useEffect(() => {
    dispatch(selectEscrow(-1));
  }, []);

  return (
    <MainLayout
      title={"Fital | Menú principal"}
      pageDescription={"Menú principal"}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "calc(100vh - 90px)" }}
      >
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: 1300, justifyContent: "center" }}
        >
          <Grid item xs={3}>
            <Card
              sx={{
                height: "190px",
                width: "190px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <IconButton onClick={() => setShowModal(true)}>
                <Add sx={{ fontSize: 120, color: "black" }} />
              </IconButton>
            </Card>
          </Grid>
          {empires &&
            empires.length > 0 &&
            empires.map((emp) => (
              <Grid item xs={3}>
                <Card
                  sx={{
                    height: "190px",
                    width: "190px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexWrap: "wrap",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    dispatch(selectEscrow(emp.id));
                    router.push("/main");
                  }}
                >
                  <Typography sx={{ color: "black", fontSize: 16 }}>
                    {emp.name}
                  </Typography>
                  <Typography sx={{ color: "black", fontSize: 16 }}>
                    {emp.type}
                  </Typography>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Modal
        open={showModal}
        onClose={onCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            bgcolor: "white",
            width: "686px",
            borderRadius: "10px",
            border: "1px solid #707070",
            py: 3,
            px: 6,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "black" }}>
            Agrega tu imperio
          </Typography>
          <OutlinedInput
            placeholder="Nombre de tu imperio"
            sx={{ width: "100%", height: "46px", my: 2 }}
            value={empireName}
            name="empireName"
            onChange={(e) => setEmpireName(e.target.value)}
          />
          <Typography sx={{ fontSize: "16px", color: "black", mb: 2 }}>
            Tipo de imperio
          </Typography>
          {ESCROW_TYPES.map((type, index) => (
            <Box key="type" display="flex" justifyContent="space-between">
              <Typography sx={{ color: "#7B7B7B", fontSize: "16px" }}>
                {type}
              </Typography>
              <Switch
                checked={switches[index]}
                onChange={(e, checked) =>
                  setSwitches((prevState) =>
                    prevState.map((typeEscrow, i) =>
                      checked === true
                        ? index === i
                          ? checked
                          : false
                        : checked
                    )
                  )
                }
              />
            </Box>
          ))}
          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button
              sx={{
                backgroundImage: "none",
                bgcolor: "#31A354",
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                width: "127px",
                height: "46px",
              }}
              disabled={
                switches.every((chk) => chk === false) || !empireName.trim()
              }
              onClick={() => {
                dispatch(
                  addEscrow({
                    id: empires.length,
                    name: empireName,
                    beneficiary: [],
                    rights: [],
                    trustor: [],
                    type: ESCROW_TYPES[switches.findIndex((op) => op === true)],
                  })
                );
                onCloseHandler();
              }}
            >
              Aceptar
            </Button>
          </Box>
        </Box>
      </Modal>
    </MainLayout>
  );
};

export default Home;
