import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProfile,
  getAllUsers,
  getOneUser,
  addUser,
} from "../services/users";

const initialState = {
  users: [],
  user: {},
  profile: {},
  total: 0,
  currentPage: 1,
  limit: 100,
  error: "",
  loading: false,
  msg: "",
};

export const listUsers = createAsyncThunk(
  "users/listUsers",
  async ({ limit, page, name }) => {
    const res = await getAllUsers({ limit, page, name });
    return res.data;
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload) => {
    const res = await addUser(payload);
    return res.data;
  }
);

export const getById = createAsyncThunk("users/getById", async (id) => {
  const res = await getOneUser(id);
  return res.data;
});

export const userProfile = createAsyncThunk("users/userProfile", async () => {
  const res = await getProfile();
  return res.data;
});

const userSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action) => {
      state.currentPage = 1;
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action?.payload?.data?.total;
        state.users = action?.payload?.data?.data;
      })
      .addCase(listUsers.pending, (state) => {
        state.loading = true;
        state.users = [];
        state.total = 0;
      })
      .addCase(listUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.user = {};
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
      })
      .addCase(getById.pending, (state) => {
        state.loading = true;
        state.user = {};
      })
      .addCase(getById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
      })
      .addCase(userProfile.pending, (state) => {
        state.loading = true;
        state.profile = {};
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setLimit } = userSlice.actions;

export const userReducer = userSlice.reducer;
