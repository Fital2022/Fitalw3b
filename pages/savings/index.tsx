import type { NextPage } from "next";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { ActionsLayout } from "../../components/Layout";
import styles from "./Savings.module.css";
import { AvatarElement } from "../../components/Ui";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "blue" : "",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 0,
}));

const BorderLinearProgressYellow = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.mode === "light" ? "#FFD336" : "#FFD336",
  },
}));

const BorderLinearProgressBlue = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.mode === "light" ? "#0071BF" : "#0071BF",
  },
}));

const Savings: NextPage = () => {
  return (
    <ActionsLayout title={"Fital - Ahorros"} pageDescription={"Pagina principal"}>
      <AvatarElement img={"images/autos.png"} name={"Tu auto"} />
    </ActionsLayout>
  );

  return (
    <ActionsLayout
      title={"Fital - Ahorros"}
      pageDescription={"Página principal"}
    >
      <div
        style={{
          marginTop: "80px",
          padding: "50px",
          position: "relative",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Item>
                <h1>Ahorros</h1>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <div>
                  <div className={styles["div"]}>
                    Ingresos
                    <Box sx={{ flexGrow: 1 }}>
                      <BorderLinearProgressYellow
                        variant="determinate"
                        value={50}
                      />
                    </Box>
                  </div>
                  <div className={styles["div"]}>
                    Gastos
                    <BorderLinearProgressBlue
                      variant="determinate"
                      value={80}
                    />
                  </div>
                </div>
                <div className={styles["parent"]}>
                  <div>
                    <h2>Tienes ahorrado:</h2>
                    <p>Cuentas</p>
                    <h3>.....7809 </h3>
                    <p>Tarjetas</p>
                    <img
                      src="https://img.icons8.com/color/344/mastercard.png"
                      alt=""
                      width="80"
                      height="60"
                    />
                    <p>Propiedades</p>
                    <div className={styles["contenedor"]}>
                      <div className={styles["imagen"]}>
                        <Avatar
                          alt="Travis Howard"
                          src="https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"
                        />
                      </div>
                      <div className={styles["imagen"]}>
                        <Avatar
                          alt="Travis Howard"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxOuzwFsfpbNfjZ-LM3Qqn0xHDgap3_uhIQ&usqp=CAU"
                        />
                      </div>
                      <div className={styles["imagen"]}>
                        <Avatar
                          alt="Travis Howard"
                          src="https://gossipvehiculo.com/wp-content/uploads/2022/01/0-14.jpg"
                        />
                      </div>
                      <div className={styles["imagen"]}>
                        <Avatar
                          alt="Travis Howard"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7fwooAbPppnlbv-8b7TJ1Wq9vB6DZkPX5g&usqp=CAU"
                        />
                      </div>
                    </div>
                    <p>Seguros</p>
                    <div className={styles["contenedor"]}>
                      <div className={styles["imagen"]}>
                        <Avatar
                          alt="Travis Howard"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrl-T3anXWELWRECfgwgjv764K4LL7JBtIA&usqp=CAU"
                        />
                      </div>
                      <div className={styles["imagen"]}>
                        <Avatar
                          alt="Travis Howard"
                          src="data:image/png;base64,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"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;$5,000</h1>
                    <br />
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;$5,000</h1>
                    <br />
                    <h1>$100,000</h1>
                    <br />
                    <h1>$100,000</h1>
                  </div>
                  <div>
                    <span>
                      <h1>Total = $210,000</h1>
                    </span>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ActionsLayout>
  );
};

export default Savings;
