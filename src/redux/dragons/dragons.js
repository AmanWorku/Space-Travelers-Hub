import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DRAGONS = 'FETCH_DRAGONS_STATUS';

const fetchDragons = async () => {
  const request = await fetch('https://api.spacexdata.com/v4/dragons');
  const data = await request.json();
  return data;
};

export const retrieveDragons = createAsyncThunk(FETCH_DRAGONS, async () => {
  const response = await fetchDragons();
  const dragonsData = [];
  response.forEach((dragon) => {
    const aDragon = {
      id: dragon.id,
      name: dragon.name,
      description: dragon.description,
      image: dragon.flickr_images[0],
    };
    dragonsData.push(aDragon);
    console.log(dragonsData);
  });
  return dragonsData;
});

const INITIAL_STATE = [];

const dragons = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(retrieveDragons.fulfilled, ((state, action) => action.payload))
    .addDefaultCase(((state) => [...state]));
}));

export default dragons;
