import React from 'react';
import { useForm } from 'react-hook-form'
import Multiselect from 'multiselect-react-dropdown';
import '../Form.css'; 

const FormFilter = ({CloseModal,setFilterValue,setFormInputsFilter}) => {
const {register,formState:{errors, isValid}, handleSubmit} = useForm();

let name_is = React.createRef();
let dom_name = React.createRef();
let type_dns = React.createRef();
let status = React.createRef();


const onSubmit = React.useCallback((data) => {

  let name = name_is.current.getSelectedItems(); 
  let dom = dom_name.current.getSelectedItems(); 
  let type = type_dns.current.getSelectedItems(); 
  let stat = status.current.getSelectedItems(); 

  setFilterValue('');

  setFormInputsFilter({names:name,doms:dom,types:type,stats:stat});
  name.forEach(item => setFilterValue(prev=>(prev+"&name_is="+ item)));
  dom.forEach(item => setFilterValue(prev=>(prev+"&dom_name="+ item)));
  type.forEach(item => setFilterValue(prev=>(prev+"&type_dns="+ item)));
  stat.forEach(item => setFilterValue(prev=>(prev+"&status="+ item)));
  if(data.vnutr!==""){
    setFilterValue(prev=>(prev+"&internal_network="+data.vnutr));
  }
  if(data.vnesh!==""){
    setFilterValue(prev=>(prev+"&external_network="+data.vnesh));
  }
  
  CloseModal();
},[CloseModal, dom_name, name_is, setFilterValue, setFormInputsFilter, status, type_dns]);



  const styleSelectBox={
    option: {
      'color': '#46588B',
    },
    optionContainer:{
      'font-family': 'Open Sans',
      'font-style': 'normal',
      'font-weight': '400',
      'font-size': '12px',
      'line-height': '16px',
      'background-color':'white',
    },
    multiselectContainer: { // To change css for multiselect (Width,height,etc..)
      'width': '100%',
      'margin': '0px 0px 16px 0px',
      },
      searchBox: {
        'padding': '20px 12px 8px 12px',
        'border': '1px solid #DADEE8',
        'color': '#909BB9',
        'border-radius': '12px',
        },
        chips: { // To change css chips(Selected options)
          'background': '#97C1FF',
          'color':'#46588B',
          },
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='field sel'>
        <label for="field2">Продукт</label>
          <Multiselect
          style={styleSelectBox}
          isObject={false}
          options={['Видеонаблюдение','Госуслуги МФЦ','ЕМИАС','Интернет-пространство','Ит Сервис','Комплекс городского хозяйства','Культура и бизнес']} 
          showCheckbox
          showArrow
          closeIcon='circle'
          ref={name_is}
          />
          </div>
          <div className='field sel'>
        <label for="field2">Доменное имя</label>
          <Multiselect
          style={styleSelectBox}
          isObject={false}
          options={['Option1','Option2']} 
          showCheckbox
          showArrow
          closeIcon='circle'
          ref={dom_name}
          />
          </div>
          <div className='field sel'>
        <label for="field2">Тип записи DNS</label>
          <Multiselect
          style={styleSelectBox}
          isObject={false}
          options={['A','CNAME','MX','TXT']} 
          showCheckbox
          showArrow
          closeIcon='circle'
          ref={type_dns}
          />
          </div>
          <div className='field sel'>
        <label for="field2">Тип заявки</label>
          <Multiselect
          style={styleSelectBox}
          isObject={false}
          options={['Создание','Регистрация','Изменение','Удаление']} 
          showCheckbox
          showArrow
          closeIcon='circle'
          onSelect={(event)=>(event.onSelect)}
          ref={status}
          />
          </div>
          <div className='field inpt'>
            <label for="field2">Внутреннее содержание</label>
            <input className='field2'
            {...register('vnutr')}
            />
          </div>
          <div className='field inpt'>
            <label for="field2">Внешнее содержание</label>
            <input className='field2'
            {...register('vnesh')}
            />
          </div>
          <div className='ModalFooter'>
          <div>{(errors.vnutr || 
                 errors.vnesh) && <p className='warningMark'>Все поля обязательны к заполнению</p>}</div>
            <button className='btn CloseBtn' onClick={CloseModal}>Отмена</button>
            <input className='btn SaveBtn' type='submit' value="Сохранить" disabled={!isValid}/>
          </div>
    </form>
  )
}
export default FormFilter