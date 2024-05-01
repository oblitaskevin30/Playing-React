import { useState } from 'react'


function App() {
  const DEFAULT_TODOS = [
    {
    "id":"1",
    "title" : "hacer un pollito",
    "complete" : false
    },
    {
      "id":"2",
      "title" : "hacer un pollito 2",
      "complete" : false
    },
    {
      "id":"3",
      "title" : "hacer un pollito 3",
      "complete" : true
    },
    {
      "id":"4",
      "title" : "hacer un pollito 4",
      "complete" : false
    },
    {
      "id":"5",
      "title" : "hacer un pollito 5",
      "complete" : false
    },
    {
      "id":"6",
      "title" : "hacer un pollito 6",
      "complete" : false
    }
  ]



  const [todo,setTodo] = useState(DEFAULT_TODOS);
  const [input,setInput] = useState('')


  const handleChangeInputForm=(event,)=>{
    const inputValue= event.target.value;
    setInput(inputValue)
    
  } 

  const handleSubmitForm=(event)=>{
    event.preventDefault();
    console.log('soy el form funcionando')
    const newTodo = {
      "id":crypto.randomUUID(),
      "title" : input,
      "complete" : false
    }
    setTodo([...todo,newTodo])
  }


  const handleChangeCheckBox =(event)=>{

    const idInputValue = event.target.getAttribute("data-id");
    const ischecked = event.target.checked

    console.log(idInputValue,ischecked)

    const newTodoList = todo.map((elelemt)=>{
      if(elelemt.id === idInputValue){
        // return {...elelemt , complete : checked}
        return {...elelemt,complete : ischecked}
      }else{
        return elelemt;
      }
    })
    setTodo(newTodoList)

  }

  const handleDelete =(event)=>{

    // tarea usar el filter metthod par aobtener el nuevo arreglo newtodo
    const idDelete = event.target.dataset.id;
    // generar un nuevo arreglo con map para , en el cual 
    // eliminaremos al toDo seleccionado
    
    const newTodo = [];

    for(let i=0; i<todo.length;i++){
      if(todo[i].id !== idDelete){
        newTodo.push(todo[i]);
      }
    }

    setTodo(newTodo);
    console.log('soy el handleDelete Funcionando')
  }

  return (
    <>
    <main className='w-full max-w-xl mx-auto mt-10 rounded-lg
    bg-yellow-100 shadow-lg border border-yellow-300 p-5' >
      <h1 className='text-3xl font-bold mx-auto
      w-full text-center'>
        TODO APP
      </h1>
      <form action="" onSubmit={handleSubmitForm} >
        <div className='w-full wx-auto'>
          <label className='w-full mx-auto
          text-center'>Qué Planes Hoy?</label>
          <input type='text' 
          className='w-full borde 
          my-3 p-3' 
          onChange={handleChangeInputForm}
          required />
        </div>
        {/* <p>{input}</p> */}
      </form>

      <section className='mt-5'>
        <ul className='flex flex-col gap-3 '>
          {todo.map(elelemt =>{
            return (           
                <li key={elelemt.id} className={`text-stone-900
                ${elelemt.complete? 'line-through text-red-700' : 'text-green-600'}
                  flex w-ful justify-between `}>
                    <div className='flex
                    w-full'>
                        <input type='checkbox' checked={elelemt.complete} data-id ={elelemt.id} onChange={handleChangeCheckBox} className='m-2'  />
                        <p>{elelemt.title}</p>
                    </div>
                        <button type='button' onClick={handleDelete} data-id = {elelemt.id}>❎</button>                                                                                     
                </li>
                
            )
          })}
      </ul>
      </section>
    </main>
    </>
  )
}

export default App
