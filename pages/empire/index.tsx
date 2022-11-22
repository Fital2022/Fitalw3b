import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ActionsLayout } from "../../components/Layout/ActionsLayout";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  CardActions,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { IRight } from "../../interfaces/empireInterfaces";
import { FC } from "react";

interface Props {
  rights: IRight[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ResponsiveGrid: FC<Props> = ({ rights }) => {
  const right: IRight[] = [
    {
      name: "casa 1",
      value: 2000000,
      type: "casa",
      id: 1,
      img: "/images/avatar/casa1.jpeg",
    },
    {
      name: "casa 2",
      value: 20000000,
      type: "casa",
      id: 2,
      img: "/images/avatar/casa2.jpeg",
    },
    {
      name: "auto 1",
      value: 2000000,
      type: "auto",
      id: 3,
      img: "/images/avatar/coche1.jpeg",
    },
    {
      name: "auto 2",
      value: 2000000,
      type: "auto",
      id: 4,
      img: "images/avatar/coche2.jpeg",
    },
    {
      name: "Seguro AXA",
      value: 2000000,
      type: "seguro",
      id: 5,
      img: "/images/avatar/axa.png",
    },
    {
      name: "Seguro gnp",
      value: 2000000,
      type: "seguro",
      id: 6,
      img: "/images/avatar/gnp.png",
    },
    {
      name: "Seguro AC/DC",
      value: 2000000,
      type: "seguro",
      id: 7,
      img: "/images/avatar/gnp.png",
    },
    {
      name: "Seguro Fital",
      value: 2000000,
      type: "seguro",
      id: 8,
      img: "/images/avatar/gnp.png",
    },
  ];

  return (
    <ActionsLayout pageDescription="" title="">
      <Box sx={{ flexGrow: 1, paddingTop: 2, paddingLeft: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* {Array.from(Array(right.length)).map((_, index) => ( */}
          <>
            {right.map(({ name, img }, index) => (
              <Grid key={index} item xs={2} sm={2} md={2}>
                <Card
                  sx={{
                    height: 150,
                    width: 240,
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                >
                  <CardContent sx={{ marginLeft: 1 }}>
                    <Grid
                      container
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      paddingTop={1}
                    >
                      <Grid item>
                        <Avatar
                          alt="Remy Sharp"
                          src={img}
                          sx={{ width: 56, height: 56 }}
                        />
                        {name}
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions disableSpacing sx={{ marginLeft: 1 }}>
                    {/* {object.length > 0 &&
                    object.map((bien, index) => ( */}
                    <Grid container wrap="nowrap" spacing={0}>
                      <Grid item>
                        <EditIcon></EditIcon>
                      </Grid>
                      <Grid item xs>
                        <Typography sx={{ paddingRight: 9 }}>Editar</Typography>
                      </Grid>
                    </Grid>

                    <Grid container wrap="nowrap" spacing={0}>
                      <Grid item>
                        <DeleteIcon></DeleteIcon>
                      </Grid>
                      <Grid item xs>
                        <Typography sx={{ paddingRight: 9 }}>
                          Eliminar
                        </Typography>
                      </Grid>
                    </Grid>

                    {/* ))} */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </>
          {/* // ))} */}
        </Grid>
      </Box>
    </ActionsLayout>
  );
};

export default ResponsiveGrid;
