import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  Grid, Paper, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import {Validation} from '../components/FormUI/Yup/loginYup'
import { useAuth } from '../context/ChatContext'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import styles from '../components/css/register.module.css'
import TextField from '../components/FormUI/Textfield/index'
import Button from '../components/FormUI/Submit/index'

const FORM_VALIDATION = Validation;



const Login = () => {
  const [data,setData] = useState({
    email:'',
    password:'',
    
  })
  const {Login} = useAuth();
  const Navigate = useNavigate();

  const handleSubmit = async(data)=>{
    setData({...data})
      
      const res = await Login(data.email,data.password)
      await updateDoc(doc(db,"users",res.user.uid),
        {
          isOnline:true,
        });
        
      Navigate('/chat',{ replace: true })
  }
  
  return (
    <>
      <Grid container spacing={4} className={styles.con} >
      <Paper className={styles.Paper} style={{marginBottom:'15px'}}>
          <div>
            <Typography variant="h3" style={{fontWeight: '600', fontSize: '2rem'}}>
              Welcome Back!
            </Typography>
            <Typography variant="subtitle1" style={{marginBottom: '15px',lineHeight: '2.75',color:'#757982'}}>
              Sign in to your account
            </Typography>
          </div>
        <Grid item xs={12} >
            <Formik initialValues={{...data}} validationSchema={FORM_VALIDATION} onSubmit={handleSubmit}> 
              <Form>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField className={styles.field} name='email' label='Email'/>
                </Grid>
                <Grid item xs={12}>
                  <TextField className={styles.field} name='password' label='Password' type='password'/>
                </Grid>            
                <Grid item xs={12}>
                  <Button className={styles.btn}>
                  Conect Now
                  </Button>
                </Grid> 
                <div>
                  <Typography variant="subtitle1" style={{marginLeft:'20px',marginBottom: '10px',lineHeight: '2.75',color:'#757982'}}>
                    You Dont have Account? <a href='/register'>Join Now</a>
                  </Typography>
                </div>
                </Grid>
              </Form>
            </Formik>
        </Grid>
      </Paper>
    </Grid>
    </>
  )
}

export default Login