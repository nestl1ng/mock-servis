import React from 'react';
import './App.css';
import './Table/Table.css'
import MainHeader from './Header/MainHeader';
import MainTable from './Table/MainTable';
import Pagination from './Table/Pagination/Pagination';

function App() {
  //items = кол-ву строк в таблице на страницу
  const items = 4;
  const mainURL='http://localhost:3001/data';
  const [searchValue, setSearchValue] = React.useState('');
  const [currantPage, setCurrantPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(0);
  const [data_mas, setData_mas] = React.useState([]);
  const [masLength, setMasLength] = React.useState('');
  const [filterValue, setFilterValue] = React.useState('');

  return (
    <div className="App">
      <header className='App-header'>
      <MainHeader filterValue={filterValue} setFilterValue={setFilterValue} mainURL={mainURL} masLength={masLength} data_mas={data_mas} setPageCount={setPageCount} items={items} setData_mas={setData_mas} setCurrantPage={setCurrantPage} searchValue={searchValue} setSearchValue={setSearchValue} />
      <MainTable filterValue={filterValue} mainURL={mainURL} setMasLength={setMasLength} data_mas={data_mas} setData_mas={setData_mas} items={items} setPageCount={setPageCount} searchValue={searchValue}  currantPage={currantPage} />
      </header>
      <Pagination items={items} pageCount={pageCount} onPageChange={number=>setCurrantPage(number)} currantPage={currantPage} setCurrantPage={setCurrantPage} />
    </div>
  );
}

export default App;
