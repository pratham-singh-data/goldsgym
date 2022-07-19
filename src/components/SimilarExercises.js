import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { HorizontalScrollBar } from './HorizontalScrollBar'
import { Loader } from './Loader'

export const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: "100px", xs: "0"}}}>
        <Typography variant="h5">Exercises that target the same muscle group</Typography>
        <Stack direction="row" sx={{p:"2", position: "relative"}}>
            {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/> : <Loader/>}
        </Stack>

        <Typography variant="h5">Exercises that use the same equipment</Typography>
        <Stack direction="row" sx={{p:"2", position: "relative"}}>
            {targetMuscleExercises.length ? <HorizontalScrollBar data={equipmentExercises}/> : <Loader/>}
        </Stack>
    </Box>
  )
}
