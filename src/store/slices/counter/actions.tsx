//All of the counter slice actions are imported and exported from the same file. 
// This is a common pattern in Redux Toolkit to keep the code organized and maintainable. 
// The actions are defined in the slice and can be dispatched from any component that connects to the Redux store. 
// The `increment`, `decrement`, and `incrementByAmount` actions are used to modify the state of the counter,
//  which is managed by the `counterSlice`.
import {
  increment,
  decrement,
  incrementByAmount
} from './reducers';

export {
  increment,
  decrement,
  incrementByAmount
};
// The above code imports the action creators from the counter slice and re-exports them.

// Here is a space for create actions to call sagas.