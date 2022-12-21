import styled from '@emotion/styled';
import styles from "../../styles/form.module.css";
import { CameraAlt } from '@mui/icons-material';
import { TextField, Grid, Badge, Avatar, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch, setShowForm2 } from '../../store';


const StyledTextField = styled(TextField)`
label.Mui-focused{
    width: 446px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #707070;
}
.MuiOutlinedInput-root {
    width: 446px;
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

interface Props {
    premium: boolean;
  }


export const PremiumFormP: FC<Props> = ({premium}) => {
    const dispatch = useDispatch<AppDispatch>();
    const closeform = () => {
        dispatch(setShowForm2(false));
      };
  return (
    <>
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
                            src="/images/avatar/casa1.jpeg"
                            sx={{ width: "70px", height: "70px" }}
                          />
                        </Badge>
                        <br />
                        <br />
                        <Typography>Persona</Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        xs={10}
                        justifyContent="center"
                        direction="column"
                      >
                        <div className={styles["form-title"]}>
                          <Typography variant="h4">
                            Sube tus documentos
                          </Typography>
                        </div>
                        <br />
                        <br />
                        <br />
                        <FormControl>
                          <FormLabel>Curp</FormLabel>
                          <StyledTextField
                            required
                            type="file"
                            placeholder="Curp"
                            disabled={!premium}
                          />
                        </FormControl>

                        <FormControl>
                          <FormLabel>RFC</FormLabel>
                          <StyledTextField
                            required
                            type="file"
                            placeholder="RFC"
                            disabled={!premium}
                          />
                        </FormControl>
                        <FormLabel>Comprobante de domicilio</FormLabel>
                        <StyledTextField
                          required
                          type="file"
                          placeholder="Comprobante"
                          disabled={!premium}
                        />

                        <FormControl component="fieldset">
                          <FormLabel component="legend">Estado Civil</FormLabel>
                          <RadioGroup
                            row
                            aria-label="Genre"
                            defaultValue="null"
                          >
                            <FormControlLabel
                              value="Casado"
                              control={<Radio color="primary" />}
                              label="Casado"
                              disabled={!premium}
                            />
                            <FormControlLabel
                              value="Soltero"
                              control={<Radio color="primary" />}
                              label="Soltero"
                              disabled={!premium}
                            />
                            <FormControlLabel
                              value="Divorciado"
                              control={<Radio color="primary" />}
                              label="Divorciado"
                              disabled={!premium}
                            />
                            <FormControlLabel
                              value="Viudo"
                              control={<Radio color="primary" />}
                              label="Viudo"
                              disabled={!premium}
                            />
                          </RadioGroup>
                        </FormControl>
                        <StyledTextField
                          required
                          type="file"
                          placeholder="Curp"
                          disabled={!premium}
                        />
                        <br />
                        <br />
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-end"
                        >
                          <Button
                            sx={{
                              marginRight: "80px",
                              bgcolor: "#31A354",
                              color: "white",
                              borderRadius: "10px",
                              width: "130px",
                              height: "37px",
                            }}
                            className={styles["button-form-select"]}
                            onClick={closeform}
                          >
                            Finalizar
                          </Button>
                        </Grid>
                      </Grid>
    </>
  )
}
