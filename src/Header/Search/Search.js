import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter } from '@fortawesome/free-solid-svg-icons'
import ModalAdd from '../Buttons/Request/ModalAdd'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ModalFilterAdd from '../Buttons/Filter/ModalFilterAdd'
import './Search.css'

 const Search = ({setSearchValue, setCurrantPage, setData_mas, setPageCount, items, masLength, mainURL, setFormInputsFilter}) => {
    const [showModalAdd,setShowModalAdd] = React.useState(false);
    const [showModalFilterAdd,setShowModalFilterAdd] = React.useState(false);
    const [count, setCount] = React.useState('');
    const CloseModal=()=>{
      setShowModalAdd(false);
      setShowModalFilterAdd(false);
    }
    const SearchItem=()=>{
      setSearchValue("q="+count);
      setCurrantPage(1);
    }
  return (
    <div className='HeaderRow'>
    <div className='MainInputDiv'>
    <input value={count} onChange={(event)=>setCount(event.target.value)} className='MainInput' placeholder="Искать"></input><FontAwesomeIcon className='IconSearch' onClick={()=>{SearchItem(count)}} icon={faSearch} />
    </div>
    <button onClick={()=>{setShowModalFilterAdd(true)}} className='Filter'><FontAwesomeIcon icon={faFilter} /></button>
    <button onClick={()=>{setShowModalAdd(true)}} className='AddNewRow'>Добавить</button>
    <ModalAdd title="Заявка" mainURL={mainURL} masLength={masLength} setCurrantPage={setCurrantPage} items={items} setPageCount={setPageCount} setData_mas={setData_mas} active={showModalAdd} CloseModal={CloseModal}>
    </ModalAdd>
    <ModalFilterAdd setCurrantPage={setCurrantPage} setFormInputsFilter={setFormInputsFilter} title="Фильтр" active={showModalFilterAdd} CloseModal={CloseModal}/>
    </div>
  )
}
export default Search;