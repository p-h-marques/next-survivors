import { useCallback, useContext, useState } from 'react';
import { filterInputUpdate } from '../../../state/actions';
import Context from '../../../state/Context';
import { InputStyles } from './styles';

export default function Input() {
  const { state, dispatch } = useContext(Context);

  const [requestTimeout, setRequestTimeout] = useState(false);

  const changeSurvivorsInput = useCallback(
    (e: Event) => {
      const delta = 1500;
      const target = e.target as HTMLInputElement;

      function startRequest() {
        console.log('request: ' + target.value);
      }

      function handleRequestAction(requestTime) {
        if (+new Date() - +requestTime < delta) {
          setTimeout(() => {
            handleRequestAction(requestTime);
          }, delta);
        } else {
          setRequestTimeout(false);
          startRequest();
        }
      }

      function handleTimeoutRequest() {
        const requestTime = new Date();

        if (!requestTimeout) {
          setRequestTimeout(true);

          setTimeout(() => {
            handleRequestAction(requestTime);
          }, delta);
        }
      }

      handleTimeoutRequest();
      dispatch(filterInputUpdate(target.value));
    },
    [requestTimeout, setRequestTimeout, dispatch],
  );

  return (
    <InputStyles
      type="text"
      placeholder="filter survivor by name"
      value={state.filters.input}
      onChange={(e) => changeSurvivorsInput(e.nativeEvent)}
    />
  );
}
