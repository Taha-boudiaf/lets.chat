import React, { useState } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Form, Formik} from 'formik'
import {Validation} from '../components/FormUI/Yup/Yup'
import Textfield from '../components/FormUI/Textfield/index'
import Button from '../components/FormUI/Submit/index'
import { useAuth } from '../context/ChatContext'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'



const FORM_VALIDATION = Validation;

const Register = () => {

  const [data,setData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phoneNumber:''
  })

  const Navigate = useNavigate();
  
  const {Register} = useAuth();
  
  const handleSubmit = async(data)=>{
    setData({...data})
    const res = await Register(data.email,data.password)
    await setDoc(doc(db,"users",res.user.uid),
       {
         uid:res.user.uid,
         ...data,
         createdAt:Timestamp.fromDate(new Date()),
         isOnline:true,
       }
       );
    Navigate('/')
  }
  
  return (
  <div>
    <Grid container>
      <Grid item xs={6}>
        <Container>
          <Formik initialValues={{...data}} validationSchema={FORM_VALIDATION} onSubmit={handleSubmit}> 
            <Form>
              <Grid>
                <Typography>
                  firstName
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Textfield name='firstName' label='firstName'/>
              </Grid>
              <Grid>
                <Typography>
                  lastName
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Textfield name='lastName' label='lastName'/>
              </Grid>
              <Grid>
                <Typography>
                  Email
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Textfield name='email' label='lastName'/>
              </Grid>
              <Grid>
                <Typography>
                  password
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Textfield name='password' label='password' type='password'/>
              </Grid>
              <Grid item xs={6}>
                <Textfield name='phoneNumber' label='number'/>
              </Grid>
              <Grid item xs={6}>
                <Button >
                  submit
                </Button>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </Grid>
  </div>
  )
}

export default Register