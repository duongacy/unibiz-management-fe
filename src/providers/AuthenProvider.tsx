'use client'
import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useEffect, useState } from 'react'

export const AuthContext = createContext<{
  isLoggedIn: boolean
  handleLogout: () => void
  handleLoginSuccess: (token: string) => void
} | null>(null)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    let token = ''
    if (typeof localStorage !== 'undefined') {
      token = localStorage.getItem('token') || ''
    }
    return !!token
  })

  const handleLogout = () => {
    /* Xoá token và set lại isLoggedIn=false */
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  const handleLoginSuccess = (token: string) => {
    localStorage.setItem('token', token)
    setIsLoggedIn(true)
    router.replace('/')
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, handleLoginSuccess, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

/* 
  1. Tạo authen provider để quản lý việc đăng nhập và đăng xuất
  2. Sử dụng context để chia sẻ thông tin đăng nhập đến các component con (isLoggedIn, handleLoginSuccess, handleLogout)
  3. Trang login sẽ gọi hàm handleLoginSuccess khi đăng nhập thành công
  4. Trang posts sẽ kiểm tra isLoggedIn, nếu chưa đăng nhập sẽ chuyển hướng đến trang login
  5. Khi bấm vào button Logout trên header, sẽ gọi hàm handleLogout
*/
