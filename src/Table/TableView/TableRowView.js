import React from 'react'
import './ViewRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const TableRowView = ({active,CloseView,parapmsRow})=> {
    if(!active){
        return null;
    };
  return (
    <div className='RowView'>
    <div className='HeaderRowView'>
        <button className='CloseBtnView' onClick={CloseView}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
        <div className='TextHeader'>
            <h1 className='MainTextView'>{parapmsRow.dom_name}</h1>
            <h3 className='postMainTextView'>Дата создания: {parapmsRow.date}</h3>
        </div>
      </div>
    <div className='FirstView pos1'>
        <div className='DivFirstView'>
            <h3 className='MainTitle FirstType'>Тип заявки</h3>
            <h3 className='Title SecondType'>{parapmsRow.status}</h3>
        </div>  
        <div className='DivFirstView'>
            <h3 className='MainTitle FirstType'>Номер обращения</h3>
            <h3 className='Title SecondType'>{parapmsRow.hpsm}</h3>
        </div>
        <div className='DivFirstView'>
            <h3 className='MainTitle FirstType'>Продукт</h3>
            <h3 className='Title SecondType'>{parapmsRow.name_is}</h3>
        </div>
    </div>
    <div className='SecondView'>
    <div className='inLine'>
        <div className='DivFirstView'>
            <h3 className='MainTitle FirstType'>Доменное имя</h3>
            <h3 className='Title SecondType'>{parapmsRow.dom_name}</h3>
        </div>
        <div className='DivFirstView'>
            <h3 className='MainTitle FirstType'>Информационная система</h3>
            <h3 className='Title SecondType'>{parapmsRow.inform}</h3>
        </div>
    </div>
        <div class="Line2"></div>
        <div className='DivFirstView long'>
            <h3 className='MainTitle FirstType'>Назначение ИС</h3>
            <h3 className='Title SecondType'>{parapmsRow.znach_is}</h3>
        </div>
    </div>
    <div className='FirstView pos2'>
        <div className='DivFirstView'>
            <h3 className='MainTitle FirstType'>Тип записи DNS</h3>
            <h3 className='Title SecondType'>{parapmsRow.type_dns}</h3>
        </div>  
        <div className='DivFirstView'>
            <h3 className='MainTitle FirstType'>Содержание для внутренней сети</h3>
            <h3 className='Title SecondType'>{parapmsRow.internal_network}</h3>
        </div>
        <div className='DivFirstView'>
            <h3 className='MainTitle FirstType'>Содержание для внешней сети</h3>
            <h3 className='Title SecondType'>{parapmsRow.external_network}</h3>
        </div>
    </div>
    <div className='ThirdView column'>
        <div className='DivFirstView long'>
            <h3 className='MainTitle FirstType'>Заявитель</h3>
            <h3 className='Title SecondType'>{parapmsRow.zayav}</h3>
        </div>  
        <div class="Line2"></div>
        <div className='DivFirstView long'>
            <h3 className='MainTitle FirstType'>Пользователь домена</h3>
            <h3 className='Title SecondType'>{parapmsRow.polz_dom}</h3>
        </div>
        <div class="Line2"></div>
        <div className='DivFirstView long'>
            <h3 className='MainTitle FirstType'>ФИО пользователя домена</h3>
            <h3 className='Title SecondType'>{parapmsRow.fio}</h3>
        </div>
        <div class="Line2"></div>
        <div className='DivFirstView long'>
            <h3 className='MainTitle FirstType'>Основание</h3>
            <h3 className='Title SecondType'>{parapmsRow.osnov}</h3>
        </div>
    </div>
    </div>
  )
}
export default TableRowView;