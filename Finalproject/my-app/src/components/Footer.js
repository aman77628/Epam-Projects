import React from 'react'
import "../CSS/footer.css"

function Footer() {
  const date = new Date();
  let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
 
  return (
    <div>
        <section className='fcontainer'> 
        <p>Aman /  {currentDate}</p>
            <p>Copyright &#169; 2023 All rights reserved</p>
           <p></p>
        </section>
    </div>
  )
}

export default Footer