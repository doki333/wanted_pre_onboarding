import styles from './Toggle.module.scss'
import cx from 'classnames'
import { useState } from 'react'

export default function Toggle() {
  const [move, setMove] = useState(false)
  const handleChange = (e) => {
    setMove((prev) => !prev)
  }
  return (
    <section className={styles.toggleWrapper}>
      <h3>Toggle</h3>
      <div className={styles.toggleInner}>
        <label htmlFor='firstInput' className={cx('', { [styles.isBlack]: !move })}>
          기본
          <input type='radio' name='toggle' id='firstInput' defaultChecked onChange={handleChange} />
        </label>
        <span className={cx({ [styles.isMoved]: move })} />
        <label htmlFor='secondInput' className={cx('', { [styles.isBlack]: move })}>
          상세
          <input type='radio' name='toggle' id='secondInput' onChange={handleChange} />
        </label>
      </div>
    </section>
  )
}
