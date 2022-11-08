import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   main: '##1E1E1E'
    // },
    // secondary: {
    //   main: '#3A64D8'
    // }
  },
  components: {
    // MuiLink: {
    //   defaultProps: {
    //     underline: "none",
    //   },
    // },
    // MuiAppBar: {
    //   defaultProps: {
    //     elevation: 0,
    //     position: "fixed",
    //   },
    //   styleOverrides: {
    //     root: {
    //       backgroundImage: "linear(67deg, black, blue 50%, purple)",
    //       height: 60,
    //     },
    //   },
    // },

    MuiTypography: {
      defaultProps: {
        fontFamily: "Helvetica",
      },
      styleOverrides: {
        // h1: {
        //   fontSize: 30,
        //   fontWeight: 600,
        // },
        // h2: {
        //   fontSize: 20,
        //   fontWeight: 400,
        // },
        // subtitle1: {
        //   fontSize: 18,
        //   fontWeight: 600,
        // },
        h5: {
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
    },

    // MuiButton: {
    //   defaultProps: {
    //     variant: "contained",
    //     size: "small",
    //     disableElevation: true,
    //   },
    //   styleOverrides: {
    //     root: {
    //       textTransform: "none",
    //       boxShadow: "none",
    //       borderRadius: 10,
    //       ":hover": {
    //         backgroundColor: "rgba(0,0,0,0.05)",
    //         transition: "all 0.3s ease-in-out",
    //       },
    //     },
    //   },
    // },

    // MuiCard: {
    //   defaultProps: {
    //     elevation: 0,
    //   },
    //   styleOverrides: {
    //     root: {
    //       boxShadow: "0px 5px 5px rgba(0,0,0,0.05)",
    //       borderRadius: "10px",
    //     },
    //   },
    // },
  },
});
