const { useState } = React;

function GreatestOfThree() {
  const [a,setA]=useState(""),[b,setB]=useState(""),[c,setC]=useState("");
  const [res,setRes]=useState("—");
  const find=()=>{
    const x=parseFloat(a),y=parseFloat(b),z=parseFloat(c);
    if([x,y,z].some(v=>Number.isNaN(v))){setRes("Enter all three numbers.");return;}
    setRes(`Greatest = ${Math.max(x,y,z)}`);
  };
  return (<div className="card">
    <div className="grid">
      <div><label>a</label><input type="number" value={a} onChange={e=>setA(e.target.value)}/></div>
      <div><label>b</label><input type="number" value={b} onChange={e=>setB(e.target.value)}/></div>
      <div><label>c</label><input type="number" value={c} onChange={e=>setC(e.target.value)}/></div>
    </div>
    <div className="controls">
      <button className="primary" onClick={find}>Find</button>
      <button className="secondary" onClick={()=>{{setA('');setB('');setC('');setRes('—')}}}>Clear</button>
    </div>
    <div className="result">{res}</div>
  </div>);
}
function App(){ return <GreatestOfThree/>; }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
