import { Box, Typography, Grid } from "@mui/material";
import React, { DragEvent } from "react";
import { ActionsLayout } from "../components/Layout";
import { StepForm } from "../components/forms";
import {
  IBeneficiary,
  IEmpire,
  IRight,
  IRightBeneficiary,
  ITrustor,
} from "../interfaces/empireInterfaces";
import { BottomMenu } from "../components/bottomMenu/BottomMenu";
import { IBottomMenuData } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import { AppDispatch, RootState, setShowForm } from "../store";
import { empire } from "../data";

const MENU_ACTIONS: IBottomMenuData[] = [
  {
    link: { id: 1, name: "Arbol" },
    sublinks: [
      { id: 1, name: "Agregar Fideicomitente", img: "/images/casa.png" },
      { id: 2, name: "Agregar Fidusuario", img: "/images/casa.png" },
      { id: 3, name: "Agregar Beneficiario", img: "/images/autos.png" },
    ],
  },
  {
    link: { id: 2, name: "Bienes" },
    sublinks: [
      { id: 1, name: "Casa", img: "/images/casa.png" },
      { id: 2, name: "Departamento", img: "/images/casa.png" },
      { id: 3, name: "Autos", img: "/images/autos.png" },
    ],
  },
  {
    link: { id: 3, name: "Resumen" },
    sublinks: [
      { id: 1, name: "Casa", img: "/images/casa.png" },
      { id: 2, name: "Departamento", img: "/images/casa.png" },
      { id: 3, name: "Autos", img: "/images/autos.png" },
    ],
  },
];

const Testament: NextPage = () => {
  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    console.log(event);
    const tipo = event.dataTransfer.getData("option");
    console.log({ tipo });
    dispatch(setShowForm(true));
  };

  const dispatch = useDispatch<AppDispatch>();

  let draggmode = useSelector((state: RootState) => state.form.isDraggin);

  let formmode = useSelector((state: RootState) => state.form.showform);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("Si solte algo");
  };

  return (
    <ActionsLayout
      title={"Fital - Testamento Digital"}
      pageDescription={"Página de testamento digital"}
    >
      <Box alignItems={"center"} sx={{ marginTop: 20 }}>
        {/* <StepForm premium={true} iempire={empire} /> */}
        <div onDrop={onDropEntry} onDragOver={allowDrop}>
          {draggmode ? (
            <Grid
              container
              justifyContent="center"
              sx={{ bgcolor: "#D3D3D3", height: "60vh", transition: "all .3s" }}
            >
              <Typography sx={{ align: "center" }}>Suelta aqui</Typography>
            </Grid>
          ) : (
            ""
          )}
        </div>
        {formmode ? (
          <Grid item sx={{ transition: "all .1s" }}>
            {" "}
            <StepForm premium={true} iempire={empire} />
          </Grid>
        ) : (
          ""
        )}
      </Box>
      <BottomMenu data={MENU_ACTIONS} />
    </ActionsLayout>
  );
};

export default Testament;
