import React from 'react'
import axios from 'axios';
export const MainTableOut = ({searchValue, setPageCount, items, currantPage, data_mas, setData_mas,setShowRowView, setParapmsRow, setMasLength,mainURL,filterValue}) => {
	const url = mainURL+"?_page="+currantPage+"&_limit="+items;

	function OpenRow(params){
		setShowRowView(true);
		setParapmsRow(params);
	}

	React.useEffect(() => {
		axios.get(url+"&"+searchValue+filterValue).then((response) => {
			setData_mas(response.data);
			console.log(url+"&"+searchValue+filterValue);
		});
		axios.get(mainURL+"?"+searchValue+filterValue).then((response) => {
			setMasLength(response.data.length);
			setPageCount(response.data.length/items);
		});
	  }, [currantPage, items, setData_mas, setPageCount, url,setMasLength, mainURL, searchValue,filterValue]);

	let listItems = data_mas.map((params) =>
			<tr onClick={()=>OpenRow(params)} key={params.id}>
			  <td>{params.status}</td>
			  <td>{params.dom_name}</td>
			  <td>{params.type_dns}</td>
			  <td>{params.hpsm}</td>
			  <td>{params.name_is}</td>
			  <td>{params.internal_network}</td>
			  <td>{params.external_network}</td>
			  <td>{params.date}</td>
			</tr>
		);
  return (
	<tbody>
	{listItems}
	</tbody>
  )
}
