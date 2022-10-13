import React, { useState } from 'react';

const PacientesFilter = (props) => {
  const [paciente, setPaciente] = useState('');

  const changeHandler = ({target}) => {
    setPaciente(target.value);
    props.onClickFilter(target.value);
  }

  return (
    <div className='text-center'>
      <div className=''>
        <label>Busque su paciente</label>
        <form>
          <input type="text" value={paciente} placeholder='Search...' onChange={changeHandler}/>
        </form>
      </div>
    </div>
  );
};

export default PacientesFilter;