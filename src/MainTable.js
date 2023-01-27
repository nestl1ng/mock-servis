import React from 'react'
import MainTableOut from './MainTableOut';
import TableRowView from './TableRowView';
const MainTable=({searchValue, setPageCount, items, currantPage, data_mas, setData_mas, setMasLength,mainURL,filterValue})=> {
	const [showRowView,setShowRowView] = React.useState(false);
	const [parapmsRow,setParapmsRow] = React.useState([]);
	const CloseView=()=>{
		setShowRowView(false);
	  }
  return (
      <div className='lol'>
        <table className="MainTable">
	<thead>
		<tr>
			<th>Статус</th>
			<th>Доменное имя</th>
			<th>Тип DNS записи</th>
			<th>Номер обращения HPSM</th>
			<th>Наименование ИС</th>
			<th>Для внутренней сети</th>
			<th>Для внешней сети</th>
      		<th>Дата</th>
		</tr>
	</thead>
			<MainTableOut filterValue={filterValue} mainURL={mainURL} setMasLength={setMasLength} setParapmsRow={setParapmsRow} setShowRowView={setShowRowView} data_mas={data_mas} setData_mas={setData_mas} items={items} setPageCount={setPageCount} searchValue={searchValue}  currantPage={currantPage}/>
</table>
	<TableRowView CloseView={CloseView} active={showRowView} parapmsRow={parapmsRow}/>
      </div>
  )
}
export default MainTable;