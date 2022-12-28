import NextLink from "next/link";
import {
  AttachMoneyOutlined,
  FileOpenOutlined,
  FlagCircleOutlined,
  HolidayVillage,
  HouseOutlined,
} from "@mui/icons-material";
import { Box, Card, Grid, IconButton, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import { MainLayout } from "../components/Layout";

interface IOption {
  title: string;
  icon: JSX.Element;
  path: "/patrimony" | "/testament" | "/goals" | "/empire";
}

const OPTIONS: IOption[] = [
  {
    path: "/patrimony",
    title: "Patrimonio",
    icon: (
      <HouseOutlined fontSize="large" sx={{ color: "black", fontSize: 120 }} />
    ),
  },
  {
    path: "/testament",
    title: "Testamento Digital",
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
    icon: (
      <HolidayVillage fontSize="large" sx={{ color: "black", fontSize: 120 }} />
    ),
  },
];

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
              xs={6}
              md={3}
              display="flex"
              justifyContent="center"
              sx={{ mb: { xs: 0, sm: 4, md: 0 }, p: 0 }}
            >
              <Card
                key={item.title}
                sx={{
                  height: { xs: "170px", md: "190px" },
                  width: { xs: "170px", md: "190px" },
                  justifyContent: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  boxShadow: "none",
                  border: "1px solid #888",
                  borderRadius: "20px",
                }}
              >
                <NextLink href={item.path} passHref>
                  <Link>
                    <IconButton>{item.icon}</IconButton>
                  </Link>
                </NextLink>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "14px", md: "20px" },
                  }}
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
