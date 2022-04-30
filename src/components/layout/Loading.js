import React from 'react'
import loading from '../../assets/loading.gif'
const Loading = () => {
  return (
    <div style={Load}>
      <img src={loading} alt='loading'/>
    </div>
  )
}
const Load = {
  display:'flex',
  justifyContent:'center',
  alignSelf:'center'
}
export default Loading