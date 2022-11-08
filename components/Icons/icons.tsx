import { SvgIcon, SvgIconProps } from "@mui/material";
import houseicon from "../../public/icons/house.svg";

export const HouseIcon = (props: SvgIconProps) => {
  return <SvgIcon {...props} component={houseicon} />;
};
