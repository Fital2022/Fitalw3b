import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IRendimientos } from "../../pages/goals";

interface Props {
  rendimiento: IRendimientos;
}

export const GoalCard: FC<Props> = ({
  rendimiento: { positive, rendimiento },
}) => {
  return (
    <Box
      component="article"
      sx={{
        ":not(:last-child)": { mr: { xs: 0, sm: 4 } },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "244px",
          height: "244px",
          borderRadius: "20px",
          bgcolor: "white",
          border: "1px solid #000000",
          mb: 2,
        }}
      ></Box>
      <Typography sx={{ fontSize: "28px" }}>Rendimiento</Typography>
      <Typography
        sx={{
          color: positive ? "#009D00" : "#C90000",
          fontSize: "30px",
        }}
      >
        {rendimiento}
      </Typography>
    </Box>
  );
};
