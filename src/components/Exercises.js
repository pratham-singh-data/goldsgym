import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { ExerciseCard } from './ExerciseCard'

export const Exercises = ({exercises, setExercises, bodyPart}) => {
  return (
    <Box sx={{mt: {lg: "110px"}}} mt="px" p="20px">
      <Typography variant="h3" mb="5px">
        Showing results
      </Typography>

      <Stack direction="row" sx={{gap: {lg: "110px", xs: "50px"}}} flexWrap="wrap" justifyContent="center">
        {exercises.map((exercise, index) => {
          return(
            <ExerciseCard key={index} exercise={exercise} />
          )
        })}
      </Stack>
    </Box>
  )
}
