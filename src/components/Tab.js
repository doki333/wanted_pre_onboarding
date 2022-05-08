import { useRef, useState } from 'react'
import styles from './Tab.module.scss'
import cx from 'classnames'

const list = [
  { position: '2', content: '감자' },
  { position: '34', content: '고구마' },
  { position: '66', content: '카레라이스' },
]

export default function Tab() {
  const [currentLoc, setCurrentLoc] = useState('2')
  const moveRef = useRef()
  const onClick = (e) => {
    const { position } = e.target.dataset
    moveRef.current.style.left = `${position}%`
    setCurrentLoc(position)
  }

  return (
    <section className={styles.tabWrapper}>
      <h3>Tab</h3>
      <ul className={styles.tabList}>
        <span className={styles.movingBar} ref={moveRef} />
        {list.map(({ position, content }) => (
          <button
            type='button'
            key={`food-${content}`}
            data-position={position}
            className={cx(styles.tabItem, { [styles.tabActiveItem]: currentLoc === position })}
            onClick={onClick}
          >
            {content}
          </button>
        ))}
      </ul>
    </section>
  )
}
