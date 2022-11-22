import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { SideBar } from "../Ui";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IEmpire } from "../../interfaces/empireInterfaces";
import { RootState } from "../../store";

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
      <main
        style={{
          backgroundImage: 'url("backgrounds/Pagina-Web.jpg")',
          width: "calc(100vw - 90px)",
          minHeight: "100vh",
          float: "right",
        }}
      >
        <Box sx={{ px: 3 }}>
          <Box
            sx={{
              borderBottom: "1px solid #000",
              display: "flex",
              pt: 2,
              pb: 3,
            }}
          >
            <Box>
              <Typography variant="h5" component="h5" sx={{ color: "black" }}>
                ¡Buenos días Júan!
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
            <Box flex={1} />
            <Box>
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
          </Box>
        </Box>
        {children}
      </main>
      {/* <footer>TODO: posible footer</footer> */}
    </>
  );
};
