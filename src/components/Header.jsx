import React from 'react'

const Header = () => {
  return (
    <div >
      <div style={{ display: 'inline-block' }} >
        <img src='https://pngimg.com/uploads/deadpool/deadpool_PNG3.png' width={100} alt='' />
      </div>
      <div style={{ display: 'inline-block' }} >
        <h3>Header</h3>
      </div>
      <div style={{ display: 'inline-block' }} >
        <ul>
          <li>items</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </div>
    </div >
  )
}

export default Header