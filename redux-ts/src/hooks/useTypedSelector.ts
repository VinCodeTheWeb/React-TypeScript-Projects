import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/root-reducer';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useTypedSelector };
