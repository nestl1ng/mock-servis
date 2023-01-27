import React from 'react'
import './ModalAdd.css'; 
import FormFilter from './FormFilter';

const ModalFilterAdd = ({title,active, CloseModal, setFilterValue}) => {
    if(!active){
        return null;
    };
        
  return (
    <div className='modal' onClick={CloseModal}>
        <div className='modal_content filter' onClick={(event)=>event.stopPropagation()}>
            <div className='modal_header'>
                <div className='modal_title'>{title}</div>
            </div>
            <div className='modal_body'>
            <FormFilter setFilterValue={setFilterValue} CloseModal={CloseModal}/>
            </div>        
        </div>
    </div>
  )
}
export default ModalFilterAdd;
