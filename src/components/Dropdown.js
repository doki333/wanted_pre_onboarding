import { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import { BiSearch } from 'react-icons/bi'

const symArr = ['BTCUSD.PERP', 'LTCUSD.PERP', 'ETHSUD.PERP', 'BCHUSD.PERP', 'XRPUSD.PERP', '1000SHIBUCD.PERP']

export default function Dropdown() {
  const listRef = useRef()
  const [text, setText] = useState('All Symbols')
  const [search, setSearch] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [mappingArr, setMappingArr] = useState([...symArr])

  const handleClickBtn = () => {
    setIsVisible((prev) => !prev)
  }

  const handleChange = (e) => {
    setSearch(e.currentTarget.value)
    setMappingArr([...symArr.filter((sym) => sym.toLowerCase().includes(e.currentTarget.value.toLowerCase()))])
  }

  const handleClick = (e) => {
    const { symbol } = e.currentTarget.dataset
    setText(symbol)
    setIsVisible(false)
  }

  const handleVisible = (e) => {
    if (listRef.current && !listRef.current.contains(e.target)) {
      setSearch('')
      setMappingArr([...symArr])
      setIsVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleVisible)
    return () => {
      document.removeEventListener('mousedown', handleVisible)
    }
  }, [listRef])

  return (
    <section className={styles.dropdownWrapper}>
      <h3>Dropdown</h3>
      <div className={styles.dropdownInner} ref={listRef}>
        <button type='button' className={styles.dropBtn} onClick={handleClickBtn}>
          {text}
        </button>
        {isVisible && (
          <div className={styles.inputAndList}>
            <div className={styles.textInput}>
              <BiSearch size='1rem' />
              <input type='text' placeholder='Search Symbol' value={search} onChange={handleChange} />
            </div>
            <ul className={styles.symbolList}>
              <button type='button' className={styles.listItem} onClick={handleClick} data-symbol='All Symbols'>
                All Symbols
              </button>
              {mappingArr.map((symbol) => (
                <button
                  type='button'
                  key={`symbol-${symbol}`}
                  className={styles.listItem}
                  data-symbol={symbol}
                  onClick={handleClick}
                >
                  {symbol}
                </button>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
