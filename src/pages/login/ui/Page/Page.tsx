import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginForm } from '@/features/authentication/Login'
import { config } from '@/shared/lib'

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onComplete = useCallback(() => {
    navigate(location.state?.returnUrl ?? '/')
  }, [navigate])

  return (
    <div>
      {/* <p>
        Use {config.API_USER_USERNAME} / {config.API_USER_PASSWORD} as test user
        credentials
      </p> */}
      <LoginForm onComplete={onComplete} />
    </div>
  )
}

export default LoginPage;