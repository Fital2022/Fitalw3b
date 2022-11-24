import NextLink from "next/link";
import {
  HouseOutlined,
  FileOpenOutlined,
  FlagCircleOutlined,
  AttachMoneyOutlined,
  HolidayVillage,
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
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <NextLink href="/patrimony" passHref>
            <Link>
              <IconButton
                sx={{
                  bgcolor: route == "/patrimony" ? "white" : "transparent",
                }}
              >
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
              <IconButton
                sx={{
                  bgcolor: route == "/testament" ? "white" : "transparent",
                }}
              >
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
              <IconButton
                sx={{ bgcolor: route == "/goals" ? "white" : "transparent" }}
              >
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
        {/* <Box
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
        </Box> */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <NextLink href="/empire" passHref>
            <Link>
              <IconButton
                sx={{ bgcolor: route == "/empire" ? "white" : "transparent" }}
              >
                <HolidayVillage
                  fontSize="large"
                  sx={{ color: route == "/empire" ? "black" : "white" }}
                />
              </IconButton>
            </Link>
          </NextLink>
          <Typography variant="caption" sx={{ color: "white" }}>
            Imperio
          </Typography>
        </Box>
      </Box>
      {/* <Box flex={1} /> */}
    </Box>
  );
};
