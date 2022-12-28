import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { NextPage } from "next/types";
import { SetStateAction, useState } from "react";
import { GoalCard } from "../components/cards/GoalCard";
import { MainFormContainer } from "../components/forms";
import { ActionsLayout } from "../components/Layout";

export interface IRendimientos {
  rendimiento: number;
  positive: boolean;
}

const RENDIMIENTOS: IRendimientos[] = [
  { positive: true, rendimiento: 17.5 },
  { positive: false, rendimiento: 3.2 },
  { positive: true, rendimiento: 19.5 },
  { positive: false, rendimiento: 1.5 },
];

const GoalsPage: NextPage = () => {
  const [goal, setGoal] = useState<string>("");

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              mt: {xs: 5, sm: 10},
              fontSize: { xs: "50px", sm: "80px" },
              fontWeight: 600,
            }}
          >
            META
          </Typography>
          <Typography
            sx={{
              mb: 5,
              textAlign: "center",
              fontSize: { xs: "30px", sm: "40px" },
              fontWeight: 400,
            }}
          >
            ¿Cuál es tu meta?
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: { xs: "200px", sm: "305px" } }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Selecciona tu meta
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={goal}
                  label="Selecciona tu meta"
                  onChange={(e) => setGoal(e.target.value)}
                  sx={{ bgcolor: "white" }}
                >
                  <MenuItem value={10}>Casa</MenuItem>
                  <MenuItem value={20}>Coche</MenuItem>
                  <MenuItem value={30}>Viaje</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              sx={{
                width: { xs: "100px", sm: "190px" },
                bgcolor: "#1BD145",
                color: "white",
                ml: 3,
              }}
            >
              BUSCAR
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 9,
          flexWrap: "wrap",
          // bgcolor: "grey",
        }}
      >
        {RENDIMIENTOS.map((rend) => (
          <GoalCard rendimiento={rend} />
        ))}
      </Box>
    </>
  );
};

export default GoalsPage;
