import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { ActionsLayout } from "../../components/Layout";
import { ModalView } from "../../components/modal";

import styles from "../../styles/Things.module.css";

const ModalConfetti = () => {
  return (
    <ActionsLayout
      title={"Fital - Modal y Confetti"}
      pageDescription={"Pruebas"}
    >
      <ModalView confetti>
        {(handleClose, pauseAnimation) => (
          <>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, color: "black" }}
            >
              Este es una prueba del modal en Modal-confetti en el proyecto Fital
            </Typography>
            <br />
            <Box
              component="span"
              sx={{ p: 2 }}
              position="relative"
              style={{
                top: "50%",
                left: "24%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Button
                className={styles.buttonGreen}
                variant="contained"
                color="primary"
              >
                Regístrate ahora
              </Button>
            </Box>
          </>
        )}
      </ModalView>
    </ActionsLayout>
  );
};

export default ModalConfetti;
