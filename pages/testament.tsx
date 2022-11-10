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
import { StepForm } from '../components/Ui/StepForm';
import DataTable from "../components/tables/DataTable";


const testament = () => {
  // const classes = useStyles()
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <ActionsLayout
      title={"Fital - Testamento Digital"}
      pageDescription={"Página de testamento digital"}
    >
     <DataTable/>
      <Box alignItems={'center'}>
        <StepForm premium={true} />
      </Box>
    </ActionsLayout>
  );
};

export default testament;
