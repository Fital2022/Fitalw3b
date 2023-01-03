import { Box, Button, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { IBottomMenuData } from "../../interfaces";
import { OneLink } from "./SubLinks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setAutoSubOptions, setSuboptions } from "../../store";
import styles from "../../styles/Things.module.css";

interface Props {
  data: IBottomMenuData[];
}

export const BottomMenu: FC<Props> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();
  let show = useSelector((state: RootState) => state.form.suboptions);
  const [currentId, setCurrentId] = useState<number | undefined>();
  
  useEffect(() => {
    if (show == false) {
      setCurrentId(undefined)
    }
  }, [show])

  return (
    <>
    
      <Box
        className={styles["container"]}
        sx={{
            position: "fixed",
          bottom: 20,
          marginTop: { xs: -70, sm: -82 },
          left: "45%",
          transform: "translate(-45%)",
          bgcolor: "rgba(255,255,255,0.3)",
          borderRadius: "10px",
          backdropFilter: "blur(2px)",
          display: "flex",
          // overflowX: { xs: "auto"},
          overflowY: { xs: "auto", sm: "visible", md: "visible" },
        }}
      >
        {data.map((element) => {
          return (
            <Box
              key={element.link.id}
              sx={{alignItems: "center", bgcolor: "transparent" }}
            >
              <Box
                sx={[
                  {
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    bgcolor: "red",

                    position: "absolute",
                    top: "120px",
                    right: {xs: "5vw", sm: "5vw", md: "-3vw"},
                    zIndex: -10,
                    height: "270px",
                    minWidth: "510px",
                    visibility: "hidden",
                    opacity: 0,
                    transition: "all 0.5s ease",
                    translate: "-3vw"
                },
                  element.link.id === currentId && show   && {
                    visibility: "visible",
                    bgcolor: "gray",
                    top: "-60vh",
                    zIndex: 1,
                    opacity: 1,
                    
                },
                ]}
              >
                {element.sublinks.map((sub) => (
                  <>
                  {element.sublinks.length === 1 ?  <OneLink
                    key={sub.id}
                    {...sub}
                    align={"center"}
                  /> : 
                   <OneLink
                   key={sub.id}
                   {...sub}
                   align={sub.id === 2 ? "flex-start" : "flex-end"}
                 />}
                  </>
                ))}
              </Box>
              <Button
                key={element.link.id}
                sx={{
                  padding: { xs: null, sm: "15px", md: "15px" },
                  width: { xs: "100px", sm: "180px", md: "180px" },
                  color: { xs: "gray", sm: "gray", md: "black" },
                  bgcolor: "transparent",
                }}
                onClick={() => {
                  setCurrentId((prevId) =>
                    prevId === element.link.id ? undefined && dispatch(setSuboptions(false)) : element.link.id);
                    dispatch(setSuboptions(true))
                }
              }
              >
                {element.link.name}
              </Button>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
