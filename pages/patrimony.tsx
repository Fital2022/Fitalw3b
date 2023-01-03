import { DragEvent, useEffect } from "react";
import { ActionsLayout } from "../components/Layout";
import { Box, Button, Grid, Typography } from "@mui/material";
import { IBottomMenuData } from "../interfaces";
import { BottomMenu } from "../components/bottomMenu/BottomMenu";
import { StepForm, StepForm2 } from "../components/forms";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowForm,
  AppDispatch,
  RootState,
  setShowForm2,
  setSuboptions,
} from "../store";
import {
  IRight,
  IRightBeneficiary,
  ITrustor,
  IBeneficiary,
  IEmpire,
} from "../interfaces/empireInterfaces";
import { NextPage } from "next";
import {
  BankAccountForm,
  InmobiliaryForm,
  PersonForm,
} from "../components/newForms";
import { CashAccountDetails } from "../components/List";
import styles from "../styles/Things.module.css";

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
];

const Properright: IRightBeneficiary[] = [
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
];
const Properright2: IRightBeneficiary[] = [
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
];
const Properright3: IRightBeneficiary[] = [
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
];
const Properright4: IRightBeneficiary[] = [
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
];

const trustor: ITrustor[] = [{ id: 1, name: "Volga" }];

const beneficiary: IBeneficiary[] = [
  {
    id: 1,
    name: "Ana Lopez",
    img: "/images/avatar/person2.jpeg",
    properties: Properright,
  },
  {
    id: 2,
    name: "Juan Lopez",
    img: "/images/avatar/person1.jpeg",
    properties: Properright2,
  },
  {
    id: 3,
    name: "Laura Lopez",
    img: "/images/avatar/person2.jpeg",
    properties: Properright3,
  },
  {
    id: 4,
    name: "Carlos Lopez",
    img: "/images/avatar/person1.jpeg",
    properties: Properright4,
  },
];

// const empire : IEmpire =
// {  name: "prueba1",
//   id: 1,
//   rights: right,
//   trustor: trustor,
//   beneficiary:beneficiary}

const MENU_ACTIONS: IBottomMenuData[] = [
  {
    link: { id: 1, name: "Dinero" },
    sublinks: [
      { id: 1, name: "Cuenta Bancaria", img: "/images/banco.png" },
      { id: 2, name: "Wallet 1", img: "/images/wallet.png" },
      { id: 3, name: "Wallet 2", img: "/images/wallet.png" },
    ],
  },
  {
    link: { id: 2, name: "Mobiliario" },
    sublinks: [
      // { id: 1, name: "casa", img: "/images/casa.png" },
      // { id: 2, name: "departamento", img: "/images/casa.png" },
      { id: 3, name: "auto", img: "/images/autos.png" },
    ],
  },
  {
    link: { id: 3, name: "Inmobiliario" },
    sublinks: [
      { id: 1, name: "casa", img: "/images/casa.png" },
      { id: 2, name: "departamento", img: "/images/casa.png" },
      // { id: 3, name: "auto", img: "/images/autos.png" },
    ],
  },
  {
    link: { id: 4, name: "Derechos" },
    sublinks: [
      { id: 1, name: "Arte", img: "/images/arte.png" },
      { id: 2, name: "Inversiones", img: "/images/inversiones.png" },
      { id: 3, name: "Bitcoin", img: "/images/bitcoin.png" },
    ],
  },
];
let tipo: IRight["type"] = "casa";
let img = "";

const Patrimony: NextPage = () => {
  let dataform = useSelector((state: RootState) => state.form.formvalues2);

  useEffect(() => {
    console.log("Aqui estan los valores");
    tipo = dataform.name as IRight["type"];
    img = dataform.img;
    if (tipo.length > 0) {
      dispatch(setShowForm2(true));
    }
  }, [dataform]);

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    console.log(event);
    tipo = event.dataTransfer.getData("option") as IRight["type"];
    img = event.dataTransfer.getData("img");
    console.log({ tipo });
    console.log({ img });
    dispatch(setShowForm2(true));
  };

  const dispatch = useDispatch<AppDispatch>();

  let draggmode = useSelector((state: RootState) => state.form.isDraggin);

  let formmode = useSelector((state: RootState) => state.form.showform2);

  let empire = useSelector((state: RootState) => state.empire.selectedEmpire);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("Si solte algo");
  };

  return (
    <>
      {/* <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop={2}
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <Grid item xs={3}>
          <BottomMenu data={MENU_ACTIONS} />
        </Grid>
      </Grid> */}
      <Box
        className={styles.container}
        sx={{ overflowX: "auto", width: "100%", maxWidth: "100%" }}
      >
        {/* <Box sx={{ display: "flex", width: "auto" }}>
          {[1, 2, 3, 4, 5, 6, 7].map((element) => (
            <Button sx={{ ":not(:last-child)": { mr: 2 }, width: "100px" }}>
              prueba menu asdfasdfasdfasdf
            </Button>
          ))}
        </Box> */}
      </Box>
      <Box sx={{ width: "100%", height: "100%", marginTop: -6 }}>
        {/* <StepForm premium={true} iempire={empire} /> */}
        {/* <InmobiliaryForm inmobiliaryType={"casa"} img="" /> */}
        {/* <BankAccountForm accountName={"Wallet 1"} img={""} isWallet />
        <CashAccountDetails type={"wallets"} /> */}
        {/* <BankAccountForm
          accountName={"Cuenta Bancaria"}
          img={""}
          isWallet={false}
        />
        <CashAccountDetails type={"cuentas"} /> */}

        {/* <div onDrop={onDropEntry} onDragOver={allowDrop}>
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
        </div> */}
        {/* {formmode ? (
          <Grid item sx={{ transition: "all .1s" }}>
            {" "}
            <StepForm2
              premium={false}
              iempire={empire}
              title={tipo}
              img={img}
            />
          </Grid>
        ) : (
          ""
        )} */}
      </Box>
      <BottomMenu data={MENU_ACTIONS} />
    </>
  );
};

export default Patrimony;
