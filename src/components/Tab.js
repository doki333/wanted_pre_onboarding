import { useRef } from 'react'
import styles from './Tab.module.scss'

const list = [
  { position: 2, content: '감자' },
  { position: 34, content: '고구마' },
  { position: 66, content: '카레라이스' },
]

export default function Tab() {
  const moveRef = useRef()
  const onClick = (e) => {
    const { position } = e.target.dataset
    moveRef.current.style.left = `${position}%`
  }

  return (
    <section className={styles.tabWrapper}>
      <h3>Tab</h3>
      <ul className={styles.tabList}>
        <span className={styles.movingBar} ref={moveRef} />
        {list.map(({ position, content }) => {
          return (
            <button
              type='button'
              key={`food-${content}`}
              data-position={position}
              className={styles.tabItem}
              onClick={onClick}
            >
              {content}
            </button>
          )
        })}
      </ul>
    </section>
  )
}
