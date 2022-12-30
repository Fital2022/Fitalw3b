import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    submit: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    submit: true;
  }
}

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
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          ":focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
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
          fontWeight: "bold",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          ":hover": {},
        },
      },
      variants: [
        {
          props: { variant: "submit", color: "submit" },
          style: {
            backgroundColor: "#1BD145",
            color: "white",
            ":hover": {
              color: "#1BD145",
              border: "1px solid #1BD145",
              bgcolor: "white",
            },
          },
        },
      ],
    },
  },
});
