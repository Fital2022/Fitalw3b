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
  Card,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface IOption {
  path: string;
  title: string;
  icon: (styles: SxProps) => JSX.Element;
}
const OPTIONS: IOption[] = [
  {
    path: "/patrimony",
    title: "Patrimonio",
    icon(styles: SxProps = {}) {
      return (
        <HouseOutlined
          fontSize="large"
          sx={{ color: "white", fontSize: 75, ...styles }}
        />
      );
    },
  },
  {
    path: "/testament",
    title: "Testamento Digital",
    icon(styles: SxProps = {}) {
      return (
        <FileOpenOutlined
          fontSize="large"
          sx={{ color: "white", fontSize: 75, ...styles }}
        />
      );
    },
  },
  {
    path: "/goals",
    title: "Metas",
    icon(styles: SxProps = {}) {
      return (
        <FlagCircleOutlined
          fontSize="large"
          sx={{ color: "white", fontSize: 75, ...styles }}
        />
      );
    },
  },
  {
    path: "/empire",
    title: "Imperio",
    icon(styles: SxProps = {}) {
      return (
        <HolidayVillage
          fontSize="large"
          sx={{ color: "white", fontSize: 75, ...styles }}
        />
      );
    },
  },
];

export const SideBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { route } = useRouter();
  const [selectedPosition, setSelectedPosition] = useState<
    SxProps<Theme> | undefined
  >();
  const { name } = useSelector(
    (state: RootState) => state.empire.selectedEmpire
  );

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
        height: { xs: !showMenu ? "90px" : "100%", md: "100vh" },
        // backgroundColor: "steelblue",
        background: { xs: "var(--top-gradient)", md: "var(--side-gradient)" },
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "90px" },
        // alignItems: "center",
        top: 0,
        zIndex: 10,
        transition: "all 0.5s ease",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          alignItems: "center",
          height: "90px",
        }}
      >
        <NextLink href="/" passHref>
          <Link>
            <CardMedia
              image="icons/Pagina-Web-logo.png"
              component="img"
              alt="Fital Logo"
              sx={{
                width: { xs: "55px", md: "70px" },
                height: { xs: "55px", md: "70px" },
                marginBottom: { xs: "0px", md: "100px" },
              }}
            />
          </Link>
        </NextLink>
        <Box
          sx={{ ml: { xs: 2, md: 4 }, display: { xs: "block", md: "none" } }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: { xs: "400", md: "600" },
            }}
          >
            ¡Buenos días Júan!
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: { xs: "400", md: "600" },
              display: { xs: "none", md: "block" },
            }}
          >
            Empecemos: {name}
          </Typography>
        </Box>
        <Box
          sx={{ position: "relative", display: { xs: "none", md: "block" } }}
        >
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
        <Box flex={1} />
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          {!showMenu ? (
            <MenuIcon sx={{ color: "white", fontSize: "35px" }} />
          ) : (
            <CloseIcon sx={{ color: "white", fontSize: "35px" }} />
          )}
        </IconButton>
        <CardMedia
          image="images/profile.png"
          sx={{
            width: "40px",
            height: "40px",
            display: { xs: "block", md: "none" },
          }}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          // bgcolor: "grey",
          height: showMenu ? "calc(100% - 90px)" : "0px",
          visibility: showMenu ? "visible" : "hidden",
          transition: "all 0.5s ease",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: { xs: "space-around", md: "space-between" },
            flexWrap: "wrap",
            transition: "all 0.3s ease",
            opacity: !showMenu ? 0 : 1,
            height: !showMenu ? "0px" : "auto",
            width: "100%",
          }}
        >
          {OPTIONS.map((item) => (
            <Card
              key={item.title}
              sx={{
                height: { xs: "130px", md: "190px" },
                width: { xs: "130px", md: "190px" },
                justifyContent: "center",
                display: "flex",
                flexWrap: "wrap",
                boxShadow: "none",
                border:
                  route == item.path ? "1px solid #1BD145" : "1px solid #fff",
                borderRadius: "20px",
                bgcolor: "transparent",
                mb: 5,
              }}
            >
              <NextLink href={item.path} passHref>
                <Link>
                  <IconButton>
                    {item.icon(
                      route == item.path
                        ? ({ color: "#1BD145" } as SxProps)
                        : {}
                    )}
                  </IconButton>
                </Link>
              </NextLink>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", md: "20px" },
                  color: route == item.path ? "#1BD145" : "white",
                }}
              >
                {item.title}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
