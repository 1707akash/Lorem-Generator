
import './App.css';
import './Component/Data';
import text from './Component/Data';
import Para from './Component/Para';


// text.map((elem,index)=>{
//   console.log(elem);
// })


function App() {
  return (
    <>
    <h1>TIRED OF BORING LOREM IPSUM?</h1>
    <span>Paragraphs:</span>
    <input type="number" />
    <button>GENERATE</button>
    

    {
      text.map((elem,index)=>{
        return(
          <Para description={elem} />
        )
      })
    }
    
    </>
  );
}

export default App;
