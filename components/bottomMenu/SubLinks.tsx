import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { FC, DragEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBottomMenuSubLink } from "../../interfaces";
import { setDragg, setFormValues, setFormValues2, setSuboptions } from "../../store";
import { AppDispatch, RootState } from '../../store/store';
import { useRouter } from "next/router";

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
  align?: 'flex-end' | 'flex-start' | 'center';
}

export const OneLink: FC<Props> = ({ img, name, align = 'flex-end' }) => 
{ 
  const dispatch = useDispatch<AppDispatch>()

  let draggmode = useSelector((state: RootState) => state.form.isDraggin);
  const { route } = useRouter();

  const setOptions = () => {
    let data = {
      name: name,
      img: img
    }
    dispatch(setSuboptions(false))
    if (route === "/testament") {
      dispatch(setFormValues(data))
    }
    else {
      dispatch(setFormValues2(data))
    }
  }

  const onDragStart =  (event: DragEvent) => {
    dispatch(setDragg(true))
    console.log(event)
    event.dataTransfer.setData('option', name)
    event.dataTransfer.setData('img',img)
    console.log("Ya empece")
    console.log(draggmode)
  }
  const onDragEnd = () => {
    dispatch(setDragg(false))
    console.log(draggmode)
    }

  return (
  // <Button draggable onDragStart={onDragStart} onDragEnd={onDragEnd} sx={{ flexDirection: "column", alignSelf: align }}>
  <Button onClick={setOptions} sx={{ flexDirection: "column", alignSelf: align }}>
    <Avatar  src={img} sx={{width: {xs: "85px", sm: '170px', md: '170px'} , height: {xs: "85px", sm: '170px', md: '170px'}}} />
    <Typography
      sx={{ fontSize: "10px", textTransform: "none", color: "black" }}
    >
      Agregar {name}
    </Typography>
  </Button>
)};
