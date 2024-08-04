import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FolderState {
  activeFolder: 'inbox' | 'sent' | 'drafts' | 'trash';
}

const initialState: FolderState = {
  activeFolder: 'inbox',
};

export const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setActiveFolder: (state, action: PayloadAction<FolderState['activeFolder']>) => {
      state.activeFolder = action.payload;
    },
  },
});

export const { setActiveFolder } = folderSlice.actions;

export default folderSlice.reducer;
