import React from 'react'
import Styles from "./InputForm.module.css"

const InputForm = () => {
  return (
    <div>
      <input type="text" class={Styles.formControl} placeholder="✍️ Add item..."/>
    </div>
  )
}

export default InputForm
