import React, { useState } from 'react'
import './App.css'
import CustomSelect from './CustomSelect/CustomSelect'
const languages = [
  {
    id: 0,
    label: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'
  },
  {
    id: 1,
    label: 'PHP',
    logo: 'https://www.php.net//images/logos/new-php-logo.svg'
  },
  {
    id: 2,
    label: 'Python',
    logo: 'https://logodownload.org/wp-content/uploads/2019/10/python-logo-2.png'
  },
  {
    id: 3,
    label: 'GO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png'
  },
  {
    id: 4,
    label: 'C#',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg'
  }
]

function App () {
  const [selectedLanguages, setSelectedLanguages] = useState([])

  return (

    <div className='app'>
      <h3>React Custom Dropdown</h3>
      <CustomSelect title="Select your skills:" value={selectedLanguages} onChange={(v) => setSelectedLanguages(v)} options={languages}/>

    </div>
  )
}

export default App
