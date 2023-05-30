import Boton from './Boton'
import BotonBorrar from './BotonBorrar'
import BotonClear from './BotonClear'
import BotonIgual from './BotonIgual'
import BotonOperador from './BotonOperador'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Botones (props:any) {
  return (
    <div className=' bg-gray-50 '>
      <div className='flex flex-wrap items-center p-2 '>
        <BotonClear botonesClear={props.clearClick}>AC</BotonClear>
        <BotonOperador botonesEntrada={props.entradaClick}>( )</BotonOperador>
        <BotonOperador botonesEntrada={props.entradaClick}>%</BotonOperador>
        <BotonOperador botonesEntrada={props.entradaClick}>/</BotonOperador>
      </div>
      <div className='flex flex-wrap items-center p-2 '>
        <Boton botonesEntrada={props.entradaClick}>7</Boton>
        <Boton botonesEntrada={props.entradaClick}>8</Boton>
        <Boton botonesEntrada={props.entradaClick}>9</Boton>
        <BotonOperador botonesEntrada={props.entradaClick}>X</BotonOperador>
      </div>
      <div className='flex flex-wrap items-center p-2 '>
        <Boton botonesEntrada={props.entradaClick}>4</Boton>
        <Boton botonesEntrada={props.entradaClick}>5</Boton>
        <Boton botonesEntrada={props.entradaClick}>6</Boton>
        <BotonOperador botonesEntrada={props.entradaClick}>-</BotonOperador>
      </div>
      <div className='flex flex-wrap items-center p-2 '>
        <Boton botonesEntrada={props.entradaClick}>1</Boton>
        <Boton botonesEntrada={props.entradaClick}>2</Boton>
        <Boton botonesEntrada={props.entradaClick}>3</Boton>
        <BotonOperador botonesEntrada={props.entradaClick}>+</BotonOperador>
      </div>
      <div className='flex flex-wrap items-center p-2 '>
        <Boton botonesEntrada={props.entradaClick}>0</Boton>
        <Boton botonesEntrada={props.entradaClick}>.</Boton>
        <BotonBorrar botonesEliminar={props.deleteClick}>DEL</BotonBorrar>
        <BotonIgual>=</BotonIgual>
      </div>
    </div>
  )
}

export default Botones
