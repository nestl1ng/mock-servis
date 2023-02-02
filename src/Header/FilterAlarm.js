import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const FilterAlarm = ({setFormInputsFilter,formInputsFilter,setFilterValue,filterValue}) => {
  // const [activeStateOne, setActiveStateOne] = React.useState(false);
  // const [activeStateTwo, setActiveStateTwo] = React.useState(false);
  // const [activeStateTree, setActiveStateTree] = React.useState(false);
  // const [activeStateFour, setActiveStateFour] = React.useState(false);
  const [activeState, setActiveState] = React.useState({names:false,doms:false,types:false,stats:false});
  const [nameInput, setNameInput] = React.useState({names:'Наименование ИС: ',doms:'Доменное имя: ',types:'Тип DNS записи: ',stats:'Статус: '});

  // const [namesInput, setNamesInput] = React.useState();
  // const [domInput, setDomInput] = React.useState();
  // const [typeInput, setTypeInput] = React.useState();
  // const [statInput, setStatInput] = React.useState();

    React.useEffect(()=>{
      console.log(activeState);  
    },[activeState])

    const deleteFilter=(typeStrFilter,typeFilter)=>{
      setFilterValue(prev=>prev.replaceAll(typeStrFilter, "").trim());
      formInputsFilter[typeFilter].forEach(value=>setFilterValue(prev=>prev.replace(value, "")));
      setActiveState({...activeState,[typeFilter]: false});
      setNameInput({...nameInput,[typeFilter]:nameInput[typeFilter].replace(formInputsFilter[typeFilter], "")});
    }

    
    
    React.useEffect(() => {
      for (let key in formInputsFilter) {
       if((typeof formInputsFilter[key]!== "undefined")&&(formInputsFilter[key].length!==0)){
          setNameInput({...nameInput,[key]: nameInput[key] + String(formInputsFilter[key])})
          setActiveState({...activeState,[key]: true});
       }
      }
    }, [formInputsFilter]);

   // setTimeout(() => console.log(activeState), 0)
  //   const deleteFilterName=()=> {
  //   setFilterValue(prev=>prev.replaceAll("&name_is=", "").trim());
  //   formInputsFilter['names'].forEach(value=>setFilterValue(prev=>prev.replace(value, "")));
  //   setActiveStateOne(false);
  // }
  // const deleteFilterDom = () => {
  //   setFilterValue(prev=>prev.replaceAll("&dom_name=", "").trim());
  //   formInputsFilter.doms.forEach(value=>setFilterValue(prev=>prev.replace(value, "")));
  //   setActiveStateTwo(false);
  // };
  // const deleteFilterType = () => {
  //   setFilterValue(prev=>prev.replaceAll("&type_dns=", "").trim());
  //   formInputsFilter.types.forEach(value=>setFilterValue(prev=>prev.replace(value, "")));
  //   setActiveStateTree(false);
  // };
  // const deleteFilterStat = () => {
  //   setFilterValue(prev=>prev.replaceAll("&status=", "").trim());
  //   formInputsFilter.stats.forEach(value=>setFilterValue(prev=>prev.replace(value, "")));
  //   setActiveStateFour(false);
  // };
// React.useMemo(()=>{
//   if ((typeof formInputsFilter.names !== "undefined")&&(formInputsFilter.names.length!==0)) {
//     setNamesInput("Наименование ИС: " + formInputsFilter.names.join(", "));
//     console.log("PERVIY");
//     setActiveState({...activeState,'names': true});
//   }
//   if ((typeof formInputsFilter.doms !== "undefined")&&(formInputsFilter.doms.length!==0)) {
//       setDomInput("Доменное имя: " + formInputsFilter.doms.join(", "));
//       console.log("Vtoroy");
//       setActiveState({...activeState,'doms': true});
//       //setActiveStateTwo(true);
//   }
//   if ((typeof formInputsFilter.types !== "undefined")&&(formInputsFilter.types.length!==0)) {
//       setTypeInput("Тип DNS записи: " + formInputsFilter.types.join(", "));
//       setActiveState({...activeState,'types': true});
//       //setActiveStateTree(true);
//   }
//   if ((typeof formInputsFilter.stats !== "undefined")&&(formInputsFilter.stats.length!==0)) {
//       setStatInput("Статус: " + formInputsFilter.stats.join(", "));
//       setActiveState({...activeState,'stats': true});
//       //setActiveStateFour(true);
//   }
// },[formInputsFilter]);

    // if(Array.from(formInputsFilter)){
    // formInputsFilter.forEach((value)=>{
    //   if((typeof value!== "undefined")&&(value.length!==0)){
    //     setNamesInput("Наименование ИС: " + formInputsFilter[value].join(", "));
    //     setActiveState({...activeState,[value]: true});
    //   }
    // })  
  // }
    // if ((typeof formInputsFilter.names !== "undefined")&&(formInputsFilter.names.length!==0)) {
    //   setNamesInput("Наименование ИС: " + formInputsFilter.names.join(", "));
    //   setActiveState({...activeState,'names': true});
    // }
    // if ((typeof formInputsFilter.doms !== "undefined")&&(formInputsFilter.doms.length!==0)) {
    //     setDomInput("Доменное имя: " + formInputsFilter.doms.join(", "));
    //     setActiveState({...activeState,'doms': true});
    //     //setActiveStateTwo(true);
    // }
    // if ((typeof formInputsFilter.types !== "undefined")&&(formInputsFilter.types.length!==0)) {
    //     setTypeInput("Тип DNS записи: " + formInputsFilter.types.join(", "));
    //     setActiveState({...activeState,'types': true});
    //     //setActiveStateTree(true);
    // }
    // if ((typeof formInputsFilter.stats !== "undefined")&&(formInputsFilter.stats.length!==0)) {
    //     setStatInput("Статус: " + formInputsFilter.stats.join(", "));
    //     setActiveState({...activeState,'stats': true});
    //     //setActiveStateFour(true);
    // }


//   let domsInput = formInputsFilter.doms;
//   let typesInput = formInputsFilter.types;
//   let statsInput = formInputsFilter.stats;

  return (
    <div className="FilterAlarm">
      <span className={`FilterInputsAlarm ${activeState.names ? "active" : ""}`}>
        {nameInput['names']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilter('&name_is=','names');
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${activeState.doms ? "active" : ""}`}>
        {/* {domInput}{" "} */}
        {nameInput['doms']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilter('&dom_name=','doms');
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${activeState.types ? "active" : ""}`}>
        {nameInput['types']}{" "}
        <FontAwesomeIcon
          onClick={() => {
            deleteFilter('&type_dns=','types');
          }}
          className="faWindowClose"
          icon={faWindowClose}
        />
      </span>
      <span className={`FilterInputsAlarm ${activeState.stats ? "active" : ""}`}>
        {nameInput['stats']}{" "}
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
