import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "../redux/reducers/userReducer/userReducer";
import {errorSelector, loadingSelector, userSelector} from "../redux/reducers/userReducer/selectors";


function App() {
  const users = useSelector(userSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(loadUsers())
  },[]);

  const handleError = () =>{
    dispatch(loadUsers())
  }

    if(loading) {
      return (
          <div>
            Идет загрузкаю...
          </div>
      )
    }

    if(error) {
      return (
          <div>
            Произошла ошибка... <button onClick={handleError}>X</button>
          </div>
      )
    }

  return (
      <div>
        {users.map((user)=>(
            <div key={user.id}>
              {user.name}
            </div>
        ))}
    </div>
  );
}

export default App;
