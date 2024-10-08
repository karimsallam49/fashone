import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Approuter from './router/Approuter';
import { Provider } from 'react-redux';
import { store } from './store';
import persistor from './store';
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

<Approuter/>

    </PersistGate>
    </Provider>
)


