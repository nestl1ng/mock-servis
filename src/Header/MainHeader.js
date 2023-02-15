import  Search  from './Search/Search'
import './Header.css'
import FilterAlarm from './FilterAlarm/FilterAlarm'

 const MainHeader=({searchValue,setSearchValue, setCurrantPage, setData_mas, setPageCount, items, masLength, mainURL,formInputsFilter,setFormInputsFilter})=> {

  return (
    <div>
      <div className='HeaderRowMain'>
        <h1 className='MainText'>Регистрация в журнале</h1>
          <Search setFormInputsFilter={setFormInputsFilter} mainURL={mainURL} masLength={masLength} items={items} setPageCount={setPageCount} setData_mas={setData_mas} setCurrantPage={setCurrantPage} searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='Line'>
      </div>
      <FilterAlarm formInputsFilter={formInputsFilter} setFormInputsFilter={setFormInputsFilter} />
    </div>
  )
}
export default MainHeader;