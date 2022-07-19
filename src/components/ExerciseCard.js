import { Button, Stack, Tooltip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>

        <Stack direction="row">
            <Tooltip describeChild title="Body part">
                <Button sx={{ml: "21px", color: "#fff", backgroundColor: "#ff4a1c", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize", "&:hover": {backgroundColor: "#aaa", color: "#000"}}}>
                    {exercise.bodyPart}
                </Button>
            </Tooltip>

            <Tooltip describeChild title="Target">
                <Button sx={{ml: "21px", color: "#fff", backgroundColor: "#992e9b", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize", "&:hover": {backgroundColor: "#aaa", color: "#000"}}}>
                    {exercise.target}
                </Button>
            </Tooltip>
        </Stack>
    </Link>
  )
}
