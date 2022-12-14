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
  styled,
  SwitchProps,
} from "@mui/material";
import row from "@nextui-org/react/types/row";
import React, { FC, useState } from "react";
import { Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  IRight,
  IBeneficiary,
  IRightBeneficiary,
} from "../../interfaces/empireInterfaces";
import { useDispatch } from "react-redux";
import { AppDispatch, statusBeneficiaryright } from "../../store";

const StyledSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "100ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

interface Props {
  rights: IRight[];
  beneficiarys: IBeneficiary[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
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
  const dispatch = useDispatch<AppDispatch>();

  const changestatus = (idx:number,index: number, active: boolean) => {

    let data = {
      beneficiary: idx,
      index: index,
      active: !active,
    }
    console.log("Se acciono el switch")
    console.log(data)

    dispatch(statusBeneficiaryright(data));

  };


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
                  {beneficiary.properties.map((property, index) => (
                    <TableRow key={property.id}>
                      <TableCell component="th" scope="row">
                       {property.type}
                      </TableCell>
                      <TableCell align="right">
                        <StyledSwitch checked={property.active} onChange={() => changestatus(idx,index,property.active)} />
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <Grid container justifyContent={"flex-end"}>
                      <Grid item>
                        <Button
                          sx={{
                            marginLeft: {
                              xs: "10vw",
                              sm: "2.2vw",
                              md: "0.1vw",
                            },
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
                  {beneficiary.properties.map((property, index) => (
                    <TableRow key={property.id}>
                      <TableCell component="th" scope="row">
                        {property.type}
                      </TableCell>
                      <TableCell align="right">
                        {property.active ? 
                        <input
                        style={{ width: "40px" }}
                        width={"5px"}
                        type={"number"}
                        // value={beneficiary.properties[index].percentage}
                        value={property.percentage}
                        readOnly
                      ></input>
                         : null}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <Grid container justifyContent={"flex-end"}>
                      <Grid item>
                        <Button
                          sx={{
                            marginLeft: { xs: "9vw", sm: "1.9vw", md: "0" },
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
export const NewDataTable: FC<Props> = ({ rights, beneficiarys, setShow }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(0,5px)",
          width: "1556px",
          height: "100%",
          maxWidth: "95%",
          mx: "auto",
        }}
      >
        <Grid container justifyContent={"flex-end"}>
          <Box sx={{ display: "flex", alignItems: "right", mb: 3 }}>
            <IconButton
              sx={{
                border: "1px solid #707070",
                right: "10px",
                ":hover": {
                  bgcolor: "#707070",
                  color: "white",
                },
              }}
              onClick={() => setShow(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Grid>
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
