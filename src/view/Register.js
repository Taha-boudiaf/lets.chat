import React, { useState } from 'react'
import {  Grid, Paper, Typography } from '@mui/material'
import { Form, Formik} from 'formik'
import {Validation} from '../components/FormUI/Yup/Yup'
import Textfield from '../components/FormUI/Textfield/index'
import Button from '../components/FormUI/Submit/index'
import { useAuth } from '../context/ChatContext'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import DateTimePicker from '../components/FormUI/DataTimePicker/index'
import styles from '../components/css/register.module.css'
import Select from '../components/FormUI/Select/index'
import countries from '../data/data.json'



const FORM_VALIDATION = Validation;

const Register = () => {

  const [data,setData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phoneNumber:'',
    birthDay:'',
    country:''
  })

  const Navigate = useNavigate();
  
  const {Register} = useAuth();
  
  const handleSubmit = async(data)=>{
    setData({...data})
    const res = await Register(data.email,data.password)
    await setDoc(doc(db,"users",res.user.uid),
       {
         ...data,
         uid:res.user.uid,
         createdAt:Timestamp.fromDate(new Date()),
         isOnline:true,
         admin:false,
       }
       );
    Navigate('/')
  }
  
  return (
  <>
    <Grid container spacing={4} className={styles.con} >
      <Paper className={styles.Paper} >
          <div>
          <Typography variant="h3" style={{fontWeight: '600', fontSize: '2rem'}}>
            Create Account.
          </Typography>
          <Typography variant="subtitle1" style={{marginBottom: '35px',lineHeight: '2.75',color:'#757982'}}>
            Share your thoughts with the world from today
          </Typography>
          </div>
        <Grid item xs={12} >
            <Formik initialValues={{...data}} validationSchema={FORM_VALIDATION} onSubmit={handleSubmit}> 
              <Form>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Textfield  className={styles.field} name='firstName' label='FirstName'/>
                </Grid>
                <Grid item xs={6}>
                  <Textfield className={styles.field} name='lastName' label='LastName'/>
                </Grid>
                <Grid item xs={12}>
                  <Textfield className={styles.field} name='email' label='Email'/>
                </Grid>
                <Grid item xs={12}>
                  <Textfield className={styles.field} name='password' label='Password' type='password'/>
                </Grid>
                <Grid item xs={12}>
                  <Textfield className={styles.field} name='phoneNumber' label='number'/>
                </Grid>
                <Grid item xs={6}>
                  <DateTimePicker className={styles.field} name="birthDay" label="birthDay"/>
                </Grid>
                <Grid item xs={6}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>
                <Grid item xs={12}>
                  <Button className={styles.btn}>
                  Conect Now
                  </Button>
                </Grid> 
                </Grid>
              </Form>
            </Formik>
        </Grid>
      </Paper>
    </Grid>
  </>
  )
}

export default Register