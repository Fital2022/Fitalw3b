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

export const BottomMenu: FC<Props> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();
  let show = useSelector((state: RootState) => state.form.suboptions);
  const [currentId, setCurrentId] = useState<number | undefined>();

  useEffect(() => {
    if (show == false) {
      setCurrentId(undefined);
    }
  }, [show]);

  return (
    <>
      {/* <Box
        className={styles.container}
        sx={{ overflowX: "auto", width: "100%", maxWidth: "100%", display: { sm: "none", md: "none" }}}
      >
        <Box sx={{ display: "flex", width: "auto" }}>
          {data.map((element) => (
            <Button sx={{ ":not(:last-child)": { mr: 2 }, width: "100px",  color: { xs: "gray", sm: "gray", md: "black" },
            bgcolor: "transparent", }}>
              {element.link.name}
            </Button>
          ))}
        </Box>
      </Box> */}
      <Box
        className={styles["container"]}
        sx={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translate(-45%)",
          bgcolor: "rgba(255,255,255,0.3)",
          // bgcolor: "red",
          borderRadius: "10px",
          backdropFilter: "blur(2px)",
          // display: "flex",
          display: { xs: "none", sm: "flex" },
        }}
      >
        {data.map((element) => {
          return (
            <Box
              key={element.link.id}
              sx={{ position: "relative", bgcolor: "transparent" }}
            >
              <Box
                sx={[
                  {
                    display: "flex",
                    position: "absolute",
                    // top: "120px",
                    left: "-25px",
                    zIndex: -10,
                    height: "110px",
                    visibility: "hidden",
                    opacity: 0,
                    transition: "all 0.5s ease",
                  },
                  element.link.id === currentId &&
                    show && {
                      visibility: "visible",
                      top: "-120px",
                      zIndex: 1,
                      opacity: 1,
                    },
                ]}
              >
                {element.sublinks.map((sub) => (
                  <OneLink
                    key={sub.id}
                    {...sub}
                    align={sub.id === 2 ? "flex-start" : "flex-end"}
                  />
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
                    prevId === element.link.id
                      ? undefined && dispatch(setSuboptions(false))
                      : element.link.id
                  );
                  dispatch(setSuboptions(true));
                }}
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
