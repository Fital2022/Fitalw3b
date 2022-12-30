import { Typography, Box, CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IEmpire } from "../../interfaces/empireInterfaces";
import { RootState, selectEscrow } from "../../store";
import { useRouter } from "next/router";
import { MenuProfile } from "./MenuProfile";

export const TopBar = () => {
  const { name, type } =
    useSelector((state: RootState) => state.empire.selectedEmpire as IEmpire) ||
    {};
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Box
      sx={{
        py: "10px",
        px: { xs: "10px", md: "40px" },
        position: "fixed",
        top: 0,
        height: "90px",
        background: "var(--top-gradient)",
        display: "flex",
        width: "100%",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <CardMedia
        onClick={() => {
          router.push("/");
          dispatch(selectEscrow(-1));
        }}
        image="icons/Pagina-Web-logo.png"
        component="img"
        alt="Fital Logo"
        sx={{
          width: { xs: "55px", md: "70px" },
          height: { xs: "55px", md: "70px" },
        }}
      />

      <Box sx={{ ml: { xs: 2, md: 4 } }}>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: { xs: "400", md: "600" },
          }}
        >
          ¡Buenos días Juan!
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: { xs: "400", md: "600" },
          }}
        >
          Empecemos: {name}
        </Typography>
      </Box>
      <Box flex={1} />
      <MenuProfile />
      {/* <CardMedia
        image="images/profile.png"
        sx={{
          width: { xs: "45px", md: "55px" },
          height: { xs: "45px", md: "55px" },
        }}
      /> */}
      {/* <Box>
        {name ? (
          <Typography sx={{ textTransform: "uppercase" }}>{name}</Typography>
        ) : null}
        {type ? <Typography>{type}</Typography> : null}
      </Box> */}
    </Box>
  );
};
