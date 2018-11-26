import React from 'react';

const Filter = ({sortBy, onSortByChange, greased, onGreasedChange, showHidden, onShowHiddenChange}) => {
  return (
    <div className="ui menu">
      <div className="item">
        <label>Sort By:</label>
      </div>
      <div className="ui item">
        <select className="ui selection dropdown"
            onChange={(event) => onSortByChange(event.target.value)}
            value={sortBy}>
          <option value="name">Name</option>
          <option value="weight">Weigth</option>
        </select>
      </div>
      <div className="item">
        <label>Greased Pigs Only</label>
      </div>
      <div className="item">
        <input className="ui toggle checkbox"
            checked={greased}
            onChange={(event) => onGreasedChange()}
            type="checkbox" />
      </div>
      <div className="ui right menu">
        <div className="item">
          <button className="ui blue basic button compact"
              onClick={(event) => onShowHiddenChange()}>
            {showHidden ? "Hide Hidden" : "Show Hidden"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
