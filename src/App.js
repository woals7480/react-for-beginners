import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick = () =>{setValue((prev) => prev + 1)}
  const onChange = (event) => {setKeyword(event.target.value)}
  console.log("i run all the time")
  useEffect(()=>{console.log("CALL THE API...")}, []) //정렬에 아무것도 없으니까 한 번만 실행
  useEffect(()=>{
    if(keyword !== "" && keyword.length >= 5){console.log("SEARCH FOR ", keyword)}
  }, [keyword]) //keyword가 변화 될 때 마다 코드실행
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"}/>
      <button onClick={onClick}>click me</button>
    </div>
  );
}


export default App;
