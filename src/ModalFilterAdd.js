import React from 'react'
import './ModalAdd.css'; 
import { FormFilter } from './FormFilter';

export const ModalFilterAdd = ({title,active, CloseModal, setData_mas, setPageCount, items, setCurrantPage,masLength, mainURL, setFilterValue}) => {
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
            <FormFilter setFilterValue={setFilterValue} mainURL={mainURL} masLength={masLength} setData_mas={setData_mas} setPageCount={setPageCount} items={items} setCurrantPage={setCurrantPage} CloseModal={CloseModal}/>
            </div>        
        </div>
    </div>
  )
}

