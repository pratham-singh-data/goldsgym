import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Detail } from '../components/Detail';
import { ExerciseVideos } from '../components/ExerciseVideos';
import { SimilarExercises } from '../components/SimilarExercises';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

export const ExerciseDetails = () => {
  const {exerciseId} = useParams();
  
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBURL = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDBURL}/exercises/exercise/${exerciseId}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData);
    }

    fetchExercisesData();
  }, [exerciseId]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos name={exerciseDetail.name} exerciseVideos={exerciseVideos}/>
      <SimilarExercises/>
    </Box>
  )
}
