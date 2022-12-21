import { Box } from '@mui/material'
import React, { FC } from 'react'
import { IRight } from '../../interfaces/empireInterfaces'
import { RightItem } from './RightItem';

interface Props {
  data: IRight[];
  onClick?: () => void;
}

export const RightsList: FC<Props> = ({data, onClick}) => {
  return (
    <Box display="flex" flexWrap="wrap" p={3} >
      {data && data.length > 0 && data.map(right => <RightItem key={right.id} onClick={onClick} right={right} />)}
    </Box>
  )
}
