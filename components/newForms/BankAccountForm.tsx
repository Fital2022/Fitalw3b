import {
  Box,
  Avatar,
  Typography,
  OutlinedInput,
  Button,
  SxProps,
  Theme,
  IconButton,
  Grid,
} from "@mui/material";
import { FC, FormEvent } from "react";
import { useForm } from "../../hooks/formHooks";
import CloseIcon from "@mui/icons-material/Close";
interface ICashForm {
  banco: string;
}

interface Props {
  accountName: string;
  img: string;
  isWallet: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BankAccountForm: FC<Props> = ({
  accountName,
  img,
  isWallet,
  setShow,
}) => {
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
        // bgcolor: "grey",
        mt: { xs: 7, sm: 10 },
      }}
    >
      {/* <Box
        sx={{
         
          p: 3,
          bgcolor: "#fff",
          position: "relative",
          width: "100%",
        }}
      >
        <IconButton
          sx={{
            border: "1px solid #707070",
            position: "relative",
            left: "9vw",
            // top: -40,
            // left: -40,
            ":hover": {
              bgcolor: "#707070",
              color: "white",
            },
          }}
          // onClick={() => setShow(false)}
        >
          <CloseIcon />
        </IconButton>
      </Box> */}
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
                {accountName.charAt(0).toUpperCase() + accountName.slice(1)}
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
          <IconButton
            sx={{
              border: "1px solid #707070",
              right: "10px",
              ":hover": {
                bgcolor: "#707070",
                color: "white",
              },
            }}
            // onClick={() => setShow(false)}
          >
            <CloseIcon />
          </IconButton>
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
        </Box> */}
        <OutlinedInput
          placeholder="Banco*"
          sx={inputStyles}
          value={banco}
          name="banco"
          onChange={onChange}
        />
        {!isWallet ? (
          <>
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
          </>
        ) : (
          <>
            <OutlinedInput placeholder="Monto*" sx={inputStyles} disabled />
            <OutlinedInput
              placeholder="Rendimiento*"
              sx={inputStyles}
              disabled
            />
          </>
        )}
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
