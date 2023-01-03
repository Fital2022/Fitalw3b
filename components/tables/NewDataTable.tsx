import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  Paper,
  makeStyles,
  Avatar,
  Switch,
  InputLabel,
} from "@mui/material";
import row from "@nextui-org/react/types/row";
import React, { FC, useState } from "react";
import { Button, Grid } from "@mui/material";
import {
  IRight,
  IBeneficiary,
  IRightBeneficiary,
} from "../../interfaces/empireInterfaces";



interface Props {
  rights: IRight[];
  beneficiarys: IBeneficiary[];
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props: {
  idx: number;
  beneficiary: IBeneficiary;
  rights: IRight[];
}) {
  const { beneficiary } = props;
  const { rights } = props;
  const { idx } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          bgcolor: idx % 2 !== 0 ? "rgba(232,218,238,0.5)" : "transparent",
          backdropFilter: "blur(0,5px)",
        }}
      >
        <TableCell align="right">
          <Avatar src={beneficiary.img} />
        </TableCell>
        <TableCell align="left">{beneficiary.name}</TableCell>
        <TableCell align="right">
          <Button
            sx={{ bgcolor: "#1BD145", color: "white", borderRadius: "5px" }}
            onClick={() => setOpen(!open)}
          >
            Asignar
          </Button>
        </TableCell>
      </TableRow>
      <TableRow
        sx={{
          bgcolor: idx % 2 !== 0 ? "rgba(232,218,238,0.5)" : "transparent",
          backdropFilter: "blur(0,5px)",
        }}
      >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Bienes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead></TableHead>
                <TableBody>
                  {rights.map((right) => (
                    
                    <TableRow key={right.id}>
                      <TableCell component="th" scope="row">
                        {right.type}
                      </TableCell>
                      <TableCell align="right">
                        <Switch sx={{ color: "#52d869" }} />
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <Grid container  justifyContent={"flex-end"}>
                      <Grid item>
                        <Button
                          sx={{
                            marginLeft: {xs: "17vw", sm: "5vw", md:"0.8vw"} ,
                            marginTop: "10px",
                            bgcolor: "#1BD145",
                            borderRadius: "5px",
                            opacity: "1",
                            color: "white",
                          }}
                        >
                          Aceptar
                        </Button>
                      </Grid>
                    </Grid>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            {/* <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Porcentaje
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                </TableHead>
                <TableBody>
                  {rights.map((right, index) => (
                    <TableRow key={right.id}>
                      <TableCell component="th" scope="row">
                        {right.type}
                      </TableCell>
                      <TableCell align="right">
                        <input type={"number"} value={beneficiary.properties[index].percentage}></input>
                      </TableCell>
                    </TableRow>
                  ))}
                   <TableRow>
                    <Grid container sx={{bgcolor:"red"}} justifyContent={"flex-end"}>
                      <Grid item>
                        <Button
                          sx={{
                            marginLeft: "20px",
                            marginTop: "10px",
                            bgcolor: "#1BD145",
                            borderRadius: "5px",
                            opacity: "1",
                            color: "white",
                          }}
                        >
                          Aceptar
                        </Button>
                      </Grid>
                    </Grid>
                  </TableRow>
                </TableBody>
              </Table>
            </Box> */}
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
              Porcentaje
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead></TableHead>
                <TableBody>
                {rights.map((right, index) => (
                    <TableRow key={right.id}>
                      <TableCell component="th" scope="row">
                        {right.type}
                      </TableCell>
                      <TableCell align="right">
                        <input style={{width: "40px"}} width={"5px"} type={"number"} value={beneficiary.properties[index].percentage}></input>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <Grid container  justifyContent={"flex-end"}>
                      <Grid item>
                        <Button
                          sx={{
                            marginLeft: {xs: "9vw", sm: "2vw", md:"-2.5vw"} ,
                            marginTop: "10px",
                            bgcolor: "#1BD145",
                            borderRadius: "5px",
                            opacity: "1",
                            color: "white",
                          }}
                        >
                          Aceptar
                        </Button>
                      </Grid>
                    </Grid>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export const NewDataTable: FC<Props> = ({ rights, beneficiarys }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(0,5px)",
          width: "1826px",
          maxWidth: "95%",
          mx: "auto",
        }}
      >
        <TableContainer>
          <Table aria-label="collapsible table" stickyHeader>
            <TableHead></TableHead>
            <TableBody>
              {beneficiarys.map((beneficiary, index) => (
                <Row
                  key={beneficiary.id}
                  idx={index}
                  beneficiary={beneficiary}
                  rights={rights}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
