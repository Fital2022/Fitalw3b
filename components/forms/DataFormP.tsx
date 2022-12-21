import { CloseOutlined, CameraAlt } from "@mui/icons-material";
import {
  Modal,
  Box,
  IconButton,
  Typography,
  Button,
  Grid,
  Badge,
  Avatar,
} from "@mui/material";
import styles from "../../styles/form.module.css";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  addBeneficiaryProperties,
  addRight,
  addid,
  setShowForm2,
} from "../../store";
import {
  IEmpire,
  IRight,
  IRightBeneficiary,
} from "../../interfaces/empireInterfaces";
import { useFilePicker } from "use-file-picker";

interface Props {
  premium: boolean;
  iempire: IEmpire;
  title: IRight["type"];
  img: string;
  user: string;
}

export const DataFormP: FC<Props> = ({
  premium,
  iempire,
  title,
  img,
  user,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  let idvalue = useSelector((state: RootState) => state.form.currentid);
  const [showPatriModalD, setShowPatriModalD] = useState<boolean>(false);
  const [formValue, setformValue] = useState({
    name: "",
  });
  const { name } = formValue;
  const closemodalform = () => {
    dispatch(setShowForm2(false));
    setShowPatriModalD(false);
  };
  const closeform = () => {
    dispatch(setShowForm2(false));
  };
  const onFormFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmitF = async (event: any) => {
    event.preventDefault();
    dispatch(addid());
    console.log(idvalue);
    let dataright: IRight = {
      name: name,
      value: 100000,
      type: title,
      id: idvalue,
      img: img,
    };
    let propertie: IRightBeneficiary = {
      idRight: idvalue,
      percentage: 0,
    };
    console.log(dataright);
    dispatch(addRight(dataright));
    dispatch(addBeneficiaryProperties(propertie));
    // dispatch(setShowForm2(false));
    setShowPatriModalD(true);
  };

  return (
    <>
      <Modal
        open={showPatriModalD}
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
          <IconButton
            sx={{
              bgcolor: "white",
              borderRadius: "100%",
              border: "1px solid #888",
              position: "absolute",
              top: "-40px",
              right: "-40px",
            }}
            onClick={() => closemodalform()}
          >
            <CloseOutlined />
          </IconButton>
          <Typography
            sx={{
              color: "#707070",
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Se ha agregado {name} a {user}
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
        <Typography sx={{ color: "#6A6A6A" }}>{title}</Typography>
      </Grid>
      <Grid item container xs={10} justifyContent="center" direction="column">
        {(() => {
          switch (title) {
            case "Cuenta Bancaria":
              return (
                <>
                  <Grid item>
                    <div className={styles["form-title"]}>
                      <Typography variant="h4">{title}</Typography>
                    </div>
                    <br />
                    <form onSubmit={handleSubmitF}>
                      {/* <FileField description="Escritura"/> */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 3,
                        }}
                      >
                        <input
                          className={styles["form-input-file"]}
                          required
                          placeholder="Banco"
                          name="name"
                          value={name}
                          onChange={onFormFieldChanges}
                        />
                      </Box>

                      <FileField description="Tipo (tarjeta de debito)" />
                      <FileField description="Tipo (tarjeta de credito)" />
                      <FileField description="Monto" />
                      <Grid
                        container
                        justifyContent="right"
                        item
                        direction="row"
                      >
                        <Grid item>
                          {/* <Button
                            sx={{
                              marginRight: "100px",
                              bgcolor: "#31A354",
                              color: "white",
                              borderRadius: "10px",
                              width: "130px",
                              height: "37px",
                            }}
                            onClick={closeform}
                            className={styles["button-form-select"]}
                          >
                            Cancelar
                          </Button> */}
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
                          >
                            Finalizar
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </>
              );
            case "Wallet 1" || "Wallet 2":
              return (
                <>
                  <Grid item>
                    <div className={styles["form-title"]}>
                      <Typography variant="h4">{title}</Typography>
                    </div>
                    <br />
                    <form onSubmit={handleSubmitF}>
                      {/* <FileField description="Escritura"/> */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 3,
                        }}
                      >
                        <input
                          className={styles["form-input-file"]}
                          required
                          placeholder="Coin(tipo de moneda)"
                          name="name"
                          value={name}
                          onChange={onFormFieldChanges}
                        />
                      </Box>

                      <FileField description="Monto" />
                      <FileField description="Rendimiento" />
                      <Grid
                        container
                        justifyContent="right"
                        item
                        direction="row"
                      >
                        <Grid item>
                          {/* <Button
                            sx={{
                              marginRight: "100px",
                              bgcolor: "#31A354",
                              color: "white",
                              borderRadius: "10px",
                              width: "130px",
                              height: "37px",
                            }}
                            onClick={closeform}
                            className={styles["button-form-select"]}
                          >
                            Cancelar
                          </Button> */}
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
                          >
                            Finalizar
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </>
              );

            case "Arte":
              return (
                <>
                  <Grid item>
                    <div className={styles["form-title"]}>
                      <Typography variant="h4">{title}</Typography>
                    </div>
                    <br />
                    <form onSubmit={handleSubmitF}>
                      {/* <FileField description="Escritura"/> */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 3,
                        }}
                      >
                        <input
                          className={styles["form-input-file"]}
                          required
                          placeholder="Certificado"
                          name="name"
                          value={name}
                          onChange={onFormFieldChanges}
                        />
                      </Box>

                      <FileField description="Tipo de arte" />
                      <FileField description="Valor real" />
                      <FileField description="Valor Comercial" />
                      <Grid
                        container
                        justifyContent="right"
                        item
                        direction="row"
                      >
                        <Grid item>
                          {/* <Button
                            sx={{
                              marginRight: "100px",
                              bgcolor: "#31A354",
                              color: "white",
                              borderRadius: "10px",
                              width: "130px",
                              height: "37px",
                            }}
                            onClick={closeform}
                            className={styles["button-form-select"]}
                          >
                            Cancelar
                          </Button> */}
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
                          >
                            Finalizar
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </>
              );
            case "Inversiones":
              return (
                <>
                  <Grid item>
                    <div className={styles["form-title"]}>
                      <Typography variant="h4">{title}</Typography>
                    </div>
                    <br />
                    <form onSubmit={handleSubmitF}>
                      {/* <FileField description="Escritura"/> */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 3,
                        }}
                      >
                        <input
                          className={styles["form-input-file"]}
                          required
                          placeholder="Banco"
                          name="name"
                          value={name}
                          onChange={onFormFieldChanges}
                        />
                      </Box>

                      <FileField description="Monto" />
                      <FileField description="Interes" />
                      <FileField description="Rendimiento Total" />
                      <Grid
                        container
                        justifyContent="right"
                        item
                        direction="row"
                      >
                        <Grid item>
                          {/* <Button
                            sx={{
                              marginRight: "100px",
                              bgcolor: "#31A354",
                              color: "white",
                              borderRadius: "10px",
                              width: "130px",
                              height: "37px",
                            }}
                            onClick={closeform}
                            className={styles["button-form-select"]}
                          >
                            Cancelar
                          </Button> */}
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
                          >
                            Finalizar
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </>
              );
            case "Bitcoin":
              return (
                <>
                  <Grid item>
                    <div className={styles["form-title"]}>
                      <Typography variant="h4">{title}</Typography>
                    </div>
                    <br />
                    <form onSubmit={handleSubmitF}>
                      {/* <FileField description="Escritura"/> */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 3,
                        }}
                      >
                        <input
                          className={styles["form-input-file"]}
                          required
                          placeholder="Banco"
                          name="name"
                          value={name}
                          onChange={onFormFieldChanges}
                        />
                      </Box>

                      <FileField description="Coin(tipo de moneda)" />
                      <FileField description="Monto" />
                      <FileField description="Rendimiento" />
                      <Grid
                        container
                        justifyContent="right"
                        item
                        direction="row"
                      >
                        <Grid item>
                          {/* <Button
                            sx={{
                              marginRight: "100px",
                              bgcolor: "#31A354",
                              color: "white",
                              borderRadius: "10px",
                              width: "130px",
                              height: "37px",
                            }}
                            onClick={closeform}
                            className={styles["button-form-select"]}
                          >
                            Cancelar
                          </Button> */}
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
                          >
                            Finalizar
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </>
              );
            default:
              return (
                <>
                  <Grid item>
                    <div className={styles["form-title"]}>
                      <Typography variant="h4">{title}</Typography>
                    </div>
                    <br />
                    <form onSubmit={handleSubmitF}>
                      {/* <FileField description="Escritura"/> */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 3,
                        }}
                      >
                        <input
                          className={styles["form-input-file"]}
                          required
                          placeholder="Escritura"
                          name="name"
                          value={name}
                          onChange={onFormFieldChanges}
                        />
                      </Box>

                      <FileField description="Ultima boleta de pago de predial y de agua*" />
                      <FileField description="Escritura de régimen de condominio *" />
                      <FileField description="Constancia de no adeudo de cuotas de mantenimiento *" />
                      <FileField description="Valor de referencia *" />
                      <FileField description="Ubicación *" />
                      <Grid
                        container
                        justifyContent="right"
                        item
                        direction="row"
                      >
                        <Grid item>
                          {/* <Button
                            sx={{
                              marginRight: "100px",
                              bgcolor: "#31A354",
                              color: "white",
                              borderRadius: "10px",
                              width: "130px",
                              height: "37px",
                            }}
                            onClick={closeform}
                            className={styles["button-form-select"]}
                          >
                            Cancelar
                          </Button> */}
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
                          >
                            Finalizar
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </>
              );
          }
        })()}
      </Grid>
    </>
  );
};

interface FileFieldProps {
  description: string;
}
const FileField: FC<FileFieldProps> = ({ description }) => {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: ".pdf",
  });

  useEffect(() => {
    console.log(filesContent);
  }, [filesContent]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <input
          className={styles["form-input-file"]}
          disabled
          required
          readOnly
          onClick={() => openFileSelector()}
          value={description}
        ></input>
      </Box>
    </>
  );
};
