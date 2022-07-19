import React from 'react'

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { Button, Stack, Typography } from '@mui/material';

export const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    console.log(extraDetail);

  return (
    <Stack gap="60px" sx={{flexDirection: {lg: "row"}, p: "20px", alignItems: "center"}}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>

        <Stack sx={{gap: {lg: "35px", xs: "20px"}}}>
            <Typography variant="h3">
                {name}
            </Typography>

            <Typography variant="h5">
                Exercises keep you strong, {name} is one of the best exercises that target your {target}. It will help you improve your mood and gain energy.
            </Typography>

            {extraDetail.map((item) => {
                return(
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{backgroundColor: "#fff2db", borderRadius: "50%", width: "100px", heigh: "100px"}}>
                            <img src={item.icon} alt={item.name}/>
                        </Button>

                        <Typography variant="h5">
                            {item.name}
                        </Typography>
                    </Stack>
                )
            })}
        </Stack>
    </Stack>
  )
}
