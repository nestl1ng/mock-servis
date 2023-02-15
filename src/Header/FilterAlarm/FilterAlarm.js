import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import './FilterAlarm.css'

const FilterAlarm = ({formInputsFilter,setFormInputsFilter}) => {

    const ActiveEll=(key)=>{
        if((typeof formInputsFilter[key]!== "undefined")&&(formInputsFilter[key].length!==0)){
           return true;
        } else return false; 
    }

  return (
    <div className="FilterAlarm">
      <span className={`FilterInputsAlarm ${ActiveEll('&name_is=') ? "active" : ""}`}>
        {'Наименование ИС: '+formInputsFilter['&name_is=']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            setFormInputsFilter({...formInputsFilter,'&name_is=':''})
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('&dom_name=') ? "active" : ""}`}>
        {'Доменное имя: '+formInputsFilter['&dom_name=']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            setFormInputsFilter({...formInputsFilter,'&dom_name=':''})
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('&type_dns=') ? "active" : ""}`}>
        {'Тип DNS записи: '+formInputsFilter['&type_dns=']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            setFormInputsFilter({...formInputsFilter,'&type_dns=':''})
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('&status=') ? "active" : ""}`}>
        {'Статус: '+formInputsFilter['&status=']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            setFormInputsFilter({...formInputsFilter,'&status=':''})
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('&internal_network=') ? "active" : ""}`}>
        {'Внутренняя сеть: '+formInputsFilter['&internal_network=']}
        <FontAwesomeIcon
          onClick={() => {
            setFormInputsFilter({...formInputsFilter,'&internal_network=':''})
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${ActiveEll('&external_network=') ? "active" : ""}`}>
        {'Внешняя сеть: '+formInputsFilter['&external_network=']}
        <FontAwesomeIcon
          onClick={() => {
            setFormInputsFilter({...formInputsFilter,'&external_network=':''})
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
    </div>
  );
};
export default FilterAlarm;
