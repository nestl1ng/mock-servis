import './App.css';
import './Table/Table.css'
import MainHeader from './Header/MainHeader';
import MainTable from './Table/MainTable';
import Pagination from './Table/Pagination/Pagination';
import { useState } from 'react';


function App() {
  //items = кол-ву строк в таблице на страницу
  const items = 4;
  const mainURL='http://localhost:3001/data';
  const [searchValue, setSearchValue] = useState('');
  const [currantPage, setCurrantPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [data_mas, setData_mas] = useState([]);
  const [masLength, setMasLength] = useState('');
  const [formInputsFilter, setFormInputsFilter] = useState({});

  return (
    <div className="App">
      <header className='App-header'>
      <MainHeader setFormInputsFilter={setFormInputsFilter} formInputsFilter={formInputsFilter} mainURL={mainURL} masLength={masLength} data_mas={data_mas} setPageCount={setPageCount} items={items} setData_mas={setData_mas} setCurrantPage={setCurrantPage} searchValue={searchValue} setSearchValue={setSearchValue} />
      <MainTable formInputsFilter={formInputsFilter} mainURL={mainURL} setMasLength={setMasLength} data_mas={data_mas} setData_mas={setData_mas} items={items} setPageCount={setPageCount} searchValue={searchValue}  currantPage={currantPage} />
      </header>
      <Pagination items={items} pageCount={pageCount} onPageChange={number=>setCurrantPage(number)} currantPage={currantPage} setCurrantPage={setCurrantPage} />
    </div>
  );
}

export default App;
