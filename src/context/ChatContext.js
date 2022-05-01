import {createContext,useContext,useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from "../firebase";
import Loading from '../components/layout/Loading'

// create context api 
const ChatContext = createContext();
// export values to component
export const useAuth = ()=>{
    return useContext(ChatContext)
}

// export function of context 

export const UserAuthConytext = (Children)=>{
    // users
    const [user,setUser]= useState(null);
    const [loading,setLoading] = useState(true)

    // fucntion to register with email and password
    const Register = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // function to login 
    const Login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // function to signOut
    const  Signout = ()=>{
        return signOut(auth);
    }
    // when user make change 
    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
          setUser(user);
          setLoading(false)
        })
        
      }, [])
      if (loading) {
        return <Loading/>
    }
    // variable to passing props to children
    const value ={

    }

    // parent component passing props to children
    return(
        <ChatContext.Provider value={value}>
            {Children}
        </ChatContext.Provider>
    )
}
