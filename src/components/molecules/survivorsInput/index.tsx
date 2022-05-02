import { useCallback, useContext } from 'react';
import { getSurvivors } from '../../../repository/survivors.repository';
import { filterInputUpdate } from '../../../state/actions';
import Context from '../../../state/Context';
import { InputStyles } from './styles';

export default function Input() {
  const { state, dispatch } = useContext(Context);

  const startRequest = useCallback(() => {
    getSurvivors(state.filters);
  }, [state.filters]);

  const changeSurvivorsInput = useCallback(
    (e: Event) => {
      const target = e.target as HTMLInputElement;

      dispatch(filterInputUpdate(target.value));
    },
    [dispatch],
  );

  return (
    <InputStyles
      type="text"
      placeholder="filter survivor by name"
      value={state.filters.input}
      onChange={(e) => changeSurvivorsInput(e.nativeEvent)}
      onKeyUp={() => startRequest()}
    />
  );
}
