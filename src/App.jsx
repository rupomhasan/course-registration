import { useState } from "react";
import "./App.css";
import Aside from "./Component/Aside";
import Header from "./Component/Header";
import Main from "./Component/Main";
function App() {

  const [course , setCourse] = useState([])
  const handleToSelectCourse = (card) => {

    const newAddedCourse = [...course,card]
    setCourse(newAddedCourse)
    console.log(course)
  }

   return (
      <div className="bg-gray-50">
         <Header></Header>
         <div className="md:flex gap-10 mx-3">
            <Main handleToSelectCourse={handleToSelectCourse}></Main>
            <Aside course={course}></Aside>
         </div>
      </div>
   );
}

export default App;
