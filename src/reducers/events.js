import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

  const eventsSlice = createSlice({
    name: "events",
    initialState: [
        {
            title: 'hello',
            description: 'sjdkhfgkjdxhg;ioewjglvidzhgedskhksjhgfkjsdhvjk sgddfxzfdv',
            date: new Date().toLocaleDateString(),
            time: '12:00',
            location: 'Kyiv',
            category: 'Art',
            picture: '',
            priority: 'low'
          },
          {
            title: 'Bonjour',
            description: 'sjdkhfgkjdxhg;ioewjglvidzhgedskhksjhgfkjsdhvjk sgddfxzfdv',
            date: new Date().toLocaleDateString(),
            time: '11:00',
            location: 'Lviv',
            category: 'Music',
            picture: '',
            priority: 'High'
          },
          {
            title: 'Kitty',
            description: 'sjdkhfgkjdxhg;ioewjglvidzhgedskhksjhgfkjsdhvjk sgddfxzfdv',
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
        removeContact: (store, {payload}) => store.filter(({id}) => id !== payload)
    }
});

export const { addEvent, removeEvent } = eventsSlice.actions;
export default eventsSlice.reducer;