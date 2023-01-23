import React from 'react'
import { Search } from './Search'
export default function MainHeader({searchValue,setSearchValue, setCurrantPage, CurrantPage, setData_mas, setPageCount, items, masLength, mainURL,setMainURL,setFilterValue}) {
  return (
    <div>
      <div className='HeaderRowMain'>
        <h1 className='MainText'>Регистрация в журнале</h1>
          <Search setFilterValue={setFilterValue} CurrantPage={CurrantPage} setMainURL={setMainURL} mainURL={mainURL} masLength={masLength} items={items} setPageCount={setPageCount} setData_mas={setData_mas} setCurrantPage={setCurrantPage} searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='Line'>
      </div>
    </div>
  )
}
