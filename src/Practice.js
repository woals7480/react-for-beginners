import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// To Do List
// function App(){
//     const [toDo, setToDo] = useState("")
//     const [toDos, setToDos] = useState([])
//     const onChange = (event) => {setToDo(event.target.value)}
//     const onSubmit = (event) => {
//         event.preventDefault()
//         if(toDo === ""){
//             return
//         }
//         setToDos((currentArray)=>[toDo, ...currentArray])
//         setToDo("")
//     }
//     return(
//         <div>
//             <h1>My To Dos({toDos.length})</h1>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do" />
//                 <button>Add To Do</button>
//             </form>
//             <hr/>
//             <ul>
//                 {toDos.map((item,index)=><li key={index}>{item}</li>)}
//             </ul>
//         </div>
//     )
// }

//Coin Tracker
// function App(){
//     const [loading, setLoading] = useState(true)
//     const [coins, setCoins] = useState([])
//     useEffect(()=>{
//         fetch("https://api.coinpaprika.com/v1/tickers")
//         .then((response)=> response.json())
//         .then((json)=>
//             {
//             setCoins(json)
//             setLoading(false)
//             })
//     },[])
//     return(
//         <div>
//             <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
//             {loading ? <strong>Loading...</strong> : <select>
//                 {coins.map((coin)=>
//                     <option>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price}(USD)</option>
//                 )}
//             </select>}

//         </div>
//     )
// }

//Movie App

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:movieId" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
