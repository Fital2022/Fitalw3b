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

export const SideBar = () => {
  return (
    <Box
      sx={{
        padding: "10px",
        position: "fixed",
        left: 0,
        height: "100vh",
        backgroundColor: "steelblue",
        display: "flex",
        flexDirection: "column",
        width: "90px",
        alignItems: "center",
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <CardMedia
            image="icons/Pagina-Web-logo.png"
            component="img"
            alt="Fital Logo"
            sx={{ width: "70px", height: "70px", marginBottom: "100px" }}
          />
        </Link>
      </NextLink>
      {/* <Box flex={1} /> */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <NextLink href="/" passHref>
          <Link>
            <IconButton>
              <HouseOutlined fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </NextLink>
        <Typography variant="caption" sx={{ color: "white" }}>
          Patrimonio
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <NextLink href="/" passHref>
          <Link>
            <IconButton>
              <FileOpenOutlined fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </NextLink>
        <Typography variant="caption" sx={{ color: "white" }}>
          Testamento
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <NextLink href="/" passHref>
          <Link>
            <IconButton>
              <FlagCircleOutlined fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </NextLink>
        <Typography variant="caption" sx={{ color: "white" }}>
          Metas
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <NextLink href="/" passHref>
          <Link>
            <IconButton>
              <AttachMoneyOutlined fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </NextLink>
        <Typography variant="caption" sx={{ color: "white" }}>
          Ahorros
        </Typography>
      </Box>
      {/* <Box flex={1} /> */}
    </Box>
  );
};
