// All the selectors needed in the app are declared here.
import { RootState } from '../store';

// Example selector to get the counter value from the state
// Naming convention: select + [slice name] (Singular) + [property name]
/// SLICE NAME: counter
export const selectCounterValue = (state: RootState) => state.counter.value;

/// SLICE NAME: users
export const selectUserLoading = (state: RootState) => state.users.loading;
export const selectUserData = (state: RootState) => state.users;