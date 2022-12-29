import { Box, Button, IconButton, SxProps, Theme } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Props extends PropsWithChildren {
  buttons: string[];
  setOption: React.Dispatch<React.SetStateAction<string>>;
  option: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainFormContainer: FC<Props> = ({
  children,
  buttons,
  option,
  setOption,
  show,
  setShow,
}) => {
  return show ? (
    <Box
      sx={{
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: "700px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {buttons &&
          buttons.length > 0 &&
          buttons.map((button) => (
            <Button
              onClick={() => setOption(button)}
              key={button}
              sx={{
                ...buttonStyles,
                ...(option === button && {
                  color: "white",
                  bgcolor: "#31A354",
                }),
              }}
            >
              {button}
            </Button>
          ))}
      </Box>
      <Box
        sx={{
         
          p: 3,
          bgcolor: "#fff",
          position: "absolute",
          width: "100%",
        }}
      >
        <IconButton
          sx={{
            border: "1px solid #707070",
            position: "absolute",
            top: -40,
            left: -40,
            ":hover": {
              bgcolor: "#707070",
              color: "white",
            },
          }}
          onClick={() => setShow(false)}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Box>
  ) : null;
};

const buttonStyles: SxProps<Theme> = {
  // textTransform: "none",
  color: "#000",
  border: "1px solid #707070",
  borderRadius: "15px",
  minWidth: "100px",
  bgcolor: "#fff",
  ":hover": {
    bgcolor: "#31A354",
    color: "white",
  },
  ":not(:last-child)": {
    mr: 2,
  },
};
