import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";
import { IBottomMenuSubLink } from "../../interfaces";

// interface Props {
//   data: IBottomMenuSubLink[];
// }
// export const SubLinks: FC<Props> = ({ data }) => {
//   return (
//     <Box>
//       {data.map((element) => (
//         <OneLink key={element.id} {...element} />
//       ))}
//     </Box>
//   );
// };

interface Props extends IBottomMenuSubLink {
  align?: 'flex-end' | 'flex-start';
}
export const OneLink: FC<Props> = ({ img, name, align = 'flex-end' }) => (
  <Button sx={{ flexDirection: "column", alignSelf: align }}>
    <Avatar src={img} sx={{width: '60px', height: '60px'}} />
    <Typography
      sx={{ fontSize: "10px", textTransform: "none", color: "black" }}
    >
      {name}
    </Typography>
  </Button>
);
