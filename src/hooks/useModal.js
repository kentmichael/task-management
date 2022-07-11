import { useState } from "react"

const useModal = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = (value) => {
    setOpenModal(value)
  }

  return [openModal, toggleModal]
}

export default useModal
