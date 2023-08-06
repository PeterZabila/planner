import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../reducers/filter';
import plus from '../../images/plus.svg';
import sort from '../../images/sort.svg';
import category from '../../images/category.svg';
import './buttons.css';

const Buttons = () => {

const [ category, setCategory ] = useState("");
const [ sortBy, setSortBy ] = useState("");
const [ filterSet, setFilterSet] = useState([])

const dispatch = useDispatch();

const handleChange = (e) => {
    // setFilterSet([...filterSet, e.target.value ]);
    // dispatch(setFilter(e.target.value));
}

  return (
    <div className='buttons-wrapper'>
        <div className='buttons'>
                <div className='selectible btn-item'>
                        {/* <span className='btn-text'>Category</span> */}
                        <select onChange={handleChange} name="category" className='items-select' style={{backgroundImage:(` url${category}`)}}>
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
                        {/* <span className='btn-text'>Category</span> */}
                        <select name="sort" onChange={handleChange} className='items-select' style={{backgroundImage:(` url${sort}`)}}>
                            <option className='opt' value="Sort by">Sort by</option>
                            <option className='opt' value="by name">by name</option>
                            <option className='opt' value="by data">by data</option>
                            <option className='opt' value="by priority">by priority</option>
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
