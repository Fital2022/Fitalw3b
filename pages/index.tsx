import NextLink from "next/link";
import { AttachMoneyOutlined, FileOpenOutlined, FlagCircleOutlined, HouseOutlined, SearchOffOutlined } from "@mui/icons-material";
import { Box, Card, Grid, IconButton, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import { ActionsLayout, MainLayout } from "../components/Layout";
import { SimpleCard } from "../components/Ui/SimpleCard";

interface IOption {
  title: string;
  icon: JSX.Element;
  path: '/patrimony' | '/testament' | '/goals' | '/savings';
}

const OPTIONS: IOption[] = [
  {
    path: '/patrimony',
    title: "Patrimonio",
    icon: (
      <HouseOutlined fontSize="large" sx={{ color: "black", fontSize: 200 }} />
    ),
  },
  {
    path: '/testament',
    title: "Testamento Digital",
    icon: (
      <FileOpenOutlined fontSize="large" sx={{ color: "black", fontSize: 200 }} />
    ),
  },
  {
    path: '/goals',
    title: "Metas",
    icon: (
      <FlagCircleOutlined fontSize="large" sx={{ color: "black", fontSize: 200 }} />
    ),
  },
  {
    path: '/savings',
    title: "Ahorros",
    icon: (
      <AttachMoneyOutlined fontSize="large" sx={{ color: "black", fontSize: 200 }} />
    ),
  },
];

const Home: NextPage = () => {
  return (
    <MainLayout title={"Fital"} pageDescription={"Página principal"}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid container spacing={2} sx={{ maxWidth: 1300 }}>
          {OPTIONS.map((item) => (
            <Grid item xs={3}>
              <Card
                key={item.title}
                sx={{
                  height: 300,
                  width: 300,
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
                <Typography variant="h4" sx={{ textAlign: "center" }}>
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

export default Home;
