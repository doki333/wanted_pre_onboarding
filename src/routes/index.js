import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Slider from '../components/Slider'
import Toggle from '../components/Toggle'
import styles from './Routes.module.scss'
import Input from '../components/Input'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
