import { Box, Typography, Grid } from "@mui/material";
import React, { DragEvent, useEffect, useState } from "react";
import { ActionsLayout } from "../components/Layout";
import { StepForm } from "../components/forms";
import {
  IBeneficiary,
  IEmpire,
  IRight,
  IRightBeneficiary,
  ITrustor,
} from "../interfaces/empireInterfaces";
import { BottomMenu } from "../components/bottomMenu/BottomMenu";
import { IBottomMenuData } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import { AppDispatch, RootState, setShowForm, setShowForm2 } from "../store";
import { BottomMenu2 } from "../components/bottomMenu/BottomMenu2";
import { NewDataTable } from "../components/tables/NewDataTable";
import { BottomMenuMobile } from "../components/bottomMenu/BottomMenuMobile";

const MENU_ACTIONS: IBottomMenuData[] = [
  {
    link: { id: 1, name: "Arbol" },
    sublinks: [
      { id: 1, name: "Fideicomitente", img: "/images/profile.png" },
      { id: 2, name: "Fiduciario", img: "/images/profile.png" },
      { id: 3, name: "Beneficiario", img: "/images/profile.png" },
    ],
  },
  {
    link: { id: 2, name: "Herencia" },
    sublinks: [
      { id: 1, name: "Casa", img: "/images/casa.png" },
      { id: 2, name: "Departamento", img: "/images/casa.png" },
      { id: 3, name: "Autos", img: "/images/autos.png" },
    ],
  },
  {
    link: { id: 3, name: "Resumen" },
    sublinks: [
      { id: 1, name: "Casa", img: "/images/casa.png" },
      { id: 2, name: "Departamento", img: "/images/casa.png" },
      { id: 3, name: "Autos", img: "/images/autos.png" },
    ],
  },
];

let tipo = "";
let img = "";

const Testament: NextPage = () => {
  let dataform = useSelector((state: RootState) => state.form.formvalues);
  const [option, setOption] = useState("");
  let menuoption = useSelector((state: RootState) => state.form.menuselected);
  let show = useSelector((state: RootState) => state.form.showform2);

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
    tipo = event.dataTransfer.getData("option");
    img = event.dataTransfer.getData("img");
    console.log({ tipo });
    console.log({ img });
    dispatch(setShowForm(true));
  };

  const dispatch = useDispatch<AppDispatch>();

  const closeform = () => {
    dispatch(setShowForm2(false));
  };

  let draggmode = useSelector((state: RootState) => state.form.isDraggin);

  let formmode = useSelector((state: RootState) => state.form.showform);

  let empire = useSelector((state: RootState) => state.empire.selectedEmpire);

  const rights = useSelector(
    (state: RootState) => state.empire.selectedEmpire?.rights
  );
  const beneficiary = useSelector(
    (state: RootState) => state.empire.selectedEmpire?.beneficiary
  );

  let { name, img } = useSelector((state: RootState) => state.form.formvalues);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("Si solte algo");
  };

  return (
    <>
      <BottomMenuMobile data={MENU_ACTIONS} />

      <Box alignItems={"center"} sx={{ marginTop: 10 }}>
        <>
          {(() => {
            switch (menuoption) {
              case "Arbol":
                return show ? (
                  <>
                    {/* <BankAccountForm
                      accountName={name}
                      img={img}
                      isWallet={name.includes('Wallet') ? true : false}
                      setShow={closeform}
                    />
                    <CashAccountDetails type={"cuentas"} /> */}
                  </>
                ) : null;
              case "Herencia":
                return show ? (
                  <>
                    <NewDataTable
                      rights={rights}
                      beneficiarys={beneficiary}
                      setShow={closeform}
                    />
                  </>
                ) : null;
              case "Resumen":
                return show ? <></> : null;

              default:
                break;
            }
          })()}
        </>
        {/* <StepForm premium={true} iempire={empire} /> */}
        {/* {formmode ? (
          <Grid item sx={{ transition: "all .1s" }}>
            {" "}
            <StepForm premium={true} iempire={empire} title={tipo} img={img} />
          </Grid>
        ) : (
          ""
        )} */}
      </Box>
      <BottomMenu data={MENU_ACTIONS} />
      {/* <BottomMenu2 data={MENU_ACTIONS} setOption={setOption} option={option} /> */}
    </>
  );
};

export default Testament;
