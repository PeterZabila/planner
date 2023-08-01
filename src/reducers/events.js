import { createSlice } from "@reduxjs/toolkit";

  const eventsSlice = createSlice({
    name: "events",
    initialState: [],
    reducers: {
        addEvent: {
            reducer: (store, {payload}) => {
                store.push(payload);
                localStorage.setItem('events', JSON.stringify({ payload }));
            },
            
        },
        // removeContact: (store, {payload}) => store.filter(({id}) => id !== payload)
    }
});

export const { addComment } = eventsSlice.actions;
export default eventsSlice.reducer;