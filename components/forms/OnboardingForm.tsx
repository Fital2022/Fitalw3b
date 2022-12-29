import { Box, Button, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import { useFilePicker } from "use-file-picker";
import { useEffect } from "react";

export const OnboardingForm = () => {
  return (
    <Box
      sx={{
        px: 3,
        py: { xs: 4, sm: 8, lg: 4, xl: 10 },
        borderRadius: "32px",
        bgcolor: "rgba(255,255,255, 0.1)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <FileField description="Sube tu INE por ambos lados" />
      <FileField description="Sube tu COMPROBANTE DE DOMICILIO (agua, teléfono fijo, gas, predial, internet, luz)" />
      <FileField description="Sube tu CURP" />
      <FileField description="Sube tu RFC" />
      <FileField description="Sube tu ACTA DE MATRIMONIO (se requiere solo si es por bienes mancomunados)" />
      <Button
        sx={{
          bgcolor: "#31A354",
          color: "white",
          width: { xs: "100%", sm: "100px" },
        }}
      >
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

  // useEffect(() => {
  //   console.log(filesContent);
  // }, [filesContent]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          mb: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "11px", sm: "16px", md: "14px", xl: "16px" },
            maxWidth: "300px",
            // mb: { xs: 2, sm: 0 },
            alignSelf: { xs: "flex-start", md: "none" },
          }}
        >
          {description}
        </Typography>
        <Button
          onClick={() => openFileSelector()}
          sx={{
            justifySelf: "end",
            textTransform: "none",
            fontSize: { xs: "11px", sm: "16px", md: "14px", xl: "16px" },
            bgcolor: "#F4F4F4",
            color: "#6A6A6A",
            py: 0,
            alignSelf: { xs: "flex-end", sm: "none" },
            mt: { xs: 1, sm: 0 },
          }}
        >
          SeleccionarArchivo
        </Button>
      </Box>
      <Divider sx={{ bgcolor: "white", mb: { xs: 2, sm: 3 } }} />
    </>
  );
};
