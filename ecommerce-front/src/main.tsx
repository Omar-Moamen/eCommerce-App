import ReactDOM from 'react-dom/client'
import AppRouter from '@routes/AppRouter';
// Redux & redux-persist
import { store, persistor } from '@store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// Axios
import "./services/axios-global.js";
// Styles
import './styles/global.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <AppRouter />
      </PersistGate>
   </Provider>
)
