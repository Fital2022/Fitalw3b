import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import React, { DragEvent } from "react";
import { ActionsLayout } from "../components/Layout";
import { StepForm } from '../components/forms';
import { IBeneficiary, IEmpire, IRight, IRightBeneficiary, ITrustor } from "../interfaces/empireInterfaces";
import { BottomMenu } from "../components/bottomMenu/BottomMenu";
import { IBottomMenuData } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import { AppDispatch, RootState, setShowForm } from "../store";

const right : IRight[] = [
  {
    name: 'casa 1',
    value: 2000000,
    type: 'casa',
    id: 1,
    img: '/images/avatar/casa1.jpeg',
  },
  {
    name: 'casa 2',
    value: 20000000,
    type: 'casa',
    id: 2,
    img: '/images/avatar/casa2.jpeg',
  },
  {
    name: 'auto 1',
    value: 2000000,
    type: 'auto',
    id: 3,
    img: '/images/avatar/coche1.jpeg',
  },
  {
    name: 'auto 2',
    value: 2000000,
    type:  'auto',
    id: 4,
    img: 'images/avatar/coche2.jpeg',
  },
  {
    name: 'Seguro AXA',
    value: 2000000,
    type: 'seguro' ,
    id: 5,
    img: '/images/avatar/axa.png',
  },
  {
    name: 'Seguro gnp',
    value: 2000000,
    type: 'seguro',
    id: 6,
    img: '/images/avatar/gnp.png',
  },
]

const Properright: IRightBeneficiary [] = [
  {
    idRight: 1,
    percentage: 0,
  },
  {
    idRight: 2,
    percentage: 0,
  },
  {
    idRight: 3,
    percentage: 0,
  },
  {
    idRight: 4,
    percentage: 0,
  },
  {
    idRight: 5,
    percentage: 0,
  },
  {
    idRight: 6,
    percentage: 0,
  },
]
const Properright2: IRightBeneficiary [] = [
  {
    idRight: 1,
    percentage: 0,
  },
  {
    idRight: 2,
    percentage: 0,
  },
  {
    idRight: 3,
    percentage: 0,
  },
  {
    idRight: 4,
    percentage: 0,
  },
  {
    idRight: 5,
    percentage: 0,
  },
  {
    idRight: 6,
    percentage: 0,
  },
]
const Properright3: IRightBeneficiary [] = [
  {
    idRight: 1,
    percentage: 0,
  },
  {
    idRight: 2,
    percentage: 0,
  },
  {
    idRight: 3,
    percentage: 0,
  },
  {
    idRight: 4,
    percentage: 0,
  },
  {
    idRight: 5,
    percentage: 0,
  },
  {
    idRight: 6,
    percentage: 0,
  },
]
const Properright4: IRightBeneficiary [] = [
  {
    idRight: 1,
    percentage: 0,
  },
  {
    idRight: 2,
    percentage: 0,
  },
  {
    idRight: 3,
    percentage: 0,
  },
  {
    idRight: 4,
    percentage: 0,
  },
  {
    idRight: 5,
    percentage: 0,
  },
  {
    idRight: 6,
    percentage: 0,
  },
]

const trustor: ITrustor [] = [
  {id: 1,
  name: 'Volga',},
]

const beneficiary : IBeneficiary [] = [
  {
    id: 1,
    name: 'Ana Lopez',
    img: '/images/avatar/person2.jpeg',
    properties: Properright,
  },
  {
    id: 2,
    name: 'Juan Lopez',
    img: '/images/avatar/person1.jpeg',
    properties: Properright2,
  },
  {
    id: 3,
    name: 'Laura Lopez',
    img: '/images/avatar/person2.jpeg',
    properties: Properright3,
  },
  {
    id: 4,
    name: 'Carlos Lopez',
    img: '/images/avatar/person1.jpeg',
    properties: Properright4,
  },
]

const empire : IEmpire = 
{  name: "prueba1",
  id: 1,
  rights: right,
  trustor: trustor,
  beneficiary:beneficiary}

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

const  onDropEntry = (event: DragEvent<HTMLDivElement>) => {
  console.log(event)
  const tipo = event.dataTransfer.getData('option')
  console.log({tipo})
  dispatch(setShowForm(true))
  
}

const dispatch = useDispatch<AppDispatch>()

let draggmode = useSelector((state: RootState) => state.empire.isDraggin);

let formmode = useSelector((state: RootState) => state.empire.showform);

const  allowDrop = (event: DragEvent<HTMLDivElement>) => {
  event.preventDefault();
  console.log("Si solte algo")
  
}

  return (
    <ActionsLayout
      title={"Fital - Testamento Digital"}
      pageDescription={"Página de testamento digital"}
    >
      <Box alignItems={'center'} sx={{marginTop: 20}}>
        {/* <StepForm premium={true} iempire={empire} /> */}
        <div onDrop={onDropEntry} onDragOver={allowDrop} > 
        {draggmode ?  <Grid container justifyContent="center" sx={{bgcolor: '#D3D3D3', height: '60vh', transition: 'all .3s'}} >
        <Typography sx={{align: 'center'}}>Suelta aqui</Typography>
        </Grid> : '' }
        </div>
        {formmode ? <Grid item sx={{transition: 'all .1s'}}> <StepForm premium={true} iempire={empire} /></Grid>  : '' }
      </Box>
      <BottomMenu data={MENU_ACTIONS} />
    </ActionsLayout>
  );
};



export default Testament;
