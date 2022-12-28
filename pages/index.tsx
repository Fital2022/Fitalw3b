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
  styled,
  Switch,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import { MainLayout } from "../components/Layout/MainLayout";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addEscrow, RootState, selectEscrow } from "../store";
import { useEffect, useState } from "react";
import index from "./empire/index";
import { useRouter } from "next/router";
import Image from "next/image";

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

const ESCROW_PROVEES = ["Bancomer", "Fital", "Santander", "Bajio"];

const PurpleTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#8E4BA8",
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 20,
  },
}));

const Home = () => {
  const { empires } = useSelector((state: RootState) => state.empire);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [switches, setSwitches] = useState<boolean[]>(
    ESCROW_TYPES.map((ele) => false)
  );
  const [switchesProv, setSwitchesProv] = useState<boolean[]>(
    ESCROW_PROVEES.map((ele) => false)
  );
  const [modalContent, setModalContent] = useState<number>(0);
  const [empireName, setEmpireName] = useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  const onCloseHandler = () => {
    setShowModal(false);
    setSwitches(ESCROW_TYPES.map((ele) => false));
    setEmpireName("");
    setModalContent(0);
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case 0:
        return (
          <>
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
                  setModalContent((prevState) => ++prevState);
                }}
              >
                Siguiente
              </Button>
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <Typography sx={{ fontSize: "24px", mb: 3 }}>Proveedor</Typography>
            {ESCROW_PROVEES.map((type, index) => (
              <Box key="type" display="flex" justifyContent="space-between">
                <Typography sx={{ color: "#7B7B7B", fontSize: "16px" }}>
                  {type}
                </Typography>
                <Switch
                  checked={switchesProv[index]}
                  onChange={(e, checked) =>
                    setSwitchesProv((prevState) =>
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
                disabled={switchesProv.every((chk) => chk === false)}
                onClick={() => {
                  dispatch(
                    addEscrow({
                      id: empires.length,
                      name: empireName,
                      beneficiary: [],
                      rights: [],
                      trustor: [],
                      type: ESCROW_TYPES[
                        switches.findIndex((op) => op === true)
                      ],
                    })
                  );
                  // setModalContent((prevState) => ++prevState);
                  onCloseHandler();
                }}
              >
                Aceptar
              </Button>
            </Box>
          </>
        );
      default:
        break;
    }
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
        // alignItems="center"
        alignContent="center"
        flexWrap="wrap"
        sx={{
          width: "100%",
          height: { md: "calc(100vh - 90px)", xs: "auto" },
          py: { xs: 3, md: 0 },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            lg={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                borderRadius: "50%",
                height: { xs: "170px", md: "190px" },
                width: { xs: "170px", md: "190px" },
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                border: "1px solid #888",
                boxShadow: "none",
              }}
            >
              <PurpleTooltip
                title="Agrega tu imperio"
                placement="top"
                arrow
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-arrow": {
                      bottom: "0px !important",
                      "&::before": {
                        backgroundColor: "#8E4BA8",
                      },
                    },
                  },
                }}
              >
                <IconButton onClick={() => setShowModal(true)}>
                  <Add sx={{ fontSize: 120, color: "black" }} />
                </IconButton>
              </PurpleTooltip>
            </Card>
          </Grid>
          {empires &&
            empires.length > 0 &&
            empires.map((emp) => (
              <PurpleTooltip
                title={emp.name}
                placement="top"
                arrow
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-arrow": {
                      bottom: "0px !important",
                      "&::before": {
                        backgroundColor: "#8E4BA8",
                      },
                    },
                  },
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  key={emp.id}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    sx={{
                      height: { xs: "170px", md: "190px" },
                      width: { xs: "170px", md: "190px" },
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      cursor: "pointer",
                      flexDirection: "column",
                      boxShadow: "none",
                      border: "1px solid #888",
                      borderRadius: "20px",
                    }}
                    onClick={() => {
                      dispatch(selectEscrow(emp.id));
                      router.push("/main");
                    }}
                  >
                    <Image src="/icons/crown.png" width={20} height={20} />
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: 14,
                        textAlign: "center",
                        fontWeight: "bold",
                        maxWidth: "185px",
                        mb: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {emp.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: 12,
                        textAlign: "center",
                        maxWidth: "185px",
                      }}
                    >
                      {emp.type}
                    </Typography>
                  </Card>
                </Grid>
              </PurpleTooltip>
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
            maxWidth: "95%",
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
          {renderModalContent()}
        </Box>
      </Modal>
    </MainLayout>
  );
};

export default Home;
