import React from 'react'

type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
  //    you can define hnadleChangeInput also here
  //    const handleInputChange = ((event: React.MouseEvent<HTMLButtonElement>) => {
  //     console.log(event);
  //   return <input type="text" value={props.value} onChange={handleInputChange} />
  return <input type="text" value={props.value} onChange={props.handleChange} />
}

export default Input
