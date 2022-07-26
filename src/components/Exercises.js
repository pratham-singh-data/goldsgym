import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ExerciseCard } from './ExerciseCard'
import { Loader } from './Loader';

export const Exercises = ({exercises, setExercises, bodyPart, isLoading}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 10;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (ev, value) => {
    setCurrentPage(value);
    window.scrollTo({top: 1800, behaviour: "smooth"});
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === "all"){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      }
      else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart])

  return (
    <Box sx={{mt: {lg: "110px"}}} mt="px" p="20px">
      <Typography variant="h3" mb="5px">
        Showing results
      </Typography>

      <Stack direction="row" sx={{gap: {lg: "110px", xs: "50px"}}} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => {
          return(
            <ExerciseCard key={index} exercise={exercise} />
          )
        })}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {isLoading && <Loader/>}

        {!isLoading && exercises.length > 9 && 
          <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size="large"/>
        }

        {!isLoading && exercises.length === 0 && 
          <Typography variant="h3">No results to display</Typography>
        }
      </Stack>
    </Box>
  )
}
