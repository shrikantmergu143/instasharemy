import { useRoutes } from 'react-router-dom';
import routes from './router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import firebase from "firebase";
import db from "./config/Firebase";
import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import "firebase/messaging";
import rootReducer from './redux/reducers/index'
const store = createStore(rootReducer, applyMiddleware(thunk))
const messaging = firebase.messaging();

const App = () => {

  const content = useRoutes(routes);

  messaging.requestPermission()
  .then(function() {
    console.log('Notification permission granted.');
    return messaging.getToken()
  })
  .then(function(result) {
      console.log("The token is: ", result);
  })
  .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
  
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          {content}
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
