import NextLink from "next/link";
import {
  AttachMoneyOutlined,
  FileOpenOutlined,
  FlagCircleOutlined,
  HolidayVillage,
  HouseOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Link,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { MainLayout } from "../components/Layout";

interface IOption {
  title: string;
  icon: JSX.Element;
  tooltip: string;
  path: "/patrimony" | "/testament" | "/goals" | "/empire";
}

const OPTIONS: IOption[] = [
  {
    path: "/patrimony",
    title: "Patrimonio",
    tooltip: "Haz tu imperio",
    icon: (
      <HouseOutlined fontSize="large" sx={{ color: "black", fontSize: 120 }} />
    ),
  },
  {
    path: "/testament",
    title: "Testamento Digital",
    tooltip: "Realiza tu Testamento",
    icon: (
      <FileOpenOutlined
        fontSize="large"
        sx={{ color: "black", fontSize: 120 }}
      />
    ),
  },
  {
    path: "/goals",
    title: "Metas",
    tooltip: "Accede a tus metas",
    icon: (
      <FlagCircleOutlined
        fontSize="large"
        sx={{ color: "black", fontSize: 120 }}
      />
    ),
  },
  {
    path: "/empire",
    title: "Imperio",
    tooltip: "Ver tu imperio",
    icon: (
      <HolidayVillage fontSize="large" sx={{ color: "black", fontSize: 120 }} />
    ),
  },
];

const PurpleTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#8E4BA8",
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 20,
  },
}));

const MainMenu: NextPage = () => {
  return (
    <MainLayout title={"Fital"} pageDescription={"Página principal"}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", minHeight: "calc(100vh - 90px)" }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: { xs: "95%", md: 1300 },
          }}
        >
          {OPTIONS.map((item) => (
            <Grid
              key={item.path}
              item
              xs={12}
              sm={6}
              md={3}
              display="flex"
              justifyContent="center"
              sx={{ mb: { xs: 0, sm: 4, md: 0 }, p: 0 }}
            >
              <Card
                key={item.title}
                sx={{
                  height: "190px",
                  width: "190px",
                  justifyContent: "center",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <NextLink href={item.path} passHref>
                  <Link>
                    <PurpleTooltip
                      title={item.tooltip}
                      placement="top"
                      arrow
                      PopperProps={{
                        sx: {
                          "& .MuiTooltip-arrow": {
                            bottom: "0px !important",
                            "&::before": {
                              backgroundColor: "#8E4BA8",
                            },
                          },
                        },
                      }}
                    >
                      <IconButton>{item.icon}</IconButton>
                    </PurpleTooltip>
                  </Link>
                </NextLink>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center", fontSize: "20px" }}
                >
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default MainMenu;
