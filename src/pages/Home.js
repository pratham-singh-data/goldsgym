import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Exercises } from '../components/Exercises'
import { HeroBanner } from '../components/HeroBanner'
import { SearchExercises } from '../components/SearchExercises'

export const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} setIsLoading={setIsLoading}/>
      <div id="exercises">
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} isLoading={isLoading}/>
      </div>
    </Box>
  )
}
