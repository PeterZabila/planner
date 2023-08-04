import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

  const eventsSlice = createSlice({
    name: "events",
    initialState: [
        {
            id: 1,
            title: 'hello',
            description: 'Description of the event. Please make sure you are aknowledged with time and date paramaters of the event in order not to miss it.',
            date: new Date().toLocaleDateString(),
            time: '12:00',
            location: 'Kyiv',
            category: 'Art',
            picture: '',
            priority: 'low'
          },
          {
            id: 2,
            title: 'Bonjour',
            description: 'Description of the event. Please make sure you are aknowledged with time and date paramaters of the event in order not to miss it.',
            date: new Date().toLocaleDateString(),
            time: '11:00',
            location: 'Lviv',
            category: 'Music',
            picture: '',
            priority: 'High'
          },
          {
            id: 3,
            title: 'Kitty',
            description: 'Description of the event. Please make sure you are aknowledged with time and date paramaters of the event in order not to miss it.',
            date: new Date().toLocaleDateString(),
            time: '09:00',
            location: 'Kyiv',
            category: 'Art',
            picture: '',
            priority: 'low'
          }
    ],
    reducers: {
        addEvent: {
            reducer: (store, {payload}) => {
                store.push(payload);
                localStorage.setItem('events', JSON.stringify({ payload }));
            },
            prepare: (data) => {
              return {
                  payload: {
                      ...data,
                      id: nanoid()
                  }
              }
          }
        },
        updateEvent: {
          reducer: (store, {payload}) => {
            const oldEvent = store.find(({id}) => id === payload.id);
            Object.assign(oldEvent, payload)
            // const newEvent = {...oldEvent, payload};
            // store.push(newEvent);
          }
        },
        removeEvent: (store, {payload}) => store.filter(({id}) => id !== Number(payload))
    }
});

export const { addEvent, updateEvent, removeEvent } = eventsSlice.actions;
export default eventsSlice.reducer;