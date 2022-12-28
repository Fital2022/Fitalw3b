import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import { ActionsLayout, MainLayout } from "../components/Layout";

interface PageMetaData {
  title: string;
  description: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  console.log("route\n", route);

  const getPageMetadata = (): PageMetaData => {
    switch (route) {
      case "/":
        return {
          title: "Fital - Comencemos",
          description: "Página para crear y seleccionar imperio",
        };
      case "/main":
        return {
          title: "Fital - Principal",
          description: "Página para elegir categoria del imperio",
        };
      case "/patrimony":
        return {
          title: "Fital - Patrimonio",
          description: "Página para adminstrar todo tipo de bienes",
        };
      case "/testament":
        return {
          title: "Fital - Testamento",
          description: "Página para adminstrar beneficiarios y emperadores",
        };
      case "/goals":
        return {
          title: "Fital - Metas",
          description:
            "Página para revisar metas propuestas por fital o crear metas propias",
        };
      case "/empire":
        return {
          title: "Fital - Imperio",
          description: "Página para visitar nuestro imperio de forma general",
        };
      case "/onboarding":
        return {
          title: "Fital - Únete",
          description:
            "Página para levantar los documentos y datos de los prospectos",
        };
      default:
        return { title: "", description: "" };
    }
  };

  const { title, description } = getPageMetadata();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
          {route == "/" || route == "/main" ? (
            <MainLayout title={title} pageDescription={description}>
              <Component {...pageProps} />
            </MainLayout>
          ) : route == "/onboarding" ? (
            <Component {...pageProps} />
          ) : (
            <ActionsLayout title={title} pageDescription={description}>
              <Component {...pageProps} />
            </ActionsLayout>
          )}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
