import { data } from "./data"
import styles from "./Gallery.module.css"
import { useState } from "react"

const Gallery = () =>{

    const[select,setSelect] = useState(null)

    function selectImage(ele){
        // console.log(ele);
        setSelect(ele)
    }

    return(
        <>
        <h1>Image Gallery</h1>
        <div className={styles.container}>
        
        {/* //displaying images */}
        {data.map((ele,idx)=>{
        return <div onClick={()=>selectImage(ele)} key={idx}>
            <img src={ele.image} alt="image" />
            {/* <p>{ele.description}</p> */}
        </div>
        })}
        </div>

        {/* //initially select is set to null, react will evaluate the expression before the && if selected has a value truthy value, react will render the jsx inside the parenthesis ( ), if selected value is null then react will ignore the jsx */}

        {
            select && (
                <div className={styles.display}>
                    <img src={select.image} alt="image" />
                </div>
            )
        }

        </>
    )
}

export default Gallery