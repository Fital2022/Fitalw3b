import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import styles from "../../styles/Things.module.css";
import Image from "next/image";

import ReactCanvasConfetti from "react-canvas-confetti";

function randomInRange(min: any, max: any) {
  return Math.random() * (max - min) + min;
}

function getAnimationSettings(originXA: any, originXB: any) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

interface Props {
  text: string;
}

// function Fireworks() {

//   return (
//     <>
//       <div>
//         <button onClick={startAnimation}>Start</button>
//         <button onClick={pauseAnimation}>Pause</button>
//         <button onClick={stopAnimation}>Stop</button>
//       </div>
//       <ReactCanvasConfetti
//         refConfetti={getInstance}
//         style={{
//           position: "fixed",
//           pointerEvents: "none",
//           width: "100%",
//           height: "100%",
//           top: 0,
//           left: 0,
//         }}
//       />
//     </>
//   );
// }

export const ModalView: React.FC<PropsWithChildren<Props>> = ({ text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const refAnimationInstance = useRef<any>(null);
  const [intervalId, setIntervalId] = useState<any | null>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      <Button
        onClick={function (event) {
          handleOpen();
          startAnimation();
        }}
      >
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={function (event) {
          handleClose();
          pauseAnimation();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "black" }}
          >
            {text}
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
          <span className={styles.closeModal}>
            <Image
              alt="Icon Info Member"
              src="/icons/cancel.png"
              width={30}
              height={30}
              onClick={function (event) {
                handleClose();
                pauseAnimation();
              }}
            />
          </span>
        </Box>
      </Modal>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
};

export default ModalView;
