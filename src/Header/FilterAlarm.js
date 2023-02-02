import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const FilterAlarm = ({formInputsFilter,setFilterValue}) => {


    const deleteFilter=(typeStrFilter,typeFilter)=>{
      setFilterValue(prev=>prev.replaceAll(typeStrFilter, "").trim());
      formInputsFilter[typeFilter].forEach(value=>setFilterValue(prev=>prev.replace(value, "")));
      formInputsFilter[typeFilter].length=0;
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
    </div>
  );
};
export default FilterAlarm;
