import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "张三疯",
    motto: "天生我材必有用，船到桥头必然直",
    age: 30,
    sex: "男",
    avatar: "",
    homepageBackground: "",
  },
  reducers: {
    setUserInfo: (state, action) => {
      const { name, motto, age, sex, avatar, homepageBackground } = action;
      state.name = name;
      state.motto = motto;
      state.age = age;
      state.sex = sex;
      state.avatar = avatar;
      state.homepageBackground = homepageBackground;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
