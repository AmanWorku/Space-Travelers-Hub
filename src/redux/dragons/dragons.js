import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit';

const FETCH_DRAGONS = 'FETCH_DRAGONS_STATUS';
const RESERVE_DRAGONS = 'RESERVE_DRAGONS';

const fetchDragons = async () => {
  const request = await fetch('https://api.spacexdata.com/v4/dragons');
  const data = await request.json();
  return data;
};

export const reserveDragon = createAction(RESERVE_DRAGONS, (id) => ({
  payload: id,
}));

export const retrieveDragons = createAsyncThunk(FETCH_DRAGONS, async (obj, thunkAPI) => {
  const currentState = thunkAPI.getState();
  if (currentState.dragonsReducer.length === 0) {
    const response = await fetchDragons();
    const dragonsData = [];
    response.forEach((dragon) => {
      const aDragon = {
        id: dragon.id,
        name: dragon.name,
        description: dragon.description,
        image: dragon.flickr_images[0],
        reserved: false,
      };
      dragonsData.push(aDragon);
    });
    return dragonsData;
  }
  return currentState.dragonsReducer;
});

const INITIAL_STATE = [];

const dragons = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(retrieveDragons.fulfilled, ((state, action) => action.payload))
    .addCase(reserveDragon, ((state, action) => state.map((dragon) => (
      dragon.id === action.payload ? { ...dragon, reserved: !dragon.reserved } : dragon
    ))))
    .addDefaultCase(((state) => [...state]));
}));

export default dragons;
