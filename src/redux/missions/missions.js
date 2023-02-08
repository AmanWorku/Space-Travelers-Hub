import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit';

const FETCH_MISSIONS = 'SPACE_TRAVELERS_HUB/missions/FETCH_MISSIONS';
const UPDATE_MISSION = 'SPACE_TRAVELERS_HUB/missions/UPDATE_MISSION';
const INITIAL_STATE = [];
const fetchMissions = async () => {
  const data = await (await fetch('https://api.spacexdata.com/v3/missions')).json();
  return data;
};

export const retriveMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await fetchMissions();
  const missionData = [];
  response.forEach((mission) => {
    const singleMission = {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    };
    missionData.push(singleMission);
  });
  return missionData;
});

export const updateMission = createAction(UPDATE_MISSION, (id) => ({
  payload: id,
}));

const missions = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(retriveMissions.fulfilled, ((state, action) => action.payload))
    .addCase(updateMission, ((state, action) => state.map((mission) => (
      mission.mission_id === action.payload
        ? { ...mission, isReserved: !mission.isReserved }
        : mission
    ))))
    .addDefaultCase(((state) => [...state]));
}));

export default missions;
