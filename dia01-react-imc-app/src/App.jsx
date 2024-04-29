import { useState } from "react"


function App() {
  const [peso,setPeso] = useState();
  const [altura,setAltura] = useState();

  const handleChangePeso = (event) =>{
    //console.log(event)
    const value = event.target.value;
    //console.log(value)
    setPeso(value);
  }

  const handleChangeAltura= (event) =>{
    const valueAltura = event.target.value;
    setAltura(valueAltura)
  }

  return (
    <>
      <div className="w-96 mx-auto my-5 rounded-md
      bg-teal-600" >

        <h1 className="text-3xl text-center font-bold">
          IMC APP Calculator
        </h1>

        <div className="bg-sky-50 p-5">
          <p>Se requieren estos datos</p>

          <div>
            <label className="font-bold" htmlFor=""> Peso : {peso}</label>

            <input
            min = "50"
            max = "200"
            onChange={handleChangePeso}
            type="range" 
            className="w-full"/>
            
          </div>

          <div>
            <label className="font-bold" htmlFor=""> Altura : {altura}</label>
            <input min = "50" max = "200" onChange={handleChangeAltura} type="range" className="w-full" />
          </div>
        </div>
        <p className="text-2xl font-bold bg-orange-400 p-5">tu IMc es : { (peso/((altura/100)*(altura/100)))}</p>
      </div>

    </>

  )
}

export default App
