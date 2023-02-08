import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import './FilterAlarm.css'

const FilterAlarm = ({formInputsFilter,setFilterValue,filterValue}) => {
    // React.useEffect(()=>{
    //   // for(let key in formInputsFilter ){
    //   //   console.log('formInputsFilter= '+formInputsFilter[key])
    //   // }
    //   console.log('filterValue= '+filterValue);
    // },[filterValue]);

    const deleteFilter=(typeStrFilter,typeFilter)=>{
      setFilterValue(prev=>prev.replaceAll(typeStrFilter, "").trim());
      if((typeFilter==='vnutr')||(typeFilter==='vnesh')){
        let del = formInputsFilter[typeFilter];
        setFilterValue(prev=>prev.replace(del, "").trim());
      } else{
        formInputsFilter[typeFilter].forEach(value=>setFilterValue(prev=>prev.replace(value, "")));
      }
      formInputsFilter[typeFilter]= undefined;
      ActiveEll(typeFilter);
    }
    const ActiveEll=(key)=>{
        if((typeof formInputsFilter[key]!== "undefined")&&(formInputsFilter[key].length!==0)){
           return true;
        } else return false;
    }

  return (
    <div className="FilterAlarm">
      <span className={`FilterInputsAlarm ${ActiveEll('names') ? "active" : ""}`}>
        {'Наименование ИС: '+formInputsFilter['names']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilter('&name_is=','names');
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('doms') ? "active" : ""}`}>
        {'Доменное имя: '+formInputsFilter['doms']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilter('&dom_name=','doms');
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('types') ? "active" : ""}`}>
        {'Тип DNS записи: '+formInputsFilter['types']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilter('&type_dns=','types');
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('stats') ? "active" : ""}`}>
        {'Статус: '+formInputsFilter['stats']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilter('&status=','stats');
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('vnutr') ? "active" : ""}`}>
        {'Внутренняя сеть: '+formInputsFilter['vnutr']}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilter('&internal_network=','vnutr');
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('vnesh') ? "active" : ""}`}>
        {'Внешняя сеть: '+formInputsFilter['vnesh']}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilter('&external_network=','vnesh');
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
    </div>
  );
};
export default FilterAlarm;
