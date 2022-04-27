import { lazy,Suspense } from "react";
import Loading from './layout/Loading'


const Home = lazy(()=>import('../view/Home'));
const About = lazy(()=>import('../view/About'));
const Contact = lazy(()=>import('../view/Contact'));
const PageNotFound = lazy(()=>import('../view/PageNotFound'));


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