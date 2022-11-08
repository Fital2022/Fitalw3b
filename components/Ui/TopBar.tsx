import NextLink from "next/link";
import {
  HouseOutlined,
  FileOpenOutlined,
  FlagCircleOutlined,
  AttachMoneyOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";

export const TopBar = () => {
  return (
    <Box
      sx={{
        py: "10px",
        px: "40px",
        position: "fixed",
        top: 0,
        height: "90px",
        backgroundColor: "steelblue",
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <CardMedia
            image="icons/Pagina-Web-logo.png"
            component="img"
            alt="Fital Logo"
            sx={{ width: "70px", height: "70px" }}
          />
        </Link>
      </NextLink>
      <Typography variant="h4" component="h4" sx={{ color: "white" }}>
        Hola Desconocido
      </Typography>
    </Box>
  );
};