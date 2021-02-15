import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionsRepositoriesType, RepositoriesAction } from './repositories.types';

export const searchRepositories = (text: string) => async (dispatch: Dispatch<RepositoriesAction>) => {
  dispatch({ type: ActionsRepositoriesType.SEARCH_REPOSITORIES });

  try {
    const { data } = await axios.get(`http://registry.npmjs.com/-/v1/search`, {
      params: {
        text
      }
    });

    const names = data.objects.map((res: any) => res.package.name);

    dispatch({
      type: ActionsRepositoriesType.SEARCH_REPOSITORIES_SUCCESS,
      payload: names
    });

  } catch (error) {
    dispatch({
      type: ActionsRepositoriesType.SEARCH_REPOSITORIES_ERROR,
      payload: error.message
    });
  }
}
