'use client'
import { ManagementTemplate } from '@/dp__templates/ManagementTemplate'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type User = {
  name: string
  email: string
}

type UserContextType = {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}
const UserContext = createContext<UserContextType | null>(null)

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
  })
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

const MainComponent = () => {
  const userContext = useContext(UserContext)!
  const userNameList = ['John Doe', 'Jane Doe']

  const setRandomName = () => {
    let newName = userContext.user.name
    while (newName === userContext.user.name) {
      newName = userNameList[Math.floor(Math.random() * userNameList.length)]
    }
    userContext.setUser((prev) => ({ ...prev, name: newName }))
  }

  return (
    <div className="m-2 border p-2">
      <h1>Welcome {userContext.user.name}</h1>
      <button onClick={setRandomName}>Change username</button>
    </div>
  )
}

export default function Page() {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  )
}
