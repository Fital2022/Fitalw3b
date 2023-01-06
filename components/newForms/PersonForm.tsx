import { CheckCircle } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
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
import CloseIcon from '@mui/icons-material/Close';

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
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export const PersonForm: FC<Props> = ({ img, person, setShow }) => {
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
        {/* prueba */}
        <Grid container>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6} container justifyContent={"flex-end"}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <IconButton
                sx={{
                  border: "1px solid #707070",
                  right: "10px",
                  ":hover": {
                    bgcolor: "#707070",
                    color: "white",
                  },
                }}
                onClick={() => setShow(false)}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        {/* prueba */}
        {/* <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
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
        </Box> */}
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
        <Box
          mt={4}
          sx={{
            transformOrigin: "top",
            transform: "scaleY(0)",
            transition: "all 0.5s ease",
            visibility: "hidden",
            maxHeight: "0px",
            ...(showSucesion &&
              ({
                visibility: "visible",
                transform: "scaleY(1)",
                maxHeight: "1000px",
              } as SxProps)),
          }}
        >
          <Typography sx={subTextStyles}>CONDICIONES</Typography>
          <Typography sx={textBoldStyles}>Educación</Typography>
          <Divider sx={dividerStyles} />
          <Box sx={row}>
            <Typography sx={subTextStyles}>Licenciatura</Typography>
            <CheckCircle sx={checkStyles} />
          </Box>
          <Box sx={row}>
            <Typography sx={subTextStyles}>Maestria</Typography>
            <CheckCircle sx={checkStyles} />
          </Box>
          <Typography sx={textBoldStyles}>Familia</Typography>
          <Divider sx={dividerStyles} />
          <Box sx={row}>
            <Typography sx={subTextStyles}>Prueba de partenidad</Typography>
            <CheckCircle sx={checkStyles} />
          </Box>
          <Box sx={row}>
            <Typography sx={subTextStyles}>Casa</Typography>
            <CheckCircle sx={checkStyles} />
          </Box>
          <Box sx={row}>
            <Typography sx={subTextStyles}>Tener un hijo</Typography>
            <CheckCircle sx={checkStyles} />
          </Box>
          <Typography sx={textBoldStyles}>Patrimonio</Typography>
          <Box sx={row}>
            <Typography sx={subTextStyles}>Tener $1,000,000</Typography>
            <CheckCircle sx={checkStyles} />
          </Box>
          <Typography sx={textBoldStyles}>Otra</Typography>
          <Divider sx={dividerStyles} />
          <OutlinedInput
            sx={inputStyles}
            fullWidth
            // placeholder="Domicilio*"
            // value={domicilio}
            // name="domicilio"
            // onChange={onChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "space-between",
              sm: "flex-start",
              pb: showSucesion ? 4 : 0,
            },
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

const subTextStyles: SxProps<Theme> = {
  fontSize: "16px",
  color: "#6A6A6A",
  mb: 2,
};

const textBoldStyles: SxProps<Theme> = {
  fontSize: "16px",
  color: "#000",
  mb: 1,
};

const row: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
};

const dividerStyles: SxProps<Theme> = {
  mb: 1,
  bgcolor: "#707070",
};

const checkStyles: SxProps<Theme> = {
  color: "#1BD145",
};
