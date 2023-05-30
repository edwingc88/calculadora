// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BotonClear (props:any) {
  return (
    <div className='w-full align-middle sm:w-1/4 px-2 flex justify-center'>
      <button onClick={() => props.botonesClear()} className='text-black m-auto text-sm bg-green-300 p-4 rounded-full'>
        {props.children}
      </button>
    </div>
  )
}

export default BotonClear
