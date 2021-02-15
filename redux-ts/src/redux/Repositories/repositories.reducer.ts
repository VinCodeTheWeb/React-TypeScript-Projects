import {
  ActionsRepositoriesType,
  RepositoriesState,
  RepositoriesAction
} from "./repositories.types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: []
}

const repositoriesReducer = (
  state: RepositoriesState = INITIAL_STATE,
  action: RepositoriesAction ): RepositoriesState => {

  switch (action.type) {
    case ActionsRepositoriesType.SEARCH_REPOSITORIES:
      return {
        ...state,
        loading: true,
        error: null,
        data: []
      }

    case ActionsRepositoriesType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      }

    case ActionsRepositoriesType.SEARCH_REPOSITORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      }
    
    default:
      return state
  }
}

export { repositoriesReducer };
