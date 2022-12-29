import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import { IBottomMenuData } from "../../interfaces";
import { setSuboptions } from "../../store";
import { OneLink } from "./SubLinks";

interface Props {
  data: IBottomMenuData[];
  setOption: React.Dispatch<React.SetStateAction<string>>;
  option: string;
}

export const BottomMenu2: FC<Props> = ({ data, option, setOption }) => {
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
            sx={{ alignItems: "center", bgcolor: "transparent" }}
          >
            <Button
              key={element.link.id}
              sx={[
                {
                  padding: "15px",
                  width: { xs: "150px", md: "180px" },
                  color: "black",
                  bgcolor: "transparent",
                },

                element.link.name === option && {
                  color: "#8E4BA8",
                },
              ]}
              onClick={() => {
                setOption(element.link.name);
              }}
            >
              {element.link.name}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};
