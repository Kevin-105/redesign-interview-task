import React from 'react';
import { Alert, Box, Button, Divider, Snackbar, TableHead, TableRow, TextField, Container } from "@mui/material"
import { useEffect, useState } from "react";
import { SITE_URL } from "../Common/Constants";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',    
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,   
 };

const Login = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const getData = async function() {
        const arr = [];
        let formData = new FormData()
        formData?.append('acct', 'krushal')
        formData?.append('pwd', 'Artoo1#')
        try {
          const { data } = await axios.post(
            `${SITE_URL}/login`, formData
          );
        } catch (error) {
             setOpen(true);
             setTimeout(() => {
                navigate(`/news/topstories`)
             }, 3000);
          return error;
        }
        return arr;
      };

    return (
        <React.Fragment>
           <Container >
                <Divider/>
                <div className="d_inline-grid p-20">
                    <TextField id="standard-basic"  value = 'admin' autoComplete="off" label="User Name"  />
                    <span  className='p-t-10'> <TextField type='password' value ='admin'  label="Password" autoComplete="off"/> </span>
                </div>
                <Divider/>
                <div className="p-20">
                    <Button variant="outlined" onClick={()=> navigate(`/news/topstories`)}>Close</Button>
                    <Button variant="contained" onClick={()=> getData()}>Submit</Button>
                </div>
                <Snackbar open={open} autoHideDuration={3000} onClose={()=> setOpen(false)}>
                    <Alert severity="error" onClose={()=> setOpen(false)}>Unable to login at this time, Please try again later!</Alert>
                </Snackbar>
            </Container>
        </React.Fragment>
    );
};

export default Login;