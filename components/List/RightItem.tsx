import React, { FC } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, Box, Button, SxProps, Theme, Typography } from "@mui/material";
import { IRight } from "../../interfaces/empireInterfaces";

interface Props {
  right: IRight;
  onClick?: () => void;
}
export const RightItem: FC<Props> = ({ right: { name, img }, onClick }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        mb: 4,
        "&:not(:last-child)": {
          mr: 3,
        },
      }}
    >
      <Avatar src={img} sx={{ width: 60, height: 60 }} />
      <Typography sx={{ color: "#000", my: 2 }}>{name}</Typography>
      <Box display="flex" justifyContent="space-around">
        <Button sx={buttonStyles} onClick={onClick}>
          <EditIcon />
          <Typography sx={{ ml: 1, transform: "translateY(1px)" }}>
            Editar
          </Typography>
        </Button>
        <Button sx={buttonStyles} onClick={onClick}>
          <DeleteIcon />
          <Typography sx={{ ml: 1, transform: "translateY(1px)" }}>
            Eliminar
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

const buttonStyles: SxProps<Theme> = {
  textTransform: "none",
  width: "100px",
  color: "#000",
  "&:not(:last-child)": {
    mr: 2,
  },
};
