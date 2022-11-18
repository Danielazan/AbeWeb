import UserHook from "./UserHook"

export const useLogout = () => {
  const { dispatch } = UserHook()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('User')

    // dispatch logout action
    dispatch({ type: "Logout" })
  }

  return { logout }
}