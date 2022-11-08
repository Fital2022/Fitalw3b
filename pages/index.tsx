import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { MainLayout } from "../components/Layout/MainLayout";
import NextLink from "next/link";

const Home = () => {
  return (
    <MainLayout
      title={"Fital | Menú principal"}
      pageDescription={"Menú principal"}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid container spacing={2} sx={{ maxWidth: 1300, justifyContent: 'center' }}>
          <Grid item xs={3}>
            <Card
              sx={{
                height: '190px',
                width: '190px',
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <NextLink href="/main" passHref>
                <Link>
                  <IconButton>
                    <Add sx={{ fontSize: 120, color: "black" }} />
                  </IconButton>
                </Link>
              </NextLink>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              sx={{
                height: '190px',
                width: '190px',
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <NextLink href="/main" passHref>
                <Link sx={{textDecoration: 'none'}} >
                  <Typography sx={{color: 'black', fontSize: 40}} >Imperio</Typography>
                </Link>
              </NextLink>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Home;
