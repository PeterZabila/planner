import React, { useEffect, useState, useMemo } from "react";
import EventCard from "./EventCard";
import Buttons from "../Buttons/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, setCategory } from "../../reducers/filter";
// import { setFilter, setSort, setCategory } from '../../reducers/filter';
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
    } else {
      return events;
    }
  }, [fil, events, category]);

  const resetFilters = () => {
    dispatch(setFilter(""));
    dispatch(setCategory(""));
  };

  return (
    <div>
      <Buttons />
      {fil || category ? (
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
