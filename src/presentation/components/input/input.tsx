import React, { useContext } from 'react'

import Styles from './input-styles.scss'
import Context from '../../contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input
        {...props}
        readOnly
        onFocus={enableInput}
        data-testid={props.name}
        onChange={handleChange}
      />
      <span
        title={getTitle()}
        data-testid={`${props.name}-status`}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  )
}

export default Input
