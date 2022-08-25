import React, { useState, useEffect } from 'react';
import { Divider, Paper, Typography, Stack } from "@mui/material";
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from "./DataDisplay";
import {getFacultyData} from '../../../actions/actionsAdmin';
export default function EducBackVoc (props) {

    const {id} = useParams();
    const {users} = useSelector(state => state.adminData);
     


      const acc = users.filter(({_id}) => _id === id);
    return (


        <Paper sx={{ height:'auto', padding:1 }}>
             {acc.map((data, key) => ( 
            <Stack key={key} spacing={0.5} sx={{margin:2}}>
             
                <Divider />
               
                        <Typography sx={{ fontWeight:500, padding:1, textAlign:'center', textTransform:'uppercase' }}>Vocational/Trade Course</Typography>
                        <DataDisplay label='Name of School' data={data.vnameOfSchool} />
                    <DataDisplay label='Basic Education /Degree /Course' data={data.vbasicEducDegreeCourse} />
                    <DataDisplay label='From' data={data.vfrom}/>
                    <DataDisplay label='To' data={data.vto}/>
                    <DataDisplay label='Year Graduated' data={data.vyearGraduate}/>
                    <DataDisplay label='Highest Level/ Units Earned' data={data.vhighestLevelUnits}/>
                    <DataDisplay label='Scholarship/ Academic Honors Received' data={data.vscholarshipAcademicHonors}/>
                    </Stack>
           
            ) )}
        </Paper>
    );
}