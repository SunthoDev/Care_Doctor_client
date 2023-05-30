import { useEffect } from "react"



let title=(title)=>{

    useEffect(()=>{
        document.title=`${title} - Care Doctor`
    },[title])
}

export default title
