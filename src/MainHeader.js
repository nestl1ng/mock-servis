import React from 'react'
import  Search  from './Search'
 const MainHeader=({searchValue,setSearchValue, setCurrantPage, setData_mas, setPageCount, items, masLength, mainURL,setFilterValue})=> {
  return (
    <div>
      <div className='HeaderRowMain'>
        <h1 className='MainText'>Регистрация в журнале</h1>
          <Search setFilterValue={setFilterValue} mainURL={mainURL} masLength={masLength} items={items} setPageCount={setPageCount} setData_mas={setData_mas} setCurrantPage={setCurrantPage} searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='Line'>
      </div>
    </div>
  )
}
export default MainHeader;