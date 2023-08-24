import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './addstudentattendance.module.css';

const AddStudentAttendance = () => {

   const [lecturername , setLecturerName] = useState("");
   const [batchcode , setBatchCode] = useState("");
   const [starttime , setStartTime] = useState("");
   const [endtime , setEndTime] = useState("");
   const [date  , setDate ] = useState("");
   const [lecturecoverage , setLectureCoverage] = useState("");
   const {token} = useSelector((state) => state.auth)

   const navigate = useNavigate()

  

   const handleCreateAttendances = async (e) => {
      e.preventDefault()
      console.log(`${token}`);
      try {
        

      

         //uploading attendances
         const res = await fetch(`http://localhost:5000/attendances/add`,{
            headers:{
               "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`
            },
            method: "POST",
            body: JSON.stringify({
               lecturername,
               batchcode,
               starttime,
               endtime,
               date,
               lecturecoverage
            })
         })
         const ectc = await res.json()
        
         alert("Added Successfully");
         
      } catch (error) {
         console.error(error.message)
         
      }
   }

    return(
       <div className={classes.container}>
          <div className={classes.wrapper}>
            <h2 className={classes.title}>Add Student Attendance</h2>
            <form onSubmit={handleCreateAttendances} encType="multipart/form-data">
               <div className={classes.inputWrapper}>
                <label >Lecturer Name :</label>
                <input type="text" placeholder="Lecturer Name..." className={classes.input}
                onChange={(e) => setLecturerName(e.target.value)}/>
               </div>

               <div className={classes.inputWrapper}>
                <label >Batch Code:</label>
                <input type="text" placeholder="Batch Code..." className={classes.input}
                onChange={(e) => setBatchCode(e.target.value)}/>
               </div>

               <div className={classes.inputWrapper}>
                <label >Start Time :</label>
                <input type="time" placeholder="Start Time..." className={classes.input}
                 onChange={(e) => setStartTime(e.target.value)}/>
                 </div>
            

               
                <div className={classes.inputWrapper}>
                <label >End Time :	</label>
                <input type="time"  placeholder="End Time..." className={classes.input}
                 onChange={(e) => setEndTime(e.target.value)}/>
                 </div>

                 <div className={classes.inputWrapper}>
                <label >Date :		</label>
                <input type="date" placeholder="dd/mm/yyyy" className={classes.input}
                 onChange={(e) => setDate(e.target.value)}/>
                 </div>

                 <div className={classes.inputWrapper}>
                <label >Lecture Coverage :</label>
                <input type="text" placeholder="Lecture Coverage ..." className={classes.input}
                onChange={(e) => setLectureCoverage(e.target.value)}/>
               </div>

               <div className={classes.buttonWrapper}>
                  <button text="submit" className={classes.submitBtn}>
                  Add Student Attendance
                  </button>
               </div>
            </form>
          </div>
       </div>
    )
}

export default AddStudentAttendance