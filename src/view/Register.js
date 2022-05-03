import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Textfield from '../components/FormUI/Textfield/index'
import Button from '../components/FormUI/Submit/index'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const INITIAL_FORM_STATE = {
  firstName:'',
  lastName:'',
  email:'',
  password:''
}

const FORM_VALIDATION = Yup.object().shape({
  firstName:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email:Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
})



const Register = () => {
 
  
  return (
  <div>
    <Grid container>
      <Grid item xs={6}>
        <Container>
          <Formik initialValues={{...INITIAL_FORM_STATE}} validationSchema={FORM_VALIDATION} onSubmit={values => {console.log(values); }}> 
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
                <Button>
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