import { Stack, Typography } from '@mui/material'
import React from 'react'

export const AttributionImageCard = ({item}) => {
  return (
    <Stack alignItems="center" mt={5}>
        <img src={item.image} alt={item.name} style={{width: "200px", height: "200px", marginBottom: "20px"}} />
        <Typography alignItems="center"><a href={item.linkToCreator} style={{textDecoration: "none", color: "#ff2625"}}>{item.name}</a></Typography>
    </Stack>
  )
}
