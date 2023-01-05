import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  OutlinedInput,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { FC, FormEvent } from "react";
import { useForm } from "../../hooks/formHooks";
import CloseIcon from "@mui/icons-material/Close";
import { IRight } from "../../interfaces/empireInterfaces";

interface IInmobiliaryForm {
  escritura: string;
}

interface Props {
  inmobiliaryType: IRight["type"];
  img: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export const InmobiliaryForm: FC<Props> = ({
  inmobiliaryType,
  img,
  setShow,
}) => {
  const [data, onChange, onReset] = useForm({
    escritura: "",
  } as IInmobiliaryForm);

  const { escritura } = data;

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(escritura);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 7, sm: 10 },
      }}
    >
      <Box
        onSubmit={onSubmit}
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
                {inmobiliaryType.charAt(0).toUpperCase() +
                  inmobiliaryType.slice(1)}
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
        <OutlinedInput
          placeholder="Escritura*"
          sx={inputStyles}
          value={escritura}
          name="escritura"
          onChange={onChange}
        />
        <OutlinedInput
          placeholder="Última boleta de pago de preidal y de agua*"
          sx={inputStyles}
          disabled
        />
        <OutlinedInput
          placeholder="Escritura de régimen de condominios"
          sx={inputStyles}
          disabled
        />
        <OutlinedInput
          placeholder="Constancia de no adeudo de cutoas de mantenimiento*"
          sx={inputStyles}
          disabled
        />
        <OutlinedInput
          placeholder="Valor de referencia*"
          sx={inputStyles}
          disabled
        />
        <OutlinedInput placeholder="Ubicación*" sx={inputStyles} disabled />
        <Button
          type="submit"
          variant="submit"
          color="submit"
          sx={{
            height: 40,
            width: { xs: "100%", md: "200px" },
            alignSelf: { xs: "normal", md: "flex-end" },
          }}
        >
          Finalizar
        </Button>
      </Box>
    </Box>
  );
};

const inputStyles: SxProps<Theme> = {
  p: 0,
  height: { xs: 40, sm: 50 },
  bgcolor: "white",
  mb: 3,
};
