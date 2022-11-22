import NextLink from "next/link";
import {
  HouseOutlined,
  FileOpenOutlined,
  FlagCircleOutlined,
  AttachMoneyOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IEmpire } from "../../interfaces/empireInterfaces";
import { RootState, selectEscrow } from "../../store";
import { useRouter } from "next/router";

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
        px: "40px",
        position: "fixed",
        top: 0,
        height: "90px",
        background: "var(--top-gradient)",
        display: "flex",
        width: "100vw",
        alignItems: "center",
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
        sx={{ width: "70px", height: "70px" }}
      />

      <Box sx={{ ml: 10 }}>
        <Typography variant="h5" component="h5" sx={{ color: "white" }}>
          ¡Buenos días Júan!
        </Typography>
        <Typography variant="h5" component="h5" sx={{ color: "white" }}>
          Empecemos:
        </Typography>
      </Box>
      <Box flex={1} />
      <Box>
        {name ? <Typography sx={{textTransform: 'uppercase'}} >{name}</Typography> : null}
        {type ? <Typography>{type}</Typography> : null}
      </Box>
    </Box>
  );
};
