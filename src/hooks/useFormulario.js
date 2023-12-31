import { useState } from 'react'

const useFormulario = (inicial) => {
  const [formulario, setFormulario] = useState(inicial)
  const handleChange = (e) => {
    setFormulario({
      ...formulario, //le pasamos una copia del form existente
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setFormulario(inicial)
  }

  return [formulario, handleChange, reset]
}

export default useFormulario