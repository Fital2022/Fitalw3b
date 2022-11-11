import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import {
   FiberManualRecord,
   FiberManualRecordOutlined
  } from "@mui/icons-material";
import React from "react";
import { ActionsLayout } from "../components/Layout";
import { StepForm } from '../components/forms';
import DataTable from "../components/tables/DataTable";
import { IBeneficiary, IEmpire, IRight, IRightBeneficiary, ITrustor } from "../interfaces/empireInterfaces";

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
    properties: Properright,
  },
  {
    id: 3,
    name: 'Laura Lopez',
    img: '/images/avatar/person2.jpeg',
    properties: Properright,
  },
  {
    id: 4,
    name: 'Carlos Lopez',
    img: '/images/avatar/person1.jpeg',
    properties: Properright,
  },
]

const empire : IEmpire = 
{  name: "prueba1",
  id: 1,
  rights: right,
  trustor: trustor,
  beneficiary:beneficiary}


const testament = () => {
  // const classes = useStyles()
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <ActionsLayout
      title={"Fital - Testamento Digital"}
      pageDescription={"Página de testamento digital"}
    >
     {/* <DataTable/> */}
      <Box alignItems={'center'}>
        <StepForm premium={true} iempire={empire} />
      </Box>
    </ActionsLayout>
  );
};

export default testament;
