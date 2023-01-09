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
  setMenuSelected,
  setFormValues,
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
import { BottomMenuMobile } from "../components/bottomMenu/BottomMenuMobile";


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
    console.log("Tengo el tipo: " + tipo + " cuya imagen es: " + img);
    if (tipo.length > 0) {
      dispatch(setShowForm(true));
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

  const closeform = () => {
    dispatch(setShowForm(false));
    dispatch(setMenuSelected(""))
    let data = {
      name: "" as IRight['type'],
      img: ""
    }
    dispatch(setFormValues(data))

  };

  const dispatch = useDispatch<AppDispatch>();

  let draggmode = useSelector((state: RootState) => state.form.isDraggin);

  let formmode = useSelector((state: RootState) => state.form.showform2);

  let empire = useSelector((state: RootState) => state.empire.selectedEmpire);

  let menuoption = useSelector((state: RootState) => state.form.menuselected);

  let show = useSelector((state: RootState) => state.form.showform);

  let { name, img } = useSelector((state: RootState) => state.form.formvalues);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("Si solte algo");
  };

  return (
    <>
      <BottomMenuMobile data={MENU_ACTIONS} />

      {/* <Box
        className={styles.container}
        sx={{ overflowX: "auto", width: "100%", maxWidth: "100%" }}
      >
        {/* <Box sx={{ display: "flex", width: "auto" }}>
          {[1, 2, 3, 4, 5, 6, 7].map((element) => (
            <Button sx={{ ":not(:last-child)": { mr: 2 }, width: "100px" }}>
              Menu
            </Button>
          ))}
        </Box> */}
      <Box sx={{ width: "100%", height: "100%", marginTop: -6 }}>
        <>
          {(() => {
            switch (menuoption) {
              case "Dinero":
                return show && name.length > 0 ? (
                  <>
                    <BankAccountForm
                      accountName={name}
                      img={img}
                      isWallet={name.includes("Wallet") ? true : false}
                      setShow={closeform}
                    />
                    <CashAccountDetails type={"cuentas"} />
                  </>
                ) : null;
              case "Mobiliario":
                return show && name.length > 0 ? (
                  <>
                    <InmobiliaryForm
                      inmobiliaryType={name}
                      img={img}
                      setShow={closeform}
                    />
                  </>
                ) : null;
              case "Inmobiliario":
                return show && name.length > 0 ? (
                  <>
                    <InmobiliaryForm
                      inmobiliaryType={name}
                      img={img}
                      setShow={closeform}
                    />
                  </>
                ) : null;
              case "Derechos":
                return show && name.length > 0 ? (
                  <>
                    <InmobiliaryForm
                      inmobiliaryType={name}
                      img={img}
                      setShow={closeform}
                    />
                  </>
                ) : null;
              default:
                break;
            }
          })()}
        </>
        {/* <StepForm premium={true} iempire={empire} /> */}

        {/* <BankAccountForm accountName={"Wallet 1"} img={""} isWallet />
        <CashAccountDetails type={"wallets"} /> */}

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
