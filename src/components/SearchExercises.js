import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { HorizontalScrollBar } from './HorizontalScrollBar';

export const SearchExercises = ({setExercises, bodyPart, setBodyPart, setIsLoading}) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(["all", ...bodyParts]);
        }

        fetchExerciseData();
    }, [])

    const handleSearch = async () => {
        setIsLoading(true);

        if(search){
            const exercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercises.filter((exercise) => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search))

            setExercises(searchedExercises);
        }

        setIsLoading(false);
    }

    const onInputKeyDown = (ev) => {
        if(ev.keyCode === 13){
            handleSearch();
        }
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize: {lg: "44px", xs: "30px"}}} mb="50px" textAlign="center">
            Awesome Exercise You <br/> Should Know
        </Typography>

        <Box position="relative" mb="72px">
            <TextField height="76px" value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeholder="Search exercises..." sx={{input: {fontWeight: "700px", border:"none", borderRadius: "4px"}, width: {lg: "800px", xs: "350px"}, backgroundColor: "#fff", borderRadius: "40px"}} type="text" onKeyDown={(ev) => {onInputKeyDown(ev)}} />
            
            <Button className="search-btn" sx={{bgcolor: "#FF2625", color: "#fff", textTransform: "none", width: {lg: "175px", xs: "80px"}, fontSize: {ls: "20px", xs: "14px"}, height: "56px", position: "absolute", right: "0"}} onClick={handleSearch}>Search</Button>
        </Box>

        <Box sx={{position: "relative", width: "100%", p: "20px"}}>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true}/>
        </Box>
    </Stack>
  )
}
