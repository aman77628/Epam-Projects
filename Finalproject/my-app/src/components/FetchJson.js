/* eslint-disable no-sequences */
/* eslint-disable array-callback-return */
import React,{useState} from 'react'
import Mockdata from '../db.json'
import '../CSS/table.css'
import '../CSS/Popup.css'
import Statistic from './Statistic';

function FetchJson() {
   const[data,setData] = useState(Mockdata)
   const[order,setOrder]=useState("ASC");
   const[search,setSearch]=useState("")
   const[stats,setStats]=useState(false)
   const[checkStats,setCheckStats]=useState("all")
   const[digit,setDigit]=useState(true);
   const[alphabet,setAlphabet]=useState(true);
   const[statistic,setStatistic]=useState(true)

   // for popUp window
   const [popup,setPop]=useState(false);

   const[index,setIndex]=useState(-1)



  const closePopup=()=>{
      setPop(false)
      setIndex(-1);
  }
  let totalStudents=Mockdata.length;

    const sortbyName = (col1) => {
      if (order === "ASC") {
          const sorted = [...data].sort((a, b) => {
              return a[col1].toLowerCase() > b[col1].toLowerCase() ? 1 : -1;
          })
          setData(sorted)
          setOrder("DSC")
      }
      if (order === "DSC") {
          const sorted = [...data].sort((a, b) => {
              return a[col1].toLowerCase() < b[col1].toLowerCase() ? 1 : -1;
          })
          setData(sorted)
          setOrder("ASC")
      }
      setAlphabet(!alphabet)
  }



  const sortbyNumber = (col1, col2) => {
    if (order === "ASC") {
        const sorted = [...data].sort((a, b) => {
            a = Number(a[col1]) * 0.6 + Number(a[col2]) * 0.4
            b = Number(b[col1]) * 0.6 + Number(b[col2]) * 0.4
            return a > b ? 1 : -1;
        })
        setData(sorted)
        setOrder("DSC")
    }
    if (order === "DSC") {
        const sorted = [...data].sort((a, b) => {
            a = Number(a[col1]) * 0.6 + Number(a[col2]) * 0.4
            b = Number(b[col1]) * 0.6 + Number(b[col2]) * 0.4
            return a < b ? 1 : -1;
        })
        setData(sorted)
        setOrder("ASC")
    }
    setDigit(!digit);
}


  //filter by All, passed , failed
  function filterByStatus(col,col2,status){
    if(status==="all"){
        setData(Mockdata)
    }else{
        setData(Mockdata);
    const sorted=[...Mockdata].filter((val)=>{
        let a=Number(val[col])*0.6+Number(val[col2])*0.4
        if(status==="fail")
       return a<4;
       else if(status==="pass")
       return a>4;
    })
    setData(sorted)
}
  setCheckStats(status)
  }
  
  function statistics(){
    setStatistic(!statistic)
    setStats(!stats)
  }
  let dd=0;
  const changeColor=(e,i)=>{
    setIndex(i)
    e.stopPropagation()
    setPop(!popup)
  }
  console.log(dd);

  const handleRowClick = (e) => {
    e.target.parentNode.classList.toggle('active')
  };
  return (
    <div>
      <div className="container">
      <div className='top'>
      <button onClick={()=>filterByStatus("examGrade","ratingGrade","all")} className='all'>All</button>
     <button onClick={()=>filterByStatus("examGrade","ratingGrade","pass")} className='pass'>Passed</button>
     <button onClick={()=>filterByStatus("examGrade","ratingGrade","fail")} className='fail'>Failed</button>
     <button  onClick={() => sortbyNumber("examGrade", "ratingGrade")}> {digit?'0-9':'9-0'} </button>
     <button onClick={() => sortbyName("name")}>{alphabet?'A-Z':'Z-A'}</button>
     <input className='search' type="text" placeholder='Search...' name="" id="" onChange={(e)=>{
       setSearch(e.target.value)
     }} />
     </div>
     
     <table className='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Ticket's Number</th>
          <th>Rating Grade</th>
          <th>Exam Grade</th>
          <th>Final Grade</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {
          data.filter((val)=>{
            if(search===""){
              return val;
            } else if(val.name.toLowerCase().includes(search.toLowerCase())){
              return val;
            }}).map((d,i)=>{
            let ratingGrade=d.ratingGrade;
            let examGrade=d.examGrade;
         
            let finalgrade=(0.6*examGrade + 0.4*ratingGrade).toFixed(2);
           let status ;
           if(finalgrade > 4){
            status='Passed';}
            else{
              status='Failed'
            } 
            return <tr key={d.id} 
            
            onClick={(e) => handleRowClick(e)} 
            >
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.ticketNumber}</td>
              <td> {d.ratingGrade} </td>
              <td> {d.examGrade} </td>
              <td> {finalgrade} </td>
              <td> {status} </td>
              <td ><button onClick={(e)=>changeColor(e,i)} className='details'>Details</button> </td>
            </tr>
          })
        }
      </tbody>
     </table>
     </div>
    
     <div>
        <button onClick={()=>statistics()} className='statistic'> {statistic?'Show Statistics':'Hide Statistics'} </button>
      {stats &&  <Statistic data={data} checkStats={checkStats} totalStudents={totalStudents}  />}
        </div>

  {/* For popUp window */}
        <div>
                {
                    popup?
                  
                        <div className="popups">
                            <div className="popup-header">
                                <h1>Detail of Student</h1>
                                <h1 onClick={closePopup} style={{cursor:"pointer"}}>X</h1>
                            </div>
                            <div>
                            <p>Name of Student - {data[index]['name']}</p>
                            <p>Email of student -{data[index]['email']}</p>
                            <p>Contact - {data[index]['contact']}</p>
                            <p>Addres of student - {data[index]['address']}</p>
                            <p>Country - {data[index]['country']}</p>
                            </div>
                        </div>:""
                  
                }
            </div>
    </div>
  )
}
export default FetchJson