import React from 'react'


const Footer = () => {
  return (
    <footer style={footer}>
        <p >Made with love by Taher Boudiaf. Let's.Chat © 2022.</p>
    </footer>
  )
}
const footer ={
    display: 'flex',
    justifyContent: 'center',
    padding: '32px 26px',
    background: 'rgb(243, 244 ,246,1)',
    borderTop:'#1118271a solid 1px',
    color:' #4b5563',
    fontSize:'.875rem!important',
    lineHeight:'-3.75rem!important',
    marginTop:'10px'
}
export default Footer