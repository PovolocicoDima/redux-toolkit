import { useDispatch } from 'react-redux'
import { useAppSelector } from './hooks/redux'
import { userSlice } from './store/reducers/UserSlice'

const App = () => {
  const { count } = useAppSelector((state) => state.useReducer)
  const { increment } = userSlice.actions
  const dispatch = useDispatch()

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(1))}>INC</button>
    </div>
  )
}

export default App
