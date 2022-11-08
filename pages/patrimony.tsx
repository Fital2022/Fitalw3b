import { ActionsLayout } from "../components/Layout";
import { Box, Grid, Typography } from "@mui/material";
import { SimpleCard } from "../components/Ui";

const PATRIMONY_OPTIONS = ["Casa", "Automovíl", "Seguro"];

const patrimony = () => {
  return (
    <ActionsLayout
      title={"Fital - Patrimonio"}
      pageDescription={"Página de patrimonio"}
    >
      <Box>
        <Typography
          variant="h2"
          component="h1"
          sx={{ textAlign: "center", mt: 5, color: "black" }}
        >
          Patrimonio
        </Typography>
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          {PATRIMONY_OPTIONS.map((item) => (
            <SimpleCard key={item} title={item} />
          ))}
        </Box>
      </Box>
    </ActionsLayout>
  );
};

export default patrimony;
