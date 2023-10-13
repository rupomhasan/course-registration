import { useState } from "react";
import "./App.css";
import Aside from "./Component/Aside";
import Header from "./Component/Header";
import Main from "./Component/Main";
function App() {
   const [course, setCourse] = useState([]);
   const [totalHour, setTotalHour] = useState(0);
   const [cost, setCost] = useState(0);
   const [residualCredit, setResidualCredit] = useState(0);
   const handleToSelectCourse = (card) => {
      let hour = card.credit;
      let amount = card.price;
      let remainingCredit = 30 - card.credit;
      // console.log(amount)
      const isExist = course.find((item) => item.id === card.id);
      console.log(hour);
      const newAddedCourse = [...course, card];
      isExist ? alert("You have Already InRolled") : setCourse(newAddedCourse);
      course.forEach((item) => {
         hour = hour + item.credit;
         amount = amount + item.price;
         remainingCredit -= item.credit;
      });
      hour <= 30 ? setTotalHour(hour) : alert('Your credit is too')
 
      remainingCredit < 0 ? alert ('You are remaining credit hour is less than 0') :setResidualCredit(remainingCredit)
      setCost (amount)
      console.log(remainingCredit,amount)
   };

   return (
      <div className="bg-gray-50">
         <Header length={course.length}></Header>
         <div className="md:flex gap-10 mx-3">
            <Main handleToSelectCourse={handleToSelectCourse}></Main>
            <Aside remainingCredit={residualCredit} 
            amount = {cost} creditHour={totalHour} course={course}></Aside>
         </div>
      </div>
   );
}

export default App;
