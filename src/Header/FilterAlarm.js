import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const FilterAlarm = ({setFormInputsFilter,formInputsFilter,setFilterValue,filterValue}) => {
  const [activeStateOne, setActiveStateOne] = React.useState(false);
  const [activeStateTwo, setActiveStateTwo] = React.useState(false);
  const [activeStateTree, setActiveStateTree] = React.useState(false);
  const [activeStateFour, setActiveStateFour] = React.useState(false);

  const [namesInput, setNamesInput] = React.useState();
  const [domInput, setDomInput] = React.useState();
  const [typeInput, setTypeInput] = React.useState();
  const [statInput, setStatInput] = React.useState();

    // React.useEffect(()=>{
    //     console.log(filterValue);
    // },[filterValue])

  const deleteFilterName = () => {
    setFilterValue(
      filterValue
        .replaceAll("&name_is=", "")
        .slice(formInputsFilter.names.join("").length)
    );
    setActiveStateOne(false);
  };
  const deleteFilterDom = () => {
    setFilterValue(
      filterValue
        .replaceAll("&dom_name=", "")
        .slice(formInputsFilter.doms.join("").length)
    );
    setActiveStateTwo(false);
  };
  const deleteFilterType = () => {
    setFilterValue(
      filterValue
        .replaceAll("&type_dns=", "")
        .slice(formInputsFilter.types.join("").length)
    );
    setActiveStateTree(false);
  };
  const deleteFilterStat = () => {
    setFilterValue(
      filterValue
        .replaceAll("&status=", "")
        .slice(formInputsFilter.stats.join("").length)
    );
    setActiveStateFour(false);
  };

  React.useEffect(() => {
    if ((typeof formInputsFilter.names !== "undefined")&&(formInputsFilter.names.length!==0)) {
      setNamesInput("Наименование ИС: " + formInputsFilter.names.join(", "));
      setActiveStateOne(true);
    }
    if ((typeof formInputsFilter.doms !== "undefined")&&(formInputsFilter.doms.length!==0)) {
        setDomInput("Доменное имя: " + formInputsFilter.doms.join(", "));
      setActiveStateTwo(true);
    }
    if ((typeof formInputsFilter.types !== "undefined")&&(formInputsFilter.types.length!==0)) {
        setTypeInput("Тип DNS записи: " + formInputsFilter.types.join(", "));
      setActiveStateTree(true);
    }
    if ((typeof formInputsFilter.stats !== "undefined")&&(formInputsFilter.stats.length!==0)) {
        setStatInput("Статус: " + formInputsFilter.stats.join(", "));
      setActiveStateFour(true);
    }
  }, [formInputsFilter, namesInput]);

//   let domsInput = formInputsFilter.doms;
//   let typesInput = formInputsFilter.types;
//   let statsInput = formInputsFilter.stats;

  return (
    <div className="FilterAlarm">
      <span className={`FilterInputsAlarm ${activeStateOne ? "active" : ""}`}>
        {namesInput}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilterName();
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${activeStateTwo ? "active" : ""}`}>
        {domInput}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilterDom();
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${activeStateTree ? "active" : ""}`}>
        {typeInput}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilterType();
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${activeStateFour ? "active" : ""}`}>
        {statInput}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilterStat();
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
    </div>
  );
};
export default FilterAlarm;
