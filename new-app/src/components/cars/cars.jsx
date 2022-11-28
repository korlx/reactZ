import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Car from './car'

 const  Cars = () => {
    const [cars, setCars] = useState([]);

    const doApi = async () => {
        try {
            let url = `https://project-yarin.herokuapp.com/cars?perPage=99`
            const { data } = await axios(url)

            console.log(data) 
            setCars(data)
        } catch (err) {
            console.log(err.response)
        }
    }

    //בשביל השאפליקציה תאתחל את עצמה ביחד עם הקשת האייפיאי נשתמש בהוק זה:
    useEffect(() => {
        doApi()
    }, [])


    return (
        <div>

            <h1 className='display-3 text-center'>Cars</h1>
            
            <div style={{color:'skyblue'}} className="container">
               <div className="row ">
                {cars?.map((item,i)=>{
                    return(
                        <Car key={i} number={i} car={item}/>

                    )
                })}
                </div>
            </div>
            {/* {cars[0]?.model ?
                <div>
                    <p>{cars[0].model}</p>
                    <p>{cars[1].model}</p>
                    <p>{cars[2].model}</p>
                    <p>{cars[3].model}</p>

                </div>
                : <p>Loading</p>} */}
        </div>
    )
}
export default Cars;