import { Box, Button, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { IBottomMenuData } from "../../interfaces";
import { OneLink } from "./SubLinks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setAutoSubOptions, setSuboptions } from "../../store";

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
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translate(-45%)",
        bgcolor: "rgba(255,255,255,0.3)",
        // bgcolor: "red",
        borderRadius: "10px",
        backdropFilter: "blur(2px)",
        display: "flex",
      }}
    >
      {data.map((element) => {
        return (
          <Box
            key={element.link.id}
            sx={{alignItems: "center",  bgcolor: "transparent" }}
          >
            <Box
              sx={[
                {
                  alignItems: "center",
                  display: "flex",
                  position: "absolute",
                  top: "120px",
                  right: "-80px",
                  zIndex: -10,
                  // backgroundColor: "grey",
                  height: "270px",
                  visibility: "hidden",
                  opacity: 0,
                  transition: "all 0.5s ease",
                  translate: "-3vw", 
                  // transform: "translateX()"
                },
                element.link.id === currentId && show   && {
                  visibility: "visible",
                  top: "-60vh",
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
                padding: "15px",
                width: { xs: "150px", md: "180px" },
                color: "black",
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
  );
};
