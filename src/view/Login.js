import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
const INITIAL_FORM_STATE = {

}
const FORM_VALIDATION = yup.object().shape({
  firstName:yup.string().required('Required'),
  LastName:yup.string().required('Required'),
  email:yup.string().email('Invalid Email').required('Required'),
})
const Login = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Container>
            <Formik initialValues={{...INITIAL_FORM_STATE}} validationSchema={FORM_VALIDATION} onSubmit={(values) =>{console.log(values);}}> 
              <Form>
                <Grid item xs={6}>
                  <Typography>
                    details
                  </Typography>
                </Grid>
              </Form>
            </Formik>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login