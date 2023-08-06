import { createSlice } from "@reduxjs/toolkit";

  const filterSlice = createSlice({
    name: "filter",
    initialState: "",
        reducers: {
            setFilter: (_, {payload}) => payload
        }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

//   const filterSlice = createSlice({
//     name: "filters",
//     initialState: {
//       search: "",
//       category: "",
//       sort: ""
//     },
//         reducers: {
//             // setFilter: (_, {payload}) => [...payload]
//             setFilter: {
//               reducer: (store, {payload}) => {
//                 return {...store, search: payload};
//               }
//             },
//             setCategory: {
//               reducer: (store, {payload}) => {
//                 return {...store, category: payload};
//               }
//             },
//             setSort: {
//               reducer: (store, {payload}) => {
//                 return {...store, sort: payload};
//               }
//             }
//         }
// });

// export const { setFilter, setCategory, setSort } = filterSlice.actions;
// export default filterSlice.reducer;