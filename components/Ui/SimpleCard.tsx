import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

interface Props {
  title: string;
  children?: JSX.Element;
}

export const SimpleCard: FC<Props> = ({title, children}) => {
  return (
    <Card sx={{ maxWidth: 345, width: 345, mt: 3, ml: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "grey" }}>L</Avatar>}
        title={
          <Typography
            variant="subtitle1"
            sx={{
              color: "grey",
              fontWeight: "600",
              textAlign: "center",
              fontSize: "25px",
            }}
          >
            {title}
          </Typography>
        }
      />
      <Typography
        sx={{ color: "white", bgcolor: "grey", textAlign: "center", p: 1 }}
      >
        DATOS
      </Typography>
      <CardContent sx={{minHeight: 300}} >{children}</CardContent>
    </Card>
  );
};
