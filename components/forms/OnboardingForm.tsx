import { Box, Button, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import { useFilePicker } from "use-file-picker";
import { useEffect } from "react";

export const OnboardingForm = () => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "32px",
        bgcolor: "rgba(255,255,255, 0.1)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "625px",
        height: "736px",
      }}
    >
      <Box mb={7} />
      <FileField description="Sube tu INE por ambos lados" />
      <FileField description="Sube tu COMPROBANTE DE DOMICILIO (agua, teléfono fijo, gas, predial, internet, luz)" />
      <FileField description="Sube tu CURP" />
      <FileField description="Sube tu RFC" />
      <FileField description="Sube tu ACTA DE MATRIMONIO (se requiere solo si es por bienes mancomunados)" />
      <Button sx={{ bgcolor: "#31A354", color: "white", width: "100px" }}>
        Listo
      </Button>
    </Box>
  );
};

interface FileFieldProps {
  description: string;
}
const FileField: FC<FileFieldProps> = ({ description }) => {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: [".png", ".jpg", ".jpeg"],
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
        <Typography
          sx={{ color: "white", fontSize: "16px", maxWidth: "400px" }}
        >
          {description}
        </Typography>
        <Button
          onClick={() => openFileSelector()}
          sx={{
            justifySelf: "end",
            textTransform: "none",
            fontSize: "16px",
            bgcolor: "#F4F4F4",
            color: "#6A6A6A",
            py: 0,
          }}
        >
          SeleccionarArchivo
        </Button>
      </Box>
      <Divider sx={{ bgcolor: "white", mb: 3 }} />
    </>
  );
};
