import { FilterStyles } from './styles';
import Select from '../../molecules/survivorsSelect';
import Input from '../../molecules/survivorsInput';
import { useContext, useEffect } from 'react';
import Context from '../../../state/Context';
import { loadingStatusUpdate, requestUpdate } from '../../../state/actions';
import { getSurvivors } from '../../../repository/survivors.repository';

export default function Filter() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    async function actions() {
      dispatch(loadingStatusUpdate(true));
      const request = await getSurvivors(state.filters);
      dispatch(requestUpdate(request));
    }

    actions();
  }, [state.filters, dispatch]);

  return (
    <FilterStyles>
      <Input />
      <Select />
    </FilterStyles>
  );
}
