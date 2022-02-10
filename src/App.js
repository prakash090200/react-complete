import React from 'react'
import Header from "./Mycomponents/Header";
import Footer from "./Mycomponents/Footer";
import Todos from "./Mycomponents/Todos";
import  { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Part3 from "./Mycomponents/Part3";
import Part4 from "./Mycomponents/Part4";
import Part5 from "./Mycomponents/Part5";
import Part6 from "./Mycomponents/Part6";
import Part7 from "./Mycomponents/Part7";
import Part8 from "./Mycomponents/Part8";
import Part9 from "./Mycomponents/Part9";
import Part10 from "./Mycomponents/Part10";
import Part11 from "./Mycomponents/Part11";
import Part12 from "./Mycomponents/Part12";
import Part13 from "./Mycomponents/Part13";
import Part14 from "./Mycomponents/Part14";
import Part15 from "./Mycomponents/Part15";
import Part16 from "./Mycomponents/Part16";
import Part17a from "./Mycomponents/Part17a";
import Part18 from "./Mycomponents/Part18";
import Part19a from "./Mycomponents/Part19a";
import Part20 from "./Mycomponents/Part20";
import Part21 from "./Mycomponents/Part21";
import Part22 from "./Mycomponents/Part22";
import Part23a from "./Mycomponents/Part23a";
import Part24 from "./Mycomponents/Part24";
import Part24b from "./Mycomponents/Part24b";
import Part25 from "./Mycomponents/Part25";
import Part26 from "./Mycomponents/Part26";
import Part27 from "./Mycomponents/Part27";
// import Part28 from "./Mycomponents/Part28";
import Part29 from "./Mycomponents/Part29";
import Part30 from "./Mycomponents/Part30";
import Part31 from "./Mycomponents/Part31";
const App = () => {
  const ondelete=(xy)=>{
  console.log("nice",xy);
  setTodos(todos.filter((e)=>{
  return e!==xy;}
  ));
  }
  const [todos, setTodos] = useState([
    {
    sno:1,
    title:"pk1",
    desc:"nice boy"
  },
  {
    sno:2,
    title:"pk2",
    desc:"nicee boy"
  },
  {
    sno:3,
    title:"pk3",
    desc:"niceee boy"
  },
]);
function apple(){
  document.write("nice");
  alert("completed");
}
  return (
    <>
    <Header title="rc" searchbar={"false"}/>
    <Todos abc={todos} ondel={ondelete}/>
    <Part3/> {/* onclick event  */}
    <Part4/>  {/* useState in functional component */}
    <Part5 todo={todos} other={{name:"pk1",email:"pk@"}} call={apple}/>  {/* props */}
    <Part6/>   {/* get input Box value */}
    <Part7/>   {/* Hide and Show */}
    <Part8/>   {/* Basic form */} 
    <Part9/>   {/* if-else-if */}
    <Part10/>  {/*  shouldComponentUpdate */}
    <Part11/>  {/* componentWillUnmount will be called when any component is removed from DOM */}
    <Part12/>  {/*  Hooks : useEffect */}
    <Part13/>  {/* CSS in react */}
   <Part14/>   {/* Bootstrap in React */}
   <Part15/>   {/* Handle Array with list + map fucntion */}
   <Part16/>   {/* Nested list with nested array */}
   <Part17a/>  {/* Reuse a React component inside map(loop) */}
   <Part18/>   {/* child to parent data transfer */}
   <Part19a/>  {/* Pure Component in class component*/}
   <Part20/>   {/* useMemo : Pure Component in function component */}
   <Part21/>   {/* Ref in react */}
   <Part22/>   {/* useRef for funct component */}
   <Part23a/>   {/* forwardRef for accessing element present in 2 diff components */}
   <Part24/>   {/* Controlled component */}
   <Part24b/>   {/* UnControlled component */}
   <Part25/>   {/* HOC (Higher Order Component) */}
    <Router><Part26/> </Router> {/*  Routing */}
    <Part27/>    {/* Dynamic routing */}
    {/* <Part28/>   GET METHOD in API */}
    <Part29/>   {/* POST METHOD in API*/}    {/*******  VERY VERY IMP ***********/}
    <Part30/>   {/* previous state */}
    <Part31/>    {/* previous props */}
   <Footer/>
    </>
  )
}

export default App;
