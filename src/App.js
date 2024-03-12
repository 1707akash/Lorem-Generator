
import './App.css';
import './Component/Data';
import text from './Component/Data';
import Para from './Component/Para';
import {useState} from "react";


// text.map((elem,index)=>{
//   console.log(elem);
// })


function App() {

  const[indexNum , setIndex] = useState(0);

  function generateIndex(){
    const paragraphReqd = document.getElementById("numOfPara").value ;
    setIndex(paragraphReqd);
    console.log(paragraphReqd);
  }



  return (
    <>
    <h1>TIRED OF BORING LOREM IPSUM?</h1>
    <span>Paragraphs:</span>
    <input id='numOfPara' type="number" />
    <button onClick={generateIndex}>GENERATE</button>
    

    {
      text.slice(0,indexNum).map((elem,index)=>{
        return(
          <Para description={elem} key={index} />
        )
        
      })
    }
    
    </>
  );
}

export default App;
