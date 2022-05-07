import { useCallback, useState } from 'react'
import styles from './Input.module.scss'
import { IoMdEye, IoMdEyeOff, IoMdCheckmarkCircle } from 'react-icons/io'

export default function Input() {
  const [isText, setIsText] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [value, setValue] = useState({ email: '', password: '' })
  const [isEmailCorrect, setIsEmailCorrect] = useState(false)

  const preventDefault = (e) => {
    e.preventDefault()
  }
  const handlePasswordVisible = () => {
    setIsText((prev) => !prev)
  }

  const handleChangePassword = (e) => {
    const newValue = e.currentTarget.value
    setValue((prev) => ({ ...prev, password: newValue }))
  }

  const handleEmailCorrect = useCallback((e) => {
    const newValue = e.currentTarget.value
    setIsVisible(false)
    setValue((prev) => ({ ...prev, email: newValue }))
    const reg = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (reg.test(newValue) === true) {
      setIsEmailCorrect(true)
    } else {
      setIsEmailCorrect(false)
    }
  }, [])

  const handleBlur = () => {
    if (!isEmailCorrect) {
      setIsVisible(true)
    }
    if (value.email === '') {
      setIsVisible(false)
    }
  }

  return (
    <section className={styles.inputWrapper}>
      <h3>Input</h3>
      <form onSubmit={preventDefault} className={styles.formInner}>
        <div className={styles.emailBlock}>
          <label htmlFor='userEmail'>E-mail</label>
          <input
            type='email'
            id='userEmail'
            placeholder='E-mail'
            onChange={handleEmailCorrect}
            value={value.email}
            onBlur={handleBlur}
          />
          <button type='button' className={isEmailCorrect ? `${styles.isCorrect}` : `${styles.isNotCorrect}`}>
            <IoMdCheckmarkCircle size='1.2rem' />
          </button>
          <p className={isVisible ? `${styles.isVisible}` : `${styles.isNotVisible}`}>Invalid e-mail address.</p>
        </div>
        <div className={styles.passwordBlock}>
          <label htmlFor='password'>Password </label>
          <input
            type={isText ? 'text' : 'password'}
            id='password'
            onChange={handleChangePassword}
            autoComplete='false'
            placeholder='Password'
            value={value.password}
          />
          <button
            type='button'
            onClick={handlePasswordVisible}
            className={isText ? `${styles.isText}` : `${styles.isPassword}`}
          >
            {isText ? <IoMdEye size='1.3rem' /> : <IoMdEyeOff size='1.3rem' />}
          </button>
        </div>
      </form>
    </section>
  )
}
