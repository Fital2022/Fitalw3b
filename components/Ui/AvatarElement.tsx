import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
  img: string;
  name: string;
}
export const AvatarElement: FC<Props> = ({ img, name }) => {
  return (
    <Box>
      <Button sx={{ display: "flex", flexDirection: "column" }}>
        <Avatar src={img} />
        <Typography sx={{ color: "black", textTransform: "none" }}>
          {name}
        </Typography>
      </Button>
    </Box>
  );
};
