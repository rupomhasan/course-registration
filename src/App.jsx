import "./App.css";
import Aside from "./Component/Aside";
import Header from "./Component/Header";
import Main from "./Component/Main";
function App() {
   return (
      <div>
         <Header></Header>
         <div className="flex gap-10">
            <Main></Main>
            <Aside></Aside>
         </div>
      </div>
   );
}

export default App;
