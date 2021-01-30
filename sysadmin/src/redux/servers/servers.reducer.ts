import { ServersActionTypes } from './servers.types';

type Servers = {
  name: string,
  state: string,
  message: string,
  ID: string,
  IP: string,
};

interface ServersState {
  servers: Servers[]
};

const INITIAL_STATE = {
  servers: []
};

type Action = { type: 'READ', servers: string };


const serversReducer = (state: ServersState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ServersActionTypes.READ:
      return {
        ...state,
        servers: action.servers
      }
  
    default:
      return state;
  }
};

export { serversReducer };
