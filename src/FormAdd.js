import { useForm } from 'react-hook-form'
import axios from 'axios';

const FormAdd = ({CloseModal,setData_mas, setPageCount, items, setCurrantPage, masLength,mainURL}) => {
const {register,formState:{errors, isValid}, handleSubmit} = useForm();
function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return yy + '-' + mm + '-' + dd;
}
let date = new Date();

  const onSubmit = (data) => {
    const lol = {
      id: masLength+1,
      status: data.status,
      dom_name: data.dom_name,
      type_dns: data.type_dns,
      hpsm: "",
      name_is: data.name_is,
      internal_network: data.internal_network,
      external_network: data.external_network,
      date: formatDate(date),
      inform: "",
      znach_is: "",
      zayav: data.zayav,
      polz_dom: data.polz_dom,
      fio: data.fio,
      osnov: data.osnov
    };
      axios.post(mainURL,lol).then((response) => {
        setData_mas(prev=>[...prev,response.data]);
      });
       axios.get(mainURL).then((response) => {
         setPageCount((response.data.length+1)/items);
        setCurrantPage(0);
        CloseModal();
 });

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='field sel'>
        <label for="field2">Продукт</label>
          <select className='field2' {...register("name_is")}> 
            <option value="Видеонаблюдение">Видеонаблюдение</option>
            <option value="Госуслуги МФЦ">Госуслуги МФЦ</option>
            <option value="ЕМИАС">ЕМИАС</option>
            <option value="Интернет-пространство">Интернет-пространство</option>
            <option value="Ит Сервис">Ит Сервис</option>
            <option value="Комплекс городсого хозяйства">Комплекс городсого хозяйства</option>
            <option value="Культура и бизнес">Культура и бизнес</option>
          </select>
          </div>
          <div className='field inpt'>
          <label for="field2">Доменное имя</label>
          {/* <input className='field2' name="inform"></input> */}
            <input className='field2'
            {...register('dom_name',{required:true})}
            />
          </div>
          <div className='field sel'>
            <label for="field2">Тип записи</label>
            <select className='field2' {...register("type_dns")}> 
              <option value="A">A</option>
              <option value="CNAME">CNAME</option>
              <option value="MX">MX</option>
              <option value="TXT">TXT</option>
            </select>
          </div>
          <div className='field inpt'>
            <label for="field2">Внутреннее содержание</label>
            <input className='field2'
            {...register('internal_network',{required:true})}
            />
          </div>
          <div className='field inpt'>
            <label for="field2">Внешнее содержание</label>
            <input className='field2'
            {...register('external_network',{required:true})}
            />
          </div>
          <div className='field sel'>
            <label for="field2">Тип заявки</label>
            <select className='field2' {...register("status")}> 
              <option value="Создание">Создание</option>
              <option value="Регистрация">Регистрация</option>
              <option value="Изменение">Изменение</option>
              <option value="Удаление">Удаление</option>
            </select>
          </div>
          <div className='field inpt'>
            <label for="field2">Заявитель</label>
            <input className='field2'
            {...register('zayav',{required:true})}
            />
          </div>
          <div className='field inpt'>
            <label for="field2">Пользователь домена</label>
            <input className='field2'
            {...register('polz_dom',{required:true})}
            />
          </div>
          <div className='field inpt'>
            <label for="field2">ФИО пользователя домена</label>
            <input className='field2'
            {...register('fio',{required:true})}
            />
          </div>
          <div className='field inpt'>
            <label for="field2">Основание</label>
            <input className='field2'
            {...register('osnov',{required:true})}
            />
          </div>
          <div className='modal_footer'>
          <div>{(errors.dom_name || 
            errors.internal_network || 
            errors.external_network || 
            errors.zayav ||
            errors.polz_dom ||
            errors.fio ||
            errors.osnov) && <p className='warningMark'>Все поля обязательны к заполнению</p>}</div>
            <button className='btn close_btn' onClick={CloseModal}>Отмена</button>
            <input className='btn save_btn' type='submit' value="Сохранить" disabled={!isValid}/>
            {/* onClick={createPost1} */}
          </div>
    </form>
  )
}
export default FormAdd;
