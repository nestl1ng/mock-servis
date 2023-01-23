import React from 'react'
import './ViewRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export const TableRowView = ({active,CloseView,parapmsRow})=> {
    if(!active){
        return null;
    };
  return (
    <div className='RowView'>
    <div className='HeaderRowView'>
        <button className='close_btn_View' onClick={CloseView}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
        <div className='TextHeader'>
            <h1 className='MainTextView'>{parapmsRow.dom_name}</h1>
            <h3 className='postMainTextView'>Дата создания: {parapmsRow.date}</h3>
        </div>
      </div>
    <div className='first_View pos1'>
        <div className='div_first_View'>
            <h3 className='MainTitle first_type'>Тип заявки</h3>
            <h3 className='Title second_type'>{parapmsRow.status}</h3>
        </div>  
        <div className='div_first_View'>
            <h3 className='MainTitle first_type'>Номер обращения</h3>
            <h3 className='Title second_type'>{parapmsRow.hpsm}</h3>
        </div>
        <div className='div_first_View'>
            <h3 className='MainTitle first_type'>Продукт</h3>
            <h3 className='Title second_type'>{parapmsRow.name_is}</h3>
        </div>
    </div>
    <div className='second_View'>
    <div className='inLine'>
        <div className='div_first_View'>
            <h3 className='MainTitle first_type'>Доменное имя</h3>
            <h3 className='Title second_type'>{parapmsRow.dom_name}</h3>
        </div>
        <div className='div_first_View'>
            <h3 className='MainTitle first_type'>Информационная система</h3>
            <h3 className='Title second_type'>{parapmsRow.inform}</h3>
        </div>
    </div>
        <div class="Line2"></div>
        <div className='div_first_View long'>
            <h3 className='MainTitle first_type'>Назначение ИС</h3>
            <h3 className='Title second_type'>{parapmsRow.znach_is}</h3>
        </div>
    </div>
    <div className='first_View pos2'>
        <div className='div_first_View'>
            <h3 className='MainTitle first_type'>Тип записи DNS</h3>
            <h3 className='Title second_type'>{parapmsRow.type_dns}</h3>
        </div>  
        <div className='div_first_View'>
            <h3 className='MainTitle first_type'>Содержание для внутренней сети</h3>
            <h3 className='Title second_type'>{parapmsRow.internal_network}</h3>
        </div>
        <div className='div_first_View'>
            <h3 className='MainTitle first_type'>Содержание для внешней сети</h3>
            <h3 className='Title second_type'>{parapmsRow.external_network}</h3>
        </div>
    </div>
    <div className='third_View column'>
        <div className='div_first_View long'>
            <h3 className='MainTitle first_type'>Заявитель</h3>
            <h3 className='Title second_type'>{parapmsRow.zayav}</h3>
        </div>  
        <div class="Line2"></div>
        <div className='div_first_View long'>
            <h3 className='MainTitle first_type'>Пользователь домена</h3>
            <h3 className='Title second_type'>{parapmsRow.polz_dom}</h3>
        </div>
        <div class="Line2"></div>
        <div className='div_first_View long'>
            <h3 className='MainTitle first_type'>ФИО пользователя домена</h3>
            <h3 className='Title second_type'>{parapmsRow.fio}</h3>
        </div>
        <div class="Line2"></div>
        <div className='div_first_View long'>
            <h3 className='MainTitle first_type'>Основание</h3>
            <h3 className='Title second_type'>{parapmsRow.osnov}</h3>
        </div>
    </div>
    </div>
  )
}
