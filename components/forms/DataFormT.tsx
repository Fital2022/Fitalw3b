import { CameraAlt, CheckCircle } from "@mui/icons-material";
import {
  Modal,
  Box,
  Typography,
  Button,
  Grid,
  Badge,
  Avatar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  styled,
} from "@mui/material";
import React, { FC, useState } from "react";
import styles from "../../styles/Things.module.css";
import { AppDispatch, getRights, setShowForm } from "../../store";
import { useDispatch } from "react-redux";

const StyledTextField = styled(TextField)`
label.Mui-focused{
    width: 446px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
}
.MuiOutlinedInput-root {
    width: 465px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
    fieldset {
        width: 446px;
        height: 38px;
        border-radius: 5px;
        border: 1px solid #707070;
    }
  }
  &:hover fieldset {
    width: 446px;
    height: 38px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
  &.Mui-focused fieldset {
    width: 446px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
}
` as typeof TextField;

const StyledTextField2 = styled(TextField)`
label.Mui-focused{
  width: 221px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #707070;
}
.MuiOutlinedInput-root {
  width: 221px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
    fieldset {
        width: 202px;
        height: 37px;
        border-radius: 5px;
        border: 1px solid #707070;
    }
  }
  &:hover fieldset {
    width: 202px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
  &.Mui-focused fieldset {
    width: 221px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
}
` as typeof TextField;

const StyledTextField3 = styled(TextField)`
    label.Mui-focused{
    width: 300px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
}
.MuiOutlinedInput-root {
  width: 320px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
    fieldset {
      width: 300px;
        height: 38px;
        border-radius: 5px;
        border: 1px solid #707070;
    }
  }
  &:hover fieldset {
    width: 300px;
    height: 38px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
  &.Mui-focused fieldset {
    width: 300px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
  }
}
` as typeof TextField;

interface Props {
  //   premium: boolean;
  //   iempire: IEmpire;
  title: string;
  img: string;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sucesion: boolean;
  setSucesion: React.Dispatch<React.SetStateAction<boolean>>;
  submit: boolean;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  setNameb: React.Dispatch<React.SetStateAction<string>>;
}

export const DataFormT: FC<Props> = ({
  title,
  img,
  setStatus,
  setOpen,
  sucesion,
  setSucesion,
  submit,
  setSubmit,
  setNameb,
}) => {
  //   const [sucesion, setSucesion] = useState(true);
  const [showBeneficiaryModal, setShowBeneficiaryModal] =
    useState<boolean>(false);
  const [formValue, setformValue] = useState({
    name: "",
    birth: "",
    genre: "",
    curp: "",
    rfc: "",
    direction: "",
    marital: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const onFormFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name + ": " + event.target.value);
    setformValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const closemodalform = () => {
    dispatch(setShowForm(false));
    setShowBeneficiaryModal(false);
  };

  const closeform = () => {
    dispatch(setShowForm(false));
  };

  const handleSubmitF = async (event: any) => {
    event.preventDefault();
    if (title === "Beneficiario") {
      setNameb(event.target.name.value);
      dispatch(getRights());
      setSubmit(true);
    } else {
      const data = {
        name: event.target.name.value,
        birth: event.target.birth.value,
        genre: event.target.genre.value,
        curp: event.target.curp.value,
        rfc: event.target.rfc.value,
        direction: event.target.direction.value,
        marital: event.target.marital.value,
      };

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data);

      // API endpoint where we send form data.
      const endpoint = "/api/form2";

      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };

      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options);

      if (response.status == 200) {
        setStatus("success");
        setOpen(true);
      }

      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json();
      // alert(
      //   `nombre: ${data.name}, fecha de nacimiento: ${data.birth}, sexo: ${data.genre}, domicilio: ${data.direction}, estado civil: ${data.marital} `
      // );
    }
  };
  return (
    <>
      <Modal
        open={showBeneficiaryModal}
        onClose={() => closemodalform()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            bgcolor: "white",
            borderRadius: "10px",
            p: 4,
          }}
        >
          <Typography variant="h3" sx={{ color: "red", textAlign: "center" }}>
            Error
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Debes de ingresar al menos un bien en tu fideicomiso para agregar un
            beneficiario.
          </Typography>
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              sx={{
                color: "white",
                bgcolor: "#31A354",
                fontSize: "16px",
                backgroundImage: "none",
                textTransform: "none",
              }}
              onClick={() => closemodalform()}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Modal>
      <Grid item xs={2}>
        <Badge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={<CameraAlt />}
        >
          <Avatar
            alt="service1"
            src={img}
            sx={{ width: "70px", height: "70px" }}
          />
        </Badge>
        <br />
        <br />
        <Typography>{title}</Typography>
      </Grid>
      {sucesion ? (
        <Grid item container xs={10} justifyContent="center" direction="column">
          <Grid item>
            <div className={styles["form-title"]}>
              <Typography variant="h4">{title}</Typography>
            </div>
            <form onSubmit={handleSubmitF}>
              <StyledTextField
                required
                placeholder="Nombre Completo"
                name="name"
                id="name"
                value={formValue.name}
                onChange={onFormFieldChanges}
              />
              <br />
              <br />

              <StyledTextField
                required
                type={"date"}
                placeholder="Fecha de nacimiento"
                name="birth"
                id="birth"
                value={formValue.birth}
                onChange={onFormFieldChanges}
              />
              <br />
              <FormControl component="fieldset">
                <FormLabel component="legend">Sexo</FormLabel>
                <RadioGroup
                  row
                  aria-label="genre"
                  defaultValue="null"
                  name="genre"
                  id="genre"
                  value={formValue.genre}
                  onChange={onFormFieldChanges}
                >
                  <FormControlLabel
                    value="Mujer"
                    control={<Radio color="primary" />}
                    label="Mujer"
                  />
                  <FormControlLabel
                    value="Hombre"
                    control={<Radio color="primary" />}
                    label="Hombre"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              <br />
              <StyledTextField
                required
                placeholder="Curp"
                name="curp"
                id="curp"
                value={formValue.curp}
                onChange={onFormFieldChanges}
              />
              <br />
              <br />
              <StyledTextField
                required
                placeholder="RFC"
                name="rfc"
                id="rfc"
                value={formValue.rfc}
                onChange={onFormFieldChanges}
              />
              <br />
              <br />
              <StyledTextField
                required
                placeholder="Domicilio"
                name="direction"
                id="direction"
                value={formValue.direction}
                onChange={onFormFieldChanges}
              />
              <br />
              <br />
              <StyledTextField
                required
                placeholder="Estado civil"
                name="marital"
                id="marital"
                value={formValue.marital}
                onChange={onFormFieldChanges}
              />
              <br />
              <br />
              <Grid container justifyContent="center" item direction="row">
                <Grid item>
                  <Button
                    sx={{
                      marginRight: "150px",
                      bgcolor: "#31A354",
                      color: "white",
                      borderRadius: "10px",
                      width: "130px",
                      height: "37px",
                    }}
                    type="submit"
                  >
                    Finalizar
                  </Button>
                  <Button
                    className={styles["button-form-select"]}
                    sx={{
                      bgcolor: "#31A354",
                      color: "white",
                      borderRadius: "10px",
                      width: "130px",
                      height: "37px",
                    }}
                    onClick={() => setSucesion(false)}
                  >
                    Sucesion
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            direction="column"
          >
            <Grid item>
              <div className={styles["form-title"]}>
                <Typography variant="h4">SUCESIÓN</Typography>
              </div>
              <form onSubmit={handleSubmitF}>
                <StyledTextField3
                  required
                  onChange={onFormFieldChanges}
                  placeholder="Nombre Completo"
                  name="name"
                  id="name"
                  value={formValue.name}
                />
                <br />
                <br />

                <StyledTextField3
                  required
                  onChange={onFormFieldChanges}
                  type={"date"}
                  placeholder="Fecha de nacimiento"
                  name="birth"
                  id="birth"
                  value={formValue.birth}
                />
                <br />
                <FormControl component="fieldset">
                  <FormLabel component="legend">Sexo</FormLabel>
                  <RadioGroup
                    row
                    aria-label="Genre"
                    defaultValue="null"
                    name="genre"
                    id="genre"
                    value={formValue.genre}
                    onChange={onFormFieldChanges}
                  >
                    <FormControlLabel
                      value="Mujer"
                      control={<Radio color="primary" />}
                      label="Mujer"
                    />
                    <FormControlLabel
                      value="Hombre"
                      control={<Radio color="primary" />}
                      label="Hombre"
                    />
                  </RadioGroup>
                </FormControl>
                <br />
                <br />
                <StyledTextField3
                  required
                  placeholder="Curp"
                  name="curp"
                  id="curp"
                  value={formValue.curp}
                  onChange={onFormFieldChanges}
                />
                <br />
                <br />
                <StyledTextField3
                  required
                  placeholder="RFC"
                  name="rfc"
                  id="rfc"
                  value={formValue.rfc}
                  onChange={onFormFieldChanges}
                />
                <br />
                <br />
                <StyledTextField3
                  required
                  placeholder="Domicilio"
                  name="direction"
                  id="direction"
                  value={formValue.direction}
                  onChange={onFormFieldChanges}
                />
                <br />
                <br />
                <StyledTextField3
                  required
                  placeholder="Estado civil"
                  name="marital"
                  id="marital"
                  value={formValue.marital}
                  onChange={onFormFieldChanges}
                />
                <br />
                <br />
                <Grid container justifyContent="center" item direction="row">
                  <Grid item>
                    <Button
                      sx={{
                        marginRight: "100px",
                        bgcolor: "#31A354",
                        color: "white",
                        borderRadius: "10px",
                        width: "130px",
                        height: "37px",
                      }}
                      type="submit"
                      className={styles["button-form-select"]}
                      onClick={closeform}
                    >
                      Finalizar
                    </Button>
                    <Button
                      sx={{
                        bgcolor: "#31A354",
                        color: "white",
                        borderRadius: "10px",
                        width: "130px",
                        height: "37px",
                      }}
                      className={styles["button-form-select"]}
                      onClick={() => setSucesion(true)}
                    >
                      Atras
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={4}
            justifyContent="center"
            direction="column"
          >
            <Grid item>
              <div className={styles["form-title"]}>
                <Typography sx={{mr: "50px"}} variant="subtitle1">Condiciones</Typography>
              </div>
              <br />
              <Typography sx={{color: "black"}}>Educación</Typography>
              <hr className={styles["form-line"]} />
              <Grid container justifyContent="center" item direction="row">
                <Typography sx={{color: "black"}}>Licenciatura</Typography> &nbsp;&nbsp;
                <CheckCircle className={styles["icon-check"]} />
              </Grid>
              <Grid container justifyContent="center" item direction="row">
                <Typography sx={{color: "black"}}>Maestria</Typography> &nbsp;&nbsp;
                <CheckCircle className={styles["icon-check"]} />
              </Grid>
              <br />
              <Typography sx={{color: "black"}}>Familia</Typography>
              <hr className={styles["form-line"]} />
              <Grid container justifyContent="center" item direction="row">
                <Typography sx={{color: "black"}}>Prueba de paternidad</Typography> &nbsp;&nbsp;
                <CheckCircle className={styles["icon-check"]} />
              </Grid>
              <Grid container justifyContent="center" item direction="row">
                <Typography sx={{color: "black"}}>Casa</Typography> &nbsp;&nbsp;
                <CheckCircle className={styles["icon-check"]} />
              </Grid>
              <Grid container justifyContent="center" item direction="row">
                <Typography sx={{color: "black"}}>Tener un hijo</Typography> &nbsp;&nbsp;
                <CheckCircle className={styles["icon-check"]} />
              </Grid>
              <br />
              <Typography sx={{color: "black"}}>Patrimonio</Typography>
              <hr className={styles["form-line"]} />
              <Grid container justifyContent="center" item direction="row">
                <Typography sx={{color: "black"}}>Tener $1,000,000,000</Typography> &nbsp;&nbsp;
                <CheckCircle className={styles["icon-check"]} />
              </Grid>
              <br />
              <Typography sx={{color: "black"}}  >Otra</Typography>
              <hr className={styles["form-line"]} />
              <Grid container justifyContent="center" item direction="row">
                <StyledTextField2 />
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
