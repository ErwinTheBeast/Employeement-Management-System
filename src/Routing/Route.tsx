import {useEffect,useState} from "react";

const Route = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(()=>{
        const onLocationChange = () => {
            //using a state only so that the render component updates everytime w.l.pathname changes
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange)

        //cleanup function for useEffect
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return(
        currentPath === path ? children : null
    )
};


export default Route;