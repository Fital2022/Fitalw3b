import { Box, Button, Grid } from "@mui/material";
import React, { FC, useState } from "react";
import { IBottomMenuData } from "../../interfaces";
import { OneLink } from "./SubLinks";

interface Props {
  data: IBottomMenuData[];
}

export const BottomMenu: FC<Props> = ({ data }) => {
  const [currentId, setCurrentId] = useState<number | undefined>();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translate(-45%)",
        bgcolor: "rgba(255,255,255,0.5)",
        borderRadius: "10px",
        backdropFilter: "blur(20px)",
        display: "flex",
      }}
    >
      {data.map((element) => {
        return (
          <Box sx={{ position: "relative" }}>
            <Box
              sx={[
                {
                  display: "flex",
                  position: "absolute",
                  top: "120px",
                  left: "-25px",
                  zIndex: -10,
                  // backgroundColor: "grey",
                  height: "110px",
                  visibility: "hidden",
                  transition: "all 0.3s ease",
                },
                element.link.id === currentId && {
                  visibility: "visible",
                  top: "-120px",
                  zIndex: 1,
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
              sx={{ padding: "15px", width: "180px", color: "black" }}
              onClick={() =>
                setCurrentId((prevId) =>
                  prevId === element.link.id ? undefined : element.link.id
                )
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
