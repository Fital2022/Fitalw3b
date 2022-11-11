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
  Tooltip,
} from "@mui/material";
import {
  FiberManualRecord,
  FiberManualRecordOutlined,
} from "@mui/icons-material";
import React, { FC } from "react";
import { IBeneficiary, IRight, IRightBeneficiary } from "../../interfaces/empireInterfaces";
import { IconButton } from '@mui/material';


interface Props {
  rights: IRight[];
  beneficiarys: IBeneficiary[];
}


const DataTable: FC<Props> = ({ rights, beneficiarys }) => {

  const getmatrixdata = (id: number, index: number, right: number) => {


var cont = 0

var edited = [];

 for (let i = 0; i < beneficiarys.length; i++) {
  if (beneficiarys[i].properties[index].percentage != 0  ) {
    cont ++;
    edited.push(i)
  }
 }
 console.log(cont)
 if (cont == 0) {
  var result = 100
  for (let j = 0; j < beneficiarys.length; j++) { 
    if(beneficiarys[j].id === id){
      console.log("Estoy en el cliente")
      beneficiarys[j].properties[index].percentage = result
    }
  }
 }
 else {
   var result = 100 / cont
   console.log("Reasignare datos")
   for (let j = 0; j < beneficiarys.length; j++) {
    if(beneficiarys[j].id === id){
      beneficiarys[j].properties[index].percentage = result
    }
  }
  for (let k = 0; k < edited.length; k++) {
    beneficiarys[edited[k]].properties[index].percentage = result
  }
 }

 console.log(beneficiarys)
  }
  
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
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>&nbsp;&nbsp;&nbsp;</TableCell>
                  {rights.map(({ id, name, value, type, img }) => (
                    <>
                    <TableCell align="right">
                      <Tooltip title={name} placement="top">
                      <Avatar alt="service1" key={id} src={img} />
                      </Tooltip>
                    </TableCell>
                    </>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>

              {beneficiarys.map(({ id, name, img, properties}) => (
                    <>
                    <TableRow key={id}>
                    <TableCell component="th" scope="row">
                    <Grid container direction="row">
                          {" "}
                          <Tooltip title={"Beneficiario: " + id}>
                          <Avatar
                            alt="person"
                            src={img}
                          ></Avatar>
                          </Tooltip>
                          {name}
                        </Grid>
                    </TableCell>
                    <>
                    {properties.map((items: IRightBeneficiary, index) => (
                    <>
                    <TableCell>
                      {items.percentage > 0 ? (
                        <>
                        <Tooltip title={"Porcentaje de derechos: " + items.percentage + "%"} placement="left">
                        <IconButton onClick={() =>  getmatrixdata(id,index,items.idRight)}>
                        <FiberManualRecord
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                          </IconButton>
                        </Tooltip>
                        </>
                      ) : (
                        <>
                        <Tooltip title={"Porcentaje de derechos: " + items.percentage + "%"} placement="left">
                        <IconButton onClick={() => getmatrixdata(id,index,items.idRight)}>
                        <FiberManualRecordOutlined
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                          </IconButton>
                        </Tooltip>
                        </>
                      )}
                    </TableCell>
                    </>
                  ))}
                    </>
                    </TableRow>
                    </>
                  ))}

                {/* {beneficiarys.map((id, name, img, properties) => (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                    <Grid container direction="row">
                          {" "}
                          <Avatar
                            alt="person"
                            src={img}
                          ></Avatar>{" "}
                          {name}
                        </Grid>
                    </TableCell>
                    <TableCell>
                      {row.h1 ? (
                        <FiberManualRecord
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      ) : (
                        <FiberManualRecordOutlined
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.h2 ? (
                        <FiberManualRecord
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      ) : (
                        <FiberManualRecordOutlined
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.c1 ? (
                        <FiberManualRecord
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      ) : (
                        <FiberManualRecordOutlined
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.c2 ? (
                        <FiberManualRecord
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      ) : (
                        <FiberManualRecordOutlined
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.axa ? (
                        <FiberManualRecord
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      ) : (
                        <FiberManualRecordOutlined
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.gnp ? (
                        <FiberManualRecord
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      ) : (
                        <FiberManualRecordOutlined
                          fontSize="large"
                          sx={{ color: "gray" }}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))} */}


              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box alignItems={"center"}></Box>
    </>
  );
};

export default DataTable;
