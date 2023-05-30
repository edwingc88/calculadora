import { useState } from 'react'
import './App.css'
import Botones from './components/Botones'

function App () {
  const [entrada, setEntrada] = useState('')
  const addEntrada = (value:string) => {
    console.log('User click')
    let aux = entrada
    setEntrada(aux += value)
  }

  const clearEntrada = () => {
    setEntrada('')
  }

  const deleteEliminar = () => {
    console.log('Delete entrada')
    const aux = entrada
    console.log(aux.slice(0, aux.length - 1))
    setEntrada(aux.slice(0, aux.length - 1))
  }

  return (
    <main className=' h-screen w-screen flex align-middle justify-cente bg-gray-700'>
      <section className='container w-1/3 px-4 m-auto h-1/2'>
        <h1 className='text-white text-2xl text-center'>CALCULADORA</h1>
        <div className='p-6 text-center bg-gray-200 w-full rounded-md shadow-sm text-gray-800'>
          {entrada}
        </div>
        <Botones entradaClick={addEntrada} clearClick={clearEntrada} deleteClick={deleteEliminar} />
      </section>
    </main>
  )
}

export default App
