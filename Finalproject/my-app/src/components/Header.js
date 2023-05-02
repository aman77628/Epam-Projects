import React, { useState } from 'react'
import '../CSS/header.css'
import aman from'../aman.jpg'


function Header() {
    const [popup,setPop]=useState(false);
    const popUpWindow=()=>{
        setPop(true)
    }
    const closePopup=()=>{
        setPop(false)
    }
  return (
    <div>
        <div className='nav'>
        <nav className='navbar'>The GradeBook App <br /> <p style={{fontSize:'15px'}}> A Grading Platform for Teacher's</p></nav>
        </div>
        <div className='row'>
        <div className='innerRow'>
        <img src={aman} alt="" onClick={()=>popUpWindow()} className='pimg' />
        <p className='pName'>Aman</p>
        </div>
        <div className='column'>
        <h4>Epam Project</h4>
        <h4>Batch 2023 </h4>
        </div>
        </div>


        <div>
                {
                    popup?
                  
                        <div className="popup">
                            <div className="popup-header">
                                <h1 style={{marginLeft:"40%"}}>Detail of Student</h1>
                                <h1 onClick={closePopup} style={{cursor:"pointer"}}>X</h1>
                                
                            </div>
                            <div className='profileRow'>
                             <div>
                            <img src={aman} alt="" className='fImg' />
                            </div>
                            <div className='Fdetails'>
                            <h3>Name- Aman</h3>
                            <h3>UMS Id- 11904557</h3>
                            <h3>Email - aman.11904557@lpu.co.in</h3>
                            <h3>Linkedin - <a href="https://www.linkedin.com/in/aman77628/" target='_blank'>Click here</a> </h3>
                            <h3>Contact No - 8851303588</h3>
                            <h3>Department - Computer Science</h3>
                            </div>
                            </div>
                        </div>:""
                  
                }
            </div>
    </div>
  )
}

export default Header