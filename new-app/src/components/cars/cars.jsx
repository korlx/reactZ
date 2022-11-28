import axios from 'axios'
import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Car from './car'

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category,setCategory]=useState("All");
    const selectRef = useRef()
    const getCategories = (_data) => {
        const cat = []
        cat.push("All")

        _data.forEach(item => {
            if (!cat.includes(item.category)) {
                cat.push(item.category);
            }
        });
        setCategories(cat)
        console.log(cat)
    }

    const doApi = async () => {
        try {
            let url = `https://project-yarin.herokuapp.com/cars?perPage=99`
            const { data } = await axios(url)
            console.log(data)
            getCategories(data)

            let carsFilterd = [...data]
            if (category !='All' && selectRef.current.value) {
             carsFilterd = data.filter(item => item.category === category);
              
            }
            else{
                carsFilterd=[...data]
            }
           

            setCars(carsFilterd);

        } catch (err) {
            console.log(err.response)
        }
    }

    //בשביל השאפליקציה תאתחל את עצמה ביחד עם הקשת האייפיאי נשתמש בהוק זה:
    useEffect(() => {
        doApi()
    }, [category])


    return (
        <div>

            <h1 className='display-3 text-center'>Cars</h1>

            <div style={{ color: 'skyblue' }} className="container">
                <div className='col-lg-3 col-10 mx-auto'>
                    <select ref={selectRef} onChange={() =>{
                        setCategory(selectRef.current.value);
                    }} className='form-select'>
                        {categories?.map((item, i) => {
                            return (
                                <option key={i} value={item}> {item.toUpperCase()} </option>)
                        })}
                    </select>
                </div>
                <div className="row ">
                    {cars?.map((item, i) => {
                        return (
                            <Car key={i} number={i} car={item} />

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