import React, { useEffect, useState, useMemo } from "react";
import EventCard from "./EventCard";
import Buttons from "../Buttons/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, setCategory, setSort } from "../../reducers/filter";
import styles from "./events.module.scss";

const Events = () => {
  const events = useSelector((store) => store.events);
  const fil = useSelector((store) => store.filter.search);
  const sort = useSelector((store) => store.filter.sort);
  const category = useSelector((store) => store.filter.category);
  const dispatch = useDispatch();

  const result = useMemo(() => {
    if (fil) {
      return events.filter((item) =>
        item.title.toLowerCase().includes(fil.toLowerCase())
      );
    }
    if (category) {
      return events.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      }

    if (sort) {
        // const ascDateSort = (a, b) => {
        //     const dateA = new Date(a.date);
        //     const dateB = new Date(b.date);
        //     if (dateA > dateB) return 1;
        //     else if (dateA < dateB) return -1;
        //     return 0
        // } 
      let res = [...events];

      switch (sort) {
        case "by date asc":
          return res.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
        
        case "by date desc":
          return res.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        
          case "by name":
            return res.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
        default:
          return null;
      }

      }
    else {
      return events;
    }
  }, [fil, events, category, sort]);

  const resetFilters = () => {
    dispatch(setFilter(""));
    dispatch(setCategory(""));
    dispatch(setSort(""));
  };

  return (
    <div>
      <Buttons />
      {fil || category || sort ? (
        <button type="button" className="goback" onClick={resetFilters}>
          Back to all events
        </button>
      ) : null}

      <div className={styles.events}>
        {result?.length ? (
          result.map((event) => <EventCard event={event} key={event.id} />)
        ) : (
          <h3>No events</h3>
        )}
      </div>
    </div>
  );
};

export default Events;