import { Box, Button, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { IBottomMenuData } from "../../interfaces";
import { OneLink } from "./SubLinks";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  setAutoSubOptions,
  setSuboptions,
} from "../../store";
import styles from "../../styles/Things.module.css";

interface Props {
  data: IBottomMenuData[];
}

export const BottomMenuMobile: FC<Props> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();
  let show = useSelector((state: RootState) => state.form.suboptions);
  const [currentId, setCurrentId] = useState<number | undefined>();

  useEffect(() => {
    if (show == false) {
      setCurrentId(undefined);
    }
  }, [show]);

  function click(){
    console.log("Click");
  }

  return (
    <>
      <Box
        className={styles.container}
        sx={{
          marginTop: 1,
          overflowX: "auto",
          width: "100%",
          maxWidth: "100%",
          display: { sm: "none", md: "none" },
        }}
      >
        <Box sx={{ display: "flex", width: "auto" }}>
          {data.map((element) => (
            <Button
              sx={{
                ":not(:last-child)": { mr: 0.5 },
                width: "100px",
                color: { xs: "gray", sm: "gray", md: "black" },
                bgcolor: "transparent",
              }}
              onClick={
                click
              }
            >
              {element.link.name}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};
