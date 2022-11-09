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
  SxProps,
  Theme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const SideBar = () => {
  const { route } = useRouter();
  const [selectedPosition, setSelectedPosition] = useState<
    SxProps<Theme> | undefined
  >();

  // useEffect(() => {
  //   if (route == "/patrimony") setSelectedPosition({ transform: 'translateY(-2px)' });
  //   if (route == "/testament") setSelectedPosition({ transform: 'translateY(30px)' });
  // }, [route]);

  return (
    <Box
      sx={{
        padding: "10px",
        position: "fixed",
        left: 0,
        height: "100vh",
        // backgroundColor: "steelblue",
        background: "var(--side-gradient)",
        display: "flex",
        flexDirection: "column",
        width: "90px",
        alignItems: "center",
        top: 0,
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
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "55px",
            height: "55px",
            background: "white",
            borderRadius: "50%",
            left: "5px",
            zIndex: -1,
            transition: "all 0.3s ease",
            top:
              route == "/patrimony"
                ? "-2px"
                : route == "/testament"
                ? "85px"
                : "-10px",
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <NextLink href="/patrimony" passHref>
            <Link>
              <IconButton>
                <HouseOutlined
                  fontSize="large"
                  sx={{ color: route == "/patrimony" ? "black" : "white" }}
                />
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
          <NextLink href="/testament" passHref>
            <Link>
              <IconButton>
                <FileOpenOutlined
                  fontSize="large"
                  sx={{ color: route == "/testament" ? "black" : "white" }}
                />
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
          <NextLink href="/goals" passHref>
            <Link>
              <IconButton>
                <FlagCircleOutlined
                  fontSize="large"
                  sx={{ color: route == "/goals" ? "black" : "white" }}
                />
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
          <NextLink href="/savings" passHref>
            <Link>
              <IconButton
                sx={{ bgcolor: route == "/savings" ? "white" : "transparent" }}
              >
                <AttachMoneyOutlined
                  fontSize="large"
                  sx={{ color: route == "/savings" ? "black" : "white" }}
                />
              </IconButton>
            </Link>
          </NextLink>
          <Typography variant="caption" sx={{ color: "white" }}>
            Ahorros
          </Typography>
        </Box>
      </Box>
      {/* <Box flex={1} /> */}
    </Box>
  );
};
