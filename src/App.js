import React from 'react';
import './App.css';
import CustomSelect from './CustomSelect';

const styles={
  app:{
    backgroundColor:'rgba(0,0,0,0.1)',
    justifyItems:'center',
    alignItems:'center',
    display:'grid',
    height:'100vh',
    fontFamily:'Arial',
    color:'rgba(0,0,100,1)',
    gridTemplateColumns:'1fr',
    fontSize:25
  },
  select:{
    width:'100%',
    maxWidth:600
  }
}

const options=[
  {label:'React',value:'react'},
  {label:'ReactNative',value:'react-native'},
  {label:'JavaScript',value:'js'},
  {label:'CSS',value:'css'},
]

function onChangeInput(value){
  console.log(value);
}
function App() {
  return (
    <div style={styles.app}>
      <CustomSelect isMulti={true} style={styles.select} defaultValue={[options[3],options[2]]} onChange={onChangeInput} options={options} label="Choose a libary" />
    </div>
  );

  
}

export default App;
