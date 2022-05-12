import { lazy,Suspense } from "react";

import Loading from './layout/Loading'


const Home = lazy(()=>import('../view/Home'));
const About = lazy(()=>import('../view/About'));
const Contact = lazy(()=>import('../view/Contact'));
const PageNotFound = lazy(()=>import('../view/PageNotFound'));
const Login =lazy(()=>import('../view/Login'))
const Register =lazy(()=>import('../view/Register'))
const Chat =lazy(()=>import('../view/Chat'))
const Profile =lazy(()=>import('../view/Profile'))


export const HomePage = ()=>(
    <Suspense fallback={<Loading/>}>
        <Home/>
    </Suspense>
)
export const AboutPage = ()=>(
    <Suspense fallback={<Loading/>}>
        <About/>
    </Suspense>
)
export const ContactPage = ()=>(
    <Suspense fallback={<Loading/>}>
        <Contact/>
    </Suspense>
)
export const PageNoFound = ()=>(
    <Suspense fallback={<Loading/>}>
        <PageNotFound/>
    </Suspense>
)

export const LoginPage = ()=>(
    <Suspense fallback={<Loading/>}>
        <Login/>
    </Suspense>
)
export const RegisterPage =()=>(
    <Suspense fallback={<Loading/>}>
        <Register/>
    </Suspense>
)

export const ChatPage =()=>(
    <Suspense fallback={<Loading/>}>
        <Chat/>
    </Suspense>
)

export const ProfilePage =()=>(
    <Suspense fallback={<Loading/>}>
        <Profile/>
    </Suspense>
)