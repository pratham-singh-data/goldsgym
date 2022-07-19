import { Stack } from '@mui/material'
import React from 'react'
import { AttributionImageCard } from '../components/AttributionImageCard'
import { imageGetter } from '../utils/fetchImages'

export const AttributionPage = () => {
  return (
    <Stack direction="row" sx={{gap: {lg: "110px", xs: "50px"}}} flexWrap="wrap" justifyContent="center">
      {imageGetter.map((item) => {
        return(
          <AttributionImageCard key={item.key} item={item}/>
        )
      })}
    </Stack>
  )
}
