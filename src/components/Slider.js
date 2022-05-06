import { useCallback, useState } from 'react'
import styles from './Slider.module.scss'

const percentArr = [1, 25, 50, 75, 100]

export default function Slider() {
  const [num, setNum] = useState(1)

  const handleChange = useCallback((e) => {
    setNum(e.currentTarget.value)
  }, [])

  const handleBtnClick = (e) => {
    const { value } = e.currentTarget.dataset
    setNum(value)
  }

  return (
    <section className={styles.sliderWrapper}>
      <h3>Slider</h3>
      <div className={styles.textInputInner}>
        <input type='text' value={num} readOnly id='textInput' />
        <label htmlFor='textInput' className={styles.percentLabel}>
          %
        </label>
      </div>
      <span
        style={{
          background: `linear-gradient(
      to right,
      #17a2b8 0% ${num}%,
      #fafafa ${num}% ${100 - num}%`,
        }}
        className={styles.rangeBlock}
      >
        <input
          type='range'
          step={1}
          value={num}
          onChange={handleChange}
          min={1}
          max={100}
          className={styles.rangeInput}
        />
        <ul className={styles.numList}>
          {percentArr.map((percent) => {
            return (
              <button
                type='button'
                key={`percent-${percent}`}
                data-value={percent}
                onClick={handleBtnClick}
                className={styles.numBtn}
              >
                {percent}%
                <span className={num > percent ? `${styles.isColored}` : `${styles.isNotColored}`} />
              </button>
            )
          })}
        </ul>
      </span>
    </section>
  )
}
