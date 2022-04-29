import { Action } from './Reducer.module';
import { InitialState } from '../pages/Home/Home.module';
export const reducer = (currantState: InitialState, action: Action): InitialState => {
  if (action.type === 'UPDATE') {
    return {
      ...currantState,
      results: action.results,
      totalPage: Math.ceil(action.results.length / 10),
      totalItems: action.totalItems,
      startIndex: 0
    };
  }
  if (action.type === 'QUERY') {
    return {
      ...currantState,
      query: action.query
    };
  }
  if (action.type === 'PAGINATION') {
    const startIndex = (action.page - 1) * 10 - 1;
    return {
      ...currantState,
      page: action.page,
      startIndex: startIndex <= 0 ? 0 : startIndex
    };
  }
};
