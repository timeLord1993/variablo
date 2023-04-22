import { createSlice } from "@reduxjs/toolkit";

export const informationSlice = createSlice({
  name: "information",
  initialState: {
    data: [],
  },
  reducers: {
    setInformation: (state, action) => {
      console.log("===========", action);
      for (let i = 0; i < action.payload.count; i++) {
        state.data.push({
          author: "章三" + (i + 1),
          date: "2021-10-10",
          desc: "曾經我錯過了一個很好的作品，因為我太害怕耽誤別人，所以先表達了自己什麼不會，但後來才領悟真正的演員是要讓自己不會做的事，學習得好像很會！學習讓人成長，犯錯才會進步，害怕就會被侷限在自己的框架裏          ",
          image: "",
          avatar: "",
          start: "100万",
          comment: "3000",
          share: "200",
        });
      }
    },
  },
});

export const { setInformation } = informationSlice.actions;

export default informationSlice.reducer;
