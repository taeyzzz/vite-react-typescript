import { FC, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const HomePage: FC = () => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate('/contact')
  }, [navigate])

  useEffect(() => {
    
  }, [])

  return (
    <div>
      HomePage
      <button onClick={handleClick}>Go to contact page</button>
    </div>
  )
}

export default HomePage