import { combineReducers } from 'redux';

import { serversReducer } from './servers/servers.reducer';

export default combineReducers({
  servers: serversReducer
})