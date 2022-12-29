import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { SideBar } from "../Ui";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IEmpire } from "../../interfaces/empireInterfaces";
import { RootState } from "../../store";
import {
  HouseOutlined,
  FileOpenOutlined,
  FlagCircleOutlined,
  AttachMoneyOutlined,
  HolidayVillage,
} from "@mui/icons-material";

interface Props {
  title: string;
  pageDescription: string;
  imageForShare?: string;
}

export const ActionsLayout: FC<PropsWithChildren<Props>> = ({
  title,
  pageDescription,
  imageForShare,
  children,
}) => {
  const { route } = useRouter();
  const { name, type } =
    useSelector((state: RootState) => state.empire.selectedEmpire as IEmpire) ||
    {};

  const pageTacker = () => {
    switch (route) {
      case "/patrimony":
        return (
          <>
            <HouseOutlined sx={{ fontSize: "30px", color: "#7E7E7E", mr: 2 }} />
            <Typography sx={{ fontSize: "20px", color: "#7E7E7E" }}>
              Patrimonio
            </Typography>
          </>
        );

      case "/testament":
        return (
          <>
            <FileOpenOutlined
              sx={{ fontSize: "30px", color: "#7E7E7E", mr: 2 }}
            />
            <Typography sx={{ fontSize: "20px", color: "#7E7E7E" }}>
              Testamento
            </Typography>
          </>
        );
      case "/goals":
        return (
          <>
            <FlagCircleOutlined
              sx={{ fontSize: "30px", color: "#7E7E7E", mr: 2 }}
            />
            <Typography sx={{ fontSize: "20px", color: "#7E7E7E" }}>
              Metas
            </Typography>
          </>
        );
      case "/empire":
        return (
          <>
            <HolidayVillage
              sx={{ fontSize: "30px", color: "#7E7E7E", mr: 2 }}
            />
            <Typography sx={{ fontSize: "20px", color: "#7E7E7E" }}>
              Imperio
            </Typography>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageForShare && <meta name="og:image" content={imageForShare} />}
      </Head>
      <nav>
        <SideBar />
      </nav>
      <Box
        component="main"
        sx={{
          backgroundImage: 'url("backgrounds/bg-domi.jpg")',
          width: { xs: "100%", md: "calc(100vw - 90px)" },
          minHeight: "100vh",
          position: "relative",
          float: { xs: "none", md: "right" },
          mt: { xs: "90px", md: "0px" },
          pb: { xs: 0, md: 12 },
        }}
      >
        <Box sx={{ px: 3 }}>
          <Box
            sx={{
              borderBottom: { xs: "1px solid #7e7e7e", md: "1px solid #000" },
              display: "flex",
              pt: { xs: 1, md: 2 },
              pb: { xs: 1, md: 3 },
              justifyContent: { xs: "center", md: "space-between" },
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Typography variant="h5" component="h5" sx={{ color: "black" }}>
                ¡Buenos días Juan!
              </Typography>
              <Typography variant="h5" component="h5" sx={{ color: "black" }}>
                Empecemos:{" "}
                {route == "/patrimony"
                  ? "Patrimonio"
                  : route == "/testament"
                  ? "Testamento"
                  : route == "/goals"
                  ? "Metas"
                  : route == "/savings"
                  ? "Ahorros"
                  : route == "/empire"
                  ? "Imperio"
                  : ""}
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {name ? (
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    color: "black",
                    textAlign: "right",
                    textTransform: "uppercase",
                  }}
                >
                  {name}
                </Typography>
              ) : null}
              {type ? (
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ color: "black", textAlign: "right" }}
                >
                  {type}
                </Typography>
              ) : null}
            </Box>
            <Box
              sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
            >
              {pageTacker()}
            </Box>
          </Box>
        </Box>
        {children}
      </Box>
      {/* <footer>TODO: posible footer</footer> */}
    </>
  );
};
