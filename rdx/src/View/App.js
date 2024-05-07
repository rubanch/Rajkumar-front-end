import RegistrationForm from "../components/RegistrationForm";
import { Provider } from 'react-redux';
import store from "../store";



function App() {
  return (
   <>
   <h2> this is the content</h2>
       <Provider store={store}>
            <RegistrationForm />
        </Provider>
   
   
   </>
  );
}

export default App;
