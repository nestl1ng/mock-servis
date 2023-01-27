import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter } from '@fortawesome/free-solid-svg-icons'
import ModalAdd from './ModalAdd'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ModalFilterAdd from './ModalFilterAdd'

 const Search = ({setSearchValue, setCurrantPage, setData_mas, setPageCount, items, masLength, mainURL, setFilterValue}) => {
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
    <div className='MainInput_div'>
    <input value={count} onChange={(event)=>setCount(event.target.value)} className='MainInput' placeholder="Искать"></input><FontAwesomeIcon className='icon_search' onClick={()=>{SearchItem(count)}} icon={faSearch} />
    </div>
    <button onClick={()=>{setShowModalFilterAdd(true)}} className='Filter'><FontAwesomeIcon icon={faFilter} /></button>
    <button onClick={()=>{setShowModalAdd(true)}} className='AddNewRow'>Добавить</button>
    <ModalAdd title="Заявка" mainURL={mainURL} masLength={masLength} setCurrantPage={setCurrantPage} items={items} setPageCount={setPageCount} setData_mas={setData_mas} active={showModalAdd} CloseModal={CloseModal}>
    </ModalAdd>
    <ModalFilterAdd setFilterValue={setFilterValue} title="Фильтр" active={showModalFilterAdd} CloseModal={CloseModal}/>
    </div>
  )
}
export default Search;