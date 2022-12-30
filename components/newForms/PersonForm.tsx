import { CheckCircle } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  OutlinedInput,
  Radio,
  RadioGroup,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { useForm } from "../../hooks/formHooks";
import styles from "../../styles/Things.module.css";

interface IFormData {
  nombre: string;
  fecha: string;
  sexo: "Hombre" | "Mujer" | "";
  curp: string;
  rfc: string;
  domicilio: string;
  estadoCivil: string;
}

interface Props {
  person: string;
  img: string;
}
export const PersonForm: FC<Props> = ({ img, person }) => {
  const [showSucesion, setShowSucesion] = useState<boolean>(false);
  const [data, onChange, onReset] = useForm<IFormData>({
    curp: "",
    domicilio: "",
    estadoCivil: "",
    fecha: "",
    nombre: "",
    rfc: "",
    sexo: "",
  });

  const { curp, domicilio, estadoCivil, fecha, nombre, rfc, sexo } = data;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // bgcolor: "grey",
        mt: { xs: 7, sm: 10 },
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "1000px",
          maxWidth: "95%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Avatar
            src={img}
            sx={{
              width: { xs: "55px", sm: "70px" },
              height: { xs: "55px", sm: "70px" },
              mr: 3,
            }}
          />
          <Typography
            sx={{ color: "#6A6A6A", fontSize: "20px", fontWeight: "600" }}
          >
            {person.charAt(0).toUpperCase() + person.slice(1)}
          </Typography>
        </Box>
        <OutlinedInput
          sx={inputStyles}
          placeholder="Nombre Completo*"
          value={nombre}
          name="nombre"
          onChange={onChange}
        />
        <OutlinedInput
          sx={inputStyles}
          placeholder="Fecha de Nacimiento*"
          type="date"
          onChange={onChange}
          value={fecha}
          name="fecha"
        />
        <FormLabel component="legend">Sexo</FormLabel>
        <RadioGroup
          row
          aria-label="sexo"
          defaultValue="null"
          name="sexo"
          id="sexo"
          value={sexo}
          onChange={onChange}
        >
          <FormControlLabel
            value="Mujer"
            control={<Radio color="primary" sx={{ color: "#707070" }} />}
            label="Mujer"
          />
          <FormControlLabel
            value="Hombre"
            control={<Radio color="primary" sx={{ color: "#707070" }} />}
            label="Hombre"
          />
        </RadioGroup>
        <OutlinedInput
          sx={inputStyles}
          placeholder="Curp*"
          value={curp}
          name="curp"
          onChange={onChange}
        />
        <OutlinedInput
          sx={inputStyles}
          placeholder="RFC*"
          value={rfc}
          name="rfc"
          onChange={onChange}
        />
        <OutlinedInput
          sx={inputStyles}
          placeholder="Domicilio*"
          value={domicilio}
          name="domicilio"
          onChange={onChange}
        />
        <OutlinedInput
          sx={inputStyles}
          placeholder="Estado civil*"
          value={estadoCivil}
          name="estadoCivil"
          onChange={onChange}
        />
        {showSucesion && (
          <Grid item>
            <div className={styles["form-title"]}>
              <Typography sx={{ mr: "50px" }} variant="subtitle1">
                Condiciones
              </Typography>
            </div>
            <br />
            <Typography sx={{ color: "black" }}>Educación</Typography>
            <hr className={styles["form-line"]} />
            <Grid container justifyContent="center" item direction="row">
              <Typography sx={{ color: "black" }}>Licenciatura</Typography>{" "}
              &nbsp;&nbsp;
              <CheckCircle className={styles["icon-check"]} />
            </Grid>
            <Grid container justifyContent="center" item direction="row">
              <Typography sx={{ color: "black" }}>Maestria</Typography>{" "}
              &nbsp;&nbsp;
              <CheckCircle className={styles["icon-check"]} />
            </Grid>
            <br />
            <Typography sx={{ color: "black" }}>Familia</Typography>
            <hr className={styles["form-line"]} />
            <Grid container justifyContent="center" item direction="row">
              <Typography sx={{ color: "black" }}>
                Prueba de paternidad
              </Typography>{" "}
              &nbsp;&nbsp;
              <CheckCircle className={styles["icon-check"]} />
            </Grid>
            <Grid container justifyContent="center" item direction="row">
              <Typography sx={{ color: "black" }}>Casa</Typography> &nbsp;&nbsp;
              <CheckCircle className={styles["icon-check"]} />
            </Grid>
            <Grid container justifyContent="center" item direction="row">
              <Typography sx={{ color: "black" }}>Tener un hijo</Typography>{" "}
              &nbsp;&nbsp;
              <CheckCircle className={styles["icon-check"]} />
            </Grid>
            <br />
            <Typography sx={{ color: "black" }}>Patrimonio</Typography>
            <hr className={styles["form-line"]} />
            <Grid container justifyContent="center" item direction="row">
              <Typography sx={{ color: "black" }}>
                Tener $1,000,000,000
              </Typography>{" "}
              &nbsp;&nbsp;
              <CheckCircle className={styles["icon-check"]} />
            </Grid>
            <br />
            <Typography sx={{ color: "black" }}>Otra</Typography>
            <hr className={styles["form-line"]} />
            {/* <Grid container justifyContent="center" item direction="row">
              <StyledTextField2 />
            </Grid> */}
          </Grid>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", sm: "flex-start" },
          }}
        >
          <Button
            sx={buttonStyles}
            variant="submit"
            color="submit"
            type="submit"
          >
            Finalizar
          </Button>
          <Button
            sx={buttonStyles}
            onClick={() => setShowSucesion((prevState) => !prevState)}
            variant="submit"
            color="submit"
          >
            Sucesión
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const inputStyles: SxProps<Theme> = {
  p: 0,
  height: { xs: 40, sm: 50 },
  bgcolor: "white",
  mb: 3,
  color: "#707070",
};

const buttonStyles: SxProps<Theme> = {
  width: { xs: "47%", sm: "120px" },
  ":not(:last-child)": {
    mr: { xs: 0, sm: 2 },
  },
};
