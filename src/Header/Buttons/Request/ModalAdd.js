import React from 'react'
import '../ModalAdd.css'; 
import FormAdd from './FormAdd';

 const ModalAdd = ({title,active, CloseModal, setData_mas, setPageCount, items, setCurrantPage,masLength, mainURL}) => {
    if(!active){
        return null;
    };
    
        
  return (
    <div className='Modal' onClick={CloseModal}>
        <div className='ModalContent' onClick={(event)=>event.stopPropagation()}>
            <div className='ModalHeader'>
                <div className='ModalTitle'>{title}</div>
            </div>
            <div className='ModalBody'>
              <FormAdd mainURL={mainURL} masLength={masLength} setData_mas={setData_mas} setPageCount={setPageCount} items={items} setCurrantPage={setCurrantPage} CloseModal={CloseModal}/>           
            </div>        
        </div>
    </div>
  )
}
export default ModalAdd;
