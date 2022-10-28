import React, { useState } from 'react';

const PacientesFilter = (props) => {
  const [paciente, setPaciente] = useState('');

  const changeHandler = ({target}) => {
    setPaciente(target.value);
    props.onClickFilter(target.value);
  }

  return (
    <div className='text-center flex justify-center'>
      <div className='p-4 m-4 mb-3 xl:w-96'>
        
        <form>
          <input type="text" value={paciente} placeholder='Busque su Paciente...' onChange={changeHandler} className='
          form-control
        block
        w-full
        px-3
        py-1.5
        text-green-dark
        font-normal
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'/>
        </form>
      </div>
    </div>
  );
};

export default PacientesFilter;