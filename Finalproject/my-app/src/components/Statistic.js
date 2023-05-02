import React from 'react'
import Chart from "react-apexcharts"
import '../CSS/statistics.css'
function Statistic({data,checkStats,totalStudents}) {
  console.log('statisticss');
    let grades=[0,0,0,0,0];
    let totalMarks=0;
    let mini=11;
    let maxi=0;
    let avg=0;
    let pass=0;
    let fail=0;
    let numStd=0;
   
    data.map((d,i)=>{
        let ratingGrade=d.ratingGrade;
        let examGrade=d.examGrade;
        
       ++numStd; 
        let finalgrade=Number((0.6*examGrade + 0.4*ratingGrade).toFixed(2));
        if(finalgrade>4)
        ++pass;
        else
        ++fail
        maxi=Math.max(finalgrade,maxi);
        mini=Math.min(finalgrade,mini);
        totalMarks=totalMarks+finalgrade;
        if(finalgrade>=0 && finalgrade<=2)
        {
            grades[0]++;
           
        }else if(finalgrade>2 && finalgrade<=4)
        {
           grades[1]++;
        }else if(finalgrade>4 && finalgrade<=6){
            grades[2]++;
        }else if(finalgrade>6 && finalgrade<=8){
            grades[3]++;
        }else{
            grades[4]++
        }
      })
      // console.log(numStd);
      console.log(totalMarks);
      console.log(typeof(numStd));
      console.log(typeof(totalMarks));
      let barChart=[totalStudents,pass,fail];
      avg=(totalMarks/totalStudents).toFixed(1);
      console.log(avg);

  return (
    <div className='statistics'>
      <table className='table1'>
        <thead>
          <tr>
            <th>Status</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{checkStats} Students</td>
            <td>{numStd}</td>
          </tr>
          <tr>
            <td>Average of {checkStats}</td>
            <td>{avg} </td>
          </tr>
          <tr>
            <td>Max of {checkStats}</td>
            <td>{maxi}</td>
          </tr>
          <tr>
            <td>Min of {checkStats}</td>
            <td>{mini}</td>
          </tr>
          <tr>
            <td>Final-Grade 0-2</td>
            <td>{grades[0]}</td>
          </tr>
          <tr>
            <td>Final-Grade 2-4</td>
            <td>{grades[1]}</td>
          </tr>
          <tr>
            <td>Final-Grade 4-6</td>
            <td>{grades[2]}</td>
          </tr>
          <tr>
            <td>Final-Grade 6-8</td>
            <td>{grades[3]}</td>
          </tr>
          <tr>
            <td>Final-Grade 6-8</td>
            <td>{grades[4]}</td>
          </tr>
        </tbody>
      </table>
  {/* <Chart type='bar'
   width={300}
   height={300}
   series={[
    {
      name:"# of Students",
      data:barChart,
    style:{colors:["#f90000","#a90000","#d90000"] }
    }
   ]}
   options={{
    chart: {
      type: 'bar'
    },
    xaxis:{
      categories:["All","Passed","Failed"],
      title:{text:"Status",
    style:{color:"#f90000",fontSize:15}}
    },
    yaxis:{
      labels:{
        style:{colors:"#f90000"}
      },
      title:{text:"# of Students",
      style:{color:"#f90000"}}
    }
   }}
   >
  </Chart> */}
  <Chart type='pie'
  width={450}
  height={450}
  series={grades}
  options={{
    labels:['Final-Grade 0-2', 'Final-Grade 2-4', 'Final-Grade 4-6', 'Final-Grade 6-8','Final-Grade 8-10'],
    legend:{
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',}
    }
  }}>

  </Chart>
  
  <Chart type='bar'
   width={200}
   height={300}
   series={[
    {
      name:"# of Students",
      data:[mini,maxi],
    }
   ]}
   options={{
    chart: {
      type: 'bar'
    },
    xaxis:{
      categories:["Min. Marks","Max Marks"],
      title:{text:"Status",
    style:{color:"#f90000",fontSize:15}}
    },
    yaxis:{
      labels:{
        style:{colors:"#f90000"}
      },
      title:{text:"Marks",
      style:{color:"#f90000"}}
    }
   }}
   >
  </Chart>
  </div>)
}

export default Statistic