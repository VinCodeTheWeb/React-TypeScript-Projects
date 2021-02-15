export enum ActionsRepositoriesType {
  SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES',
  SEARCH_REPOSITORIES_SUCCESS = 'SEARCH_REPOSITORIES_SUCCESS',
  SEARCH_REPOSITORIES_ERROR = 'SEARCH_REPOSITORIES_ERROR',
}

export interface SearchRepositoriesAction {
  type: ActionsRepositoriesType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: ActionsRepositoriesType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRepositoriesErrorAction {
  type: ActionsRepositoriesType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type RepositoriesAction =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction

export interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
  }