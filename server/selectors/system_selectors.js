import { createSelector } from 'reselect';

function system (state) {
    return state.get('system');
}

const startTime = createSelector(
  [system],
  function (systemState) {
      return systemState.get('startTime');
  }
);

export const isGameStarted = createSelector(
  [system],
  function (systemState) {
      return systemState.get('isGameStarted');
  }
);

const systemSelectors = {
    startTime,
    isGameStarted,
};

export default systemSelectors;
