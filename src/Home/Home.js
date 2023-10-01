import React, {useState} from 'react'
import './Home.css'

export default function Home() {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('female');
    const [mobile, setMobile] = useState(false);
    const [laptop, setLaptop] = useState(false);
    const [smartWatch, setSmartWatch] = useState(false);
    return(
        <>
         <div>
            <form>
                
                Full Name : <input type="text"
                 placeholder='Full Name'
                 onChange={(e) =>{
                 setFullName(e.target.value);
                 }}
                 value = {fullName} /><br/><br/>

                <h1>Selected Gender : {gender} </h1><br/><br/>
                <input type="radio"
                 name="gender"
                 value="male"
                 onChange={(e) =>{
                    if(e.target.checked){
                        setGender(e.target.value)
                    }
                 }}
                 checked={gender==="male"}
                 />male

                <input type="radio"
                 name="gender"
                 value="female"
                 onChange={(e) =>{
                    if(e.target.checked){
                        setGender(e.target.value)
                    }
                 }}
                 checked={gender==="female"}
                 /> female <br/><br/>

                 <input type="checkbox" value="mobile"  /> Mobile <br/>
                 <input type="checkbox" value="mobile"  /> Laptop <br/>
                 <input type="checkbox" value="mobile"  /> Smartwatch <br/>
            </form>
        </div>
        </>
    )
}