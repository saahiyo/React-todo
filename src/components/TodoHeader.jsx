import React from 'react'
import { LucideSun, Sun } from 'lucide-react'

const TodoHeader = () => {
  return (
    <div className="todo-header w-full sm:w-1/2 flex justify-between items-center">
        <h1 className='font-bold text-zinc-400 text-2xl'>React Todo</h1>
        <button className="btn p-2 rounded-full text-white">
          <Sun size={25} fill='#a1a1aa' />
        </button>
    </div>
  )
}

export default TodoHeader