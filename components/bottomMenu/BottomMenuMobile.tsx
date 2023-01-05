import { Box, Button, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { IBottomMenuData } from "../../interfaces";
import { OneLink } from "./SubLinks";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  setAutoSubOptions,
  setMenuSelected,
  setShowForm2,
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

  function click() {
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
            <Box
              key={element.link.id}
              sx={{ alignItems: "center", bgcolor: "transparent" }}
            >
              <Box
                sx={[
                  {
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "absolute",
                    top: "120px",
                    right: { xs: "7vw", sm: "15vw", md: "4vw" },
                    zIndex: -10,
                    height: "250px",
                    minWidth: "250px",
                    visibility: "hidden",
                    opacity: 0,
                    transition: "all 0.5s ease",
                  },
                  element.link.id === currentId && element.link.name != 'Herencia' &&
                    show && {
                      visibility: "visible",
                      top: { xs: "none", sm: "-600px", md: "-600px" },
                      bottom: { xs: "-600px", sm: "none", md: "none" },
                      zIndex: 1,
                      opacity: 1,
                    },
                ]}
              >
                {element.sublinks.map((sub) => (
                  <>
                    {element.sublinks.length === 1 ? (
                      <OneLink key={sub.id} {...sub} align={"center"} />
                    ) : (
                      <OneLink
                        key={sub.id}
                        {...sub}
                        align={sub.id === 2 ? "flex-start" : "flex-end"}
                      />
                    )}
                  </>
                ))}
              </Box>
              <Button
                key={element.link.id}
                sx={[{
                  padding: { xs: null, sm: "15px", md: "15px" },
                  ":not(:last-child)": { mr: 0.5 },
                  width: "100px",
                  color: { xs: "gray", sm: "gray", md: "black" },
                  bgcolor: "transparent",
                },
                element.link.id === currentId && {
                  color: { xs: "#8E4BA8", sm: "#8E4BA8", md: "#8E4BA8" } ,
                },
              ]}
              onClick={() => {
                setCurrentId((prevId) => {
                  if (prevId === element.link.id) {
                    dispatch(setSuboptions(false))
                    // dispatch(setMenuSelected(""))
                    return undefined; 
                  }
                  dispatch(setSuboptions(true));
                  dispatch(setMenuSelected(element.link.name))
                  if (element.link.name === 'Herencia') {
                    dispatch(setShowForm2(true));
                  }
                  return element.link.id;
                }
            
                );
              }}
              >
                {element.link.name}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
