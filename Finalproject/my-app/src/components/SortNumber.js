import React from 'react'

function SortNumber(props) {
    const sorting = (col)=>{
  if(props.order==="ASC"){
    const sorted=[...props.data].sort((a,b)=>
    a[col].toLowerCase()> b[col].toLowerCase()?1:-1)
    props.alerts(sorted,"DSC")
  }
  if(props.order==="DSC"){
    const sorted=[...props.data].sort((a,b)=>
  a[col].toLowerCase()< b[col].toLowerCase()?1:-1)
  props.alerts(sorted,"ASC")
  }
}

const sorting2 = (col,col2)=>{
    if(props.order==="ASC"){
      const sorted=[...props.data].sort((a,b )=>{
        a=Number(a[col])*0.6+Number(a[col2])*0.4
        b=Number(b[col])*0.6+Number(b[col2])*0.4
        return a>b?1:-1;
      })
      props.alerts(sorted,"DSC")
  }
    if(props.order==="DSC"){
      const sorted=[...props.data].sort((a,b)=>{
        a=Number(a[col])*0.6+Number(a[col2])*0.4
        b=Number(b[col])*0.6+Number(b[col2])*0.4
        return a<b?1:-1;
      })
      props.alerts(sorted,"ASC")
    }
  }
  let acv;
  if(props.sort==="grade") {
     acv=setTimeout(()=>sorting2("examGrade","ratingGrade"),100)
 }else if(props.sort==="name"){
    acv=setTimeout(()=>sorting("name"),100)
 }

  return (
    <div>
        {acv}         
    </div>
  )
}

export default SortNumber