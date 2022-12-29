import {
  Box,
  Avatar,
  Typography,
  OutlinedInput,
  Button,
  SxProps,
  Theme,
} from "@mui/material";
import { FC, FormEvent } from "react";
import { useForm } from "../../hooks/formHooks";
interface ICashForm {
  banco: string;
}

interface Props {
  accountName: string;
  img: string;
}
export const BankAccountForm: FC<Props> = ({ accountName, img }) => {
  const [data, onChange, onReset] = useForm<ICashForm>({ banco: "" });
  const { banco } = data;
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(banco);
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
            {accountName.charAt(0).toUpperCase() + accountName.slice(1)}
          </Typography>
        </Box>
        <OutlinedInput
          placeholder="Banco*"
          sx={inputStyles}
          value={banco}
          name="banco"
          onChange={onChange}
        />
        <OutlinedInput
          placeholder="Tipo(tarjeta debito)*"
          sx={inputStyles}
          disabled
        />
        <OutlinedInput
          placeholder="Tipo(tarjeta debito)"
          sx={inputStyles}
          disabled
        />
        <OutlinedInput
          placeholder="Tipo(tarjeta credito)*"
          sx={inputStyles}
          disabled
        />
        <OutlinedInput placeholder="Monto* " sx={inputStyles} disabled />
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
