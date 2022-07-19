import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { HorizontalScrollBar } from './HorizontalScrollBar'
import { Loader } from './Loader'

export const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
    if(targetMuscleExercises.length > 10){
        targetMuscleExercises = targetMuscleExercises.slice(0, 9);
    }

    if(equipmentExercises.length > 10){
        equipmentExercises = equipmentExercises.slice(0, 9);
    }

  return (
    <Box sx={{mt: {lg: "100px", xs: "0"}}}>
        <Typography variant="h4">Exercises that target the same muscle group</Typography>
        <Stack direction="row" sx={{p:"2", position: "relative"}}>
            {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/> : <Loader/>}
        </Stack>

        <Typography variant="h4">Exercises that use the same equipment</Typography>
        <Stack direction="row" sx={{p:"2", position: "relative"}}>
            {targetMuscleExercises.length ? <HorizontalScrollBar data={equipmentExercises}/> : <Loader/>}
        </Stack>
    </Box>
  )
}
