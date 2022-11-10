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
  
  function createData(
    name: string,
    genre: string,
    h1: boolean,
    h2: boolean,
    c1: boolean,
    c2: boolean,
    axa: boolean,
    gnp: boolean
  ) {
    return { name, genre, h1, h2, c1, c2, axa, gnp };
  }
  
  const rows = [
    createData("Ana Lopez", "M", true, false, false, false, true, true),
    createData("Juan lopez", "H", false, true, false, false, true, true),
    createData("Laura Lopez", "M", false, false, true, false, true, true),
    createData("Carlos Lopez", "H", false, false, false, true, true, true),
  ];
  
  
  const DataTable = () => {

  
    return (
      <>
        <Box>
          {/* <Typography
            variant="h2"
            component="h1"
            sx={{ textAlign: "center", mt: 5, color: "black" }}
          >
            Testamento Digital
          </Typography> */}
          
          <Box display="flex" justifyContent="center" sx={{ mt: 4, px: 3 }}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>&nbsp;&nbsp;&nbsp;</TableCell>
                    <TableCell align="right">
                      <Avatar alt="service1" src="/images/avatar/casa1.jpeg" />
                    </TableCell>
                    <TableCell align="right">
                      <Avatar alt="service1" src="/images/avatar/casa2.jpeg" />
                    </TableCell>
                    <TableCell align="right">
                      <Avatar alt="service1" src="/images/avatar/coche1.jpeg" />
                    </TableCell>
                    <TableCell align="right">
                      <Avatar alt="service1" src="/images/avatar/coche2.jpeg" />
                    </TableCell>
                    <TableCell align="right">
                      <Avatar alt="service1" src="/images/avatar/axa.png" />
                    </TableCell>
                    <TableCell align="right">
                      <Avatar alt="service1" src="/images/avatar/gnp.png" />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                           {row.genre === 'H' ? <Grid container direction="row"> <Avatar alt="person" src="/images/avatar/person1.jpeg"></Avatar> {row.name}  </Grid>  : <Grid container direction="row"> <Avatar alt="person" src="/images/avatar/person2.jpeg"></Avatar> {row.name} </Grid> }
                      </TableCell>
                      <TableCell >{row.h1 ? <FiberManualRecord fontSize="large" sx={{ color: "gray" }}/> : <FiberManualRecordOutlined fontSize="large" sx={{ color: "gray" }}/>  }</TableCell>
                      <TableCell >{row.h2 ? <FiberManualRecord fontSize="large" sx={{ color: "gray" }}/> : <FiberManualRecordOutlined fontSize="large" sx={{ color: "gray" }}/>  }</TableCell>
                      <TableCell >{row.c1 ? <FiberManualRecord fontSize="large" sx={{ color: "gray" }}/> : <FiberManualRecordOutlined fontSize="large" sx={{ color: "gray" }}/>  }</TableCell>
                      <TableCell >{row.c2 ? <FiberManualRecord fontSize="large" sx={{ color: "gray" }}/> : <FiberManualRecordOutlined fontSize="large" sx={{ color: "gray" }}/>  }</TableCell>
                      <TableCell >{row.axa ? <FiberManualRecord fontSize="large" sx={{ color: "gray" }}/> : <FiberManualRecordOutlined fontSize="large" sx={{ color: "gray" }}/>  }</TableCell>
                      <TableCell >{row.gnp ? <FiberManualRecord fontSize="large" sx={{ color: "gray" }}/> : <FiberManualRecordOutlined fontSize="large" sx={{ color: "gray" }}/>  }</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box alignItems={'center'}>
        </Box>
      </>
    );
  };
  
  export default DataTable;
  