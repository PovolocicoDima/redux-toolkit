import { useAppDispatch, useAppSelector } from './hooks/redux'
import { useEffect } from 'react'
import { fetchUsers } from './store/reducers/actionCreators'


const App = () => {
  const dispatch = useAppDispatch()
  const {users, error, isLoading } = useAppSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [ ])

  return (
    <div className='App'>
      {isLoading ?? <h1>Loading...</h1>}
      {error ?? <h1>{error}</h1>}
      <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
      </div>
    </div>
  )
}

export default App
