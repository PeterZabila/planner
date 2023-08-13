import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory, setSort } from '../../reducers/filter';
import plus from '../../images/plus.svg';
import sort from '../../images/sort.svg';
import category from '../../images/category.svg';
import './buttons.scss';

const Buttons = () => {

    const dispatch = useDispatch();
    const handleChangeSort = (e) => {
        dispatch(setSort(e.target.value))
    }

    const handleChangeCategory = (e) => {
        dispatch(setCategory(e.target.value))
    }

  return (
    <div className='buttons-wrapper'>
        <div className='buttons'>

                <div className='selectible btn-item'>
                        <select onChange={handleChangeCategory} name="category" placeholder="CCC" className='items-select' style={{backgroundImage:(` url${category}`)}}>
                            <option className='opt' value="UK">Category</option>
                            <option className='opt' value="Music">Music</option>
                            <option className='opt' value="Business">Business</option>
                            <option className='opt' value="Sport">Sport</option>
                            <option className='opt' value="Art">Art</option>
                            <option className='opt' value="Workshop">Workshop</option>
                        </select>
             
                    <img src={category} className='btn-image' alt="Category" />
                </div>
 

                <div className='selectible btn-item'>
                        <select name="sort" onChange={handleChangeSort} className='items-select' style={{backgroundImage:(` url${sort}`)}}>
                            <option className='opt' value="Sort by">Sort by</option>
                            <option className='opt' value="by name">name</option>
                            <option className='opt' value="by date asc">date asc</option>
                            <option className='opt' value="by date desc">date desc</option>
                        </select>
             
                    <img src={sort} className='btn-image' alt="Category" />
                </div>
                

            <Link to="newEvent"> 
                <button className='btn-item new-event'>
                    <img src={plus} alt="Add event" className='new-btn-image'/><span className='new-event-text'>Add event</span>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Buttons;
