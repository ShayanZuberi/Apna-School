import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from '@mui/material';



export default function AddNewFees() {
  const navigate = useNavigate();
  const ClassFeeClicked = () => {
    let url = '/Fee/Add/NewFeeForClass';
    navigate(url);
}

  return (
    <Grid justifyContent="center" display="flex" flex-direction="row">
    <Card sx={{ width: "90%", maxWidth: "900px" }}>
     
                  <Divider variant="middle" />
     <Typography >
     Generate Fee Challan for an Individual Student</Typography>

     <Button  fullWidth sx={{  mb: 3, flex: "100%", width: '100%' }} variant  = "outlined">
      Student
     </Button>
    <Divider></Divider>
    <Typography>
    Generate Fee Challans for all the students in a class Year
    </Typography>
     <Button  fullWidth sx={{  mb: 3, flex: "100%", width: '100%'}} variant = "outlined" onClick = {ClassFeeClicked}>
      Class
     </Button>
    <Divider></Divider>
    <Typography>
    Generate Fee Challans for all the students in a Section
    </Typography>
     <Button  fullWidth sx={{  mb: 3, flex: "100%", width: '100%' }} variant = "outlined">
      Section
     </Button>
     <Typography>
    Generate Fee Challans for All the students
    </Typography>
     <Button  fullWidth sx={{  mb: 3, flex: "100%", width: '100%'}}variant = "outlined">
      All
     </Button>
    </Card>
    </Grid>
      
  );
}