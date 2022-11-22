import NextLink from "next/link";
import {
  AttachMoneyOutlined,
  FileOpenOutlined,
  FlagCircleOutlined,
  HouseOutlined,
} from "@mui/icons-material";
import { Box, Card, Grid, IconButton, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import { MainLayout } from "../components/Layout";

interface IOption {
  title: string;
  icon: JSX.Element;
  path: "/patrimony" | "/testament" | "/goals" | "/savings";
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
    path: "/savings",
    title: "Ahorros",
    icon: (
      <AttachMoneyOutlined
        fontSize="large"
        sx={{ color: "black", fontSize: 120 }}
      />
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
        <Grid container spacing={2} sx={{ maxWidth: 1300 }}>
          {OPTIONS.map((item) => (
            <Grid key={item.path} item xs={3}>
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
                    <IconButton>{item.icon}</IconButton>
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
