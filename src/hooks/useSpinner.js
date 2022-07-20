import { useState } from "react"

const useSpinner = () => {
  const [loadingSpinner, setLoading] = useState(false)

  const setLoadingSpinner = (bool) => setLoading(bool)

  return [loadingSpinner, setLoadingSpinner]
}

export default useSpinner
