import * as types from "../actionsTypes/fileFolderActionTypes";
const initialState = {
  isLoaded: false,
  currentFolder: "root",
  userFolders: [],
  userFiles: [],
  adminFolders: [],
  adminFiles: [],
};

const filesFoldersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_FOLDER:
      return {
        ...state,
        userFolders: [...state.userFolders, action.payload],
      };

    default:
      return state;
  }
};

export default filesFoldersReducer;
