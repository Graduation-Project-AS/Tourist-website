import React from 'react'
import './CardFilter.css'
const CardFilter = () => {
  return (
    <div className='card-filter'>
      <h2 className='filter-title'>Hotels</h2>
      <input type="text" className='filter-inp'  placeholder='Key word..' />
      <button className='search-btn'>Search</button>
      <div className="filter-table">
          <div className="date-filter">
              <label htmlFor="">Date</label>
              <input type="text" />
          </div>
          <div className="line"></div>
          <div className="categories-filter">
            <h2>Categories</h2>
            <div className="checkbox">
                <label><input type="checkbox" value=""/>option 1</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/>option 1</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/>option 1</label>
            </div>
          </div>
          <div className="line"></div>
          <div className="ranking-filter">
            <h2>Ranking</h2>
            <div className="checkbox">
                <label><input type="checkbox" value=""/>option 1</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/>option 1</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/>option 1</label>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default CardFilter
