import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

  const eventsSlice = createSlice({
    name: "events",
    initialState: [],
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
        removeContact: (store, {payload}) => store.filter(({id}) => id !== payload)
    }
});

export const { addEvent, removeEvent } = eventsSlice.actions;
export default eventsSlice.reducer;