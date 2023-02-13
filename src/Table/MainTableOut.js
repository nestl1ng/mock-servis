import React from 'react'
import axios from 'axios';

const MainTableOut = ({searchValue, setPageCount, items, currantPage, data_mas, setData_mas,setShowRowView, setParapmsRow, setMasLength,mainURL,formInputsFilter}) => {
	const url = mainURL+"?_page="+currantPage+"&_limit="+items;

	function OpenRow(params){
		setShowRowView(true);
		setParapmsRow(params);
	}
	
	React.useEffect(() => {
		let FilterUrl ='';
		Object.keys(formInputsFilter).forEach(function(key) {
			if((typeof this[key]!== "undefined")&&(this[key].length!==0)){
				if((key==="&internal_network=")||(key==="&external_network=")){
					FilterUrl += key + this[key];
				} else
				this[key].forEach(element => FilterUrl += key + element);
			}
		  }, formInputsFilter);

		axios.get(url+"&"+searchValue+FilterUrl).then((response) => {
			setData_mas(response.data);
		});
		axios.get(mainURL+"?"+searchValue+FilterUrl).then((response) => {
			setMasLength(response.data.length);
			setPageCount(response.data.length/items);
		});
	  }, [currantPage, items, setData_mas, setPageCount, url,setMasLength, mainURL, searchValue,formInputsFilter]);

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
export default MainTableOut;