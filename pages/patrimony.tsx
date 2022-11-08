import { ActionsLayout } from "../components/Layout";
import { Box, Grid, Typography } from "@mui/material";
import { IBottomMenuData } from "../interfaces";
import { BottomMenu } from "../components/bottomMenu/BottomMenu";

const MENU_ACTIONS: IBottomMenuData[] = [
  {
    link: { id: 1, name: "Dinero" },
    sublinks: [
      { id: 1, name: "Casa", img: "/images/casa.png" },
      { id: 2, name: "Departamento", img: "/images/casa.png" },
      { id: 3, name: "Autos", img: "/images/autos.png" },
    ],
  },
  {
    link: { id: 2, name: "Mobiliario" },
    sublinks: [
      { id: 1, name: "Casa", img: "/images/casa.png" },
      { id: 2, name: "Departamento", img: "/images/casa.png" },
      { id: 3, name: "Autos", img: "/images/autos.png" },
    ],
  },
  {
    link: { id: 3, name: "Inmobiliario" },
    sublinks: [
      { id: 1, name: "Casa", img: "/images/casa.png" },
      { id: 2, name: "Departamento", img: "/images/casa.png" },
      { id: 3, name: "Autos", img: "/images/autos.png" },
    ],
  },
  {
    link: { id: 4, name: "Derechos" },
    sublinks: [
      { id: 1, name: "Casa", img: "/images/casa.png" },
      { id: 2, name: "Departamento", img: "/images/casa.png" },
      { id: 3, name: "Autos", img: "/images/autos.png" },
    ],
  },
];

const patrimony = () => {
  return (
    <ActionsLayout
      title={"Fital - Patrimonio"}
      pageDescription={"Página de patrimonio"}
    >
      {/* <Box>
        <Typography
          variant="h2"
          component="h1"
          sx={{ textAlign: "center", mt: 5, color: "black" }}
        >
          Patrimonio
        </Typography>
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          {PATRIMONY_OPTIONS.map((item) => (
            <SimpleCard key={item} title={item} />
          ))}
        </Box>
      </Box> */}

      <BottomMenu data={MENU_ACTIONS} />
    </ActionsLayout>
  );
};

export default patrimony;
