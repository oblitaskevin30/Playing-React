import { useState } from 'react'


function App() {
  const DEFAULT_TODOS = [
    {
    "id":1,
    "title" : "hacer un pollito",
    "complete" : false
    },
    {
      "id":2,
      "title" : "hacer un pollito 2",
      "complete" : false
    },
    {
      "id":3,
      "title" : "hacer un pollito 3",
      "complete" : false
    }
  ]

  const [todo,setTodo] = useState(DEFAULT_TODOS);
  return (
    <>
      <h1 className='text-3xl font-bold
      underline'>
        TODO APP
      </h1>
      <div>
        {todo.map(elelemt =>{
          return (
            <li>
            {elelemt.id}
            {elelemt.title}
            </li>
          )

        })}
      </div>

      {JSON.stringify(todo)}


    </>
  )
}

export default App
