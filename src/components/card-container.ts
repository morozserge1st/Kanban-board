import { connect } from 'react-redux';
import  { RootState } from '../types/root-state';
import Card from './card';
import { onAddIssue, onMoveIssue } from '../actions/list-action-creators';

export const CardContainer = connect(
  (state: RootState, ownProps: {index: number}) => {
    const item = state.list.items[ownProps.index];
    return {
      title: item.title,
      issues: item.issues,
      index: ownProps.index
    };
  },
  (dispatch, ownProps: {index: number}) => ({
    onAdd(value: string) {
      dispatch(onAddIssue(value));
    },
    onMove(id: number) {
      dispatch(onMoveIssue(id, ownProps.index));
    }
  })
)(Card);
