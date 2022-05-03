import { TextField } from "@mui/material";
import {useField } from "formik";
import React from "react";


const TextFieldWerapper = ({name,...otherProps})=>{
    const [field,mata]=useField(name)
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant:'outlined'
    }
    if (mata && mata.error && mata.touched) {
        configTextfield.error= true;
        configTextfield.helperText = mata.error;
    }
    return(
        <TextField {...configTextfield}/>
    )
}

export default TextFieldWerapper