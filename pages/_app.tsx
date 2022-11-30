import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from 'redux-persist/integration/react';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
