import React from 'react'
import './ModalAdd.css'; 
import { FormAdd } from './FormAdd';

export const ModalAdd = ({title,active, CloseModal, setData_mas, setPageCount, items, setCurrantPage,masLength, mainURL}) => {
    if(!active){
        return null;
    };
    
        
  return (
    <div className='modal' onClick={CloseModal}>
        <div className='modal_content' onClick={(event)=>event.stopPropagation()}>
            <div className='modal_header'>
                <div className='modal_title'>{title}</div>
            </div>
            <div className='modal_body'>
              <FormAdd mainURL={mainURL} masLength={masLength} setData_mas={setData_mas} setPageCount={setPageCount} items={items} setCurrantPage={setCurrantPage} CloseModal={CloseModal}/>           
            </div>        
        </div>
    </div>
  )
}

