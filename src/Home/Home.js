import React, {useEffect, useState} from 'react'
import './Home.css'

export default function Home() {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('female');
   
    const [devices, setDevices] = useState([]);

    const [iceCream, setIceCream] = useState('strawberry');

    useEffect(()=>{
        console.log(devices) //jub jub devices change honge tub tub hum inko array mein print karenge sirf check krne kel iye ki devices ki kya state hein otherwise usestate is not usefull yahape
    }, [devices]) 


    const handleCheck = (e) =>{ 
        //hum har time har kisi ke liye arrow function karte the aur ab ek hi function banaya aur usko niche sirf call kiya
        if(e.target.checked){
            setDevices([...devices, e.target.value])
        }
        else{
            const indexToBeDeleted = devices.indexOf(e.target.value);
            devices.splice(indexToBeDeleted, 1);
            setDevices([...devices]); //setter methoda cha use karke hum kuch change nahi kr rahe hein sirf notification jaye isleye use spread kr rahe hein aur aur vapis array mein store kar rahe hein
        }
    }
    return(
        <>
         <div className='form'>
            <form>
                
                <h2 className='title'>🤗 Your Choice 🤗 </h2>
                Full Name : <input type="text"
                 placeholder='Full Name'
                 onChange={(e) =>{
                 setFullName(e.target.value);
                 }}
                 value = {fullName} /><br/><br/>

           

                Gender : <input type="radio"
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

               {/* checkbox */}

                 Select Electronic Application : <br/><br/>
                 <input 
                 type="checkbox"
                  value="mobile"  //mobile par click krne ke bad handlecheck function call hoga aur uske bad e call hoga iska target ye input box hoga aur iske value ye mobile hogi
                 
                  onChange={handleCheck}    
                   /> Mobile <br/>

                 <input 
                 type="checkbox" 
                 value="laptop" 
                  onChange={handleCheck}
                  /> Laptop <br/>

                 <input 
                 type="checkbox" 
                 value="smartWatch"
                  onChange={handleCheck}
                 /> Smartwatch <br/>

                {/* select */}
                    <br/><br/>
               Select cake Flever:  <select value={iceCream}
                    onChange={(e) =>{
                        setIceCream(e.target.value)
                    }}>
                    <option value="chocolate">Chocolate</option>
                    <option value="strawberry">Strawberry</option>
                    <option value="vanilla">Vanilla</option>
                </select>
               
            </form>
         
        </div>
        </>
    )
}