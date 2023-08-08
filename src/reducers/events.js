import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

  const eventsSlice = createSlice({
    name: "events",
    initialState: [
        {
            id: 1,
            title: 'Football match',
            description: 'Great evening for all football fans and players. Inter Rome will take part in an unforgatable battle of the best of the best. Tickets preorder is open ',
            date: "2023-08-10",
            time: '12:00',
            location: 'Kyiv',
            category: 'Sport',
            picture: '',
            priority: 'low'
          },
          {
            id: 2,
            title: 'Music event',
            description: 'Dear friends. We are honored to invite you to our music event where all talanted musicians of our beautiful city will perfirm live for you',
            date: "2023-10-10",
            time: '11:00',
            location: 'Lviv',
            category: 'Music',
            picture: '',
            priority: 'High'
          },
          {
            id: 3,
            title: 'Business masterclass',
            description: 'Business trainers will teach how to trade on stock exjchange markets. Also will give you practical advices on how to set your business workflow',
            date: "2023-11-23",
            time: '09:00',
            location: 'Kyiv',
            category: 'Business',
            picture: '',
            priority: 'low'
          },
          {
            id: 4,
            title: 'Photography workshop',
            description: 'Free online masterclass for beginner photographers. Every enthusiast is welcome',
            date: "2023-12-15",
            time: '09:00',
            location: 'Cherkasy',
            category: 'Art',
            picture: '',
            priority: 'low'
          },
          {
            id: 5,
            title: 'Jass festival',
            description: 'Hello dear friends. Please welcome to Annual Jazz festival in Ternopil. Best performers on the stage will present our new program',
            date: "2023-11-23",
            time: '09:00',
            location: 'Ternopil',
            category: 'Music',
            picture: '',
            priority: 'low'
          }
    ],
    reducers: {
        addEvent: {
            reducer: (store, {payload}) => {
                store.push(payload);
                // localStorage.setItem('events', JSON.stringify({ payload }));
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
          }
        },
        removeEvent: (store, {payload}) => store.filter(({id}) => id !== Number(payload))
    }
});

export const { addEvent, updateEvent, removeEvent } = eventsSlice.actions;
export default eventsSlice.reducer;