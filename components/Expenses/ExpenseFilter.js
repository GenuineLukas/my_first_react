import React, { useEffect, useState } from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const [year, setChangedYear] = useState("2022");

  const onChangeHandler = (e) => {
    setChangedYear(e.target.value);
    props.onFilterYearChange(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
