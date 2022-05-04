import * as Yup from 'yup'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const Validation  = Yup.object().shape({
    firstName:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email:Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    birthDay:Yup.date().required('Required'),
    
  })