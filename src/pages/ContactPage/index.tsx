import { FC, useCallback } from "react"
import { useNavigate } from "react-router-dom"

const ContactPage: FC = () => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <div>
      ContactPage
      <button onClick={handleClick}>Go to home page</button>
    </div>
  )
}

export default ContactPage