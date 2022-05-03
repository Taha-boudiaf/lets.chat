import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";


const ButtonWrapper = ({children,...otherProps})=>{
        const{submitForm} =useFormikContext() 
        const handleSubmit = ()=>{
            submitForm()
        }
        
        const configButton = {
            ...otherProps,
            variant:'contained',
            color:'primary',
            fullWidth:true,
            onClick:handleSubmit
        }
        return (
            <Button {...configButton} >
                {children}
            </Button>
        )
}

export default ButtonWrapper