import React from 'react'
import FooterLink from './FooterLink'


    function Footer({ items, clearCompletedHandle }) {
   // const [item, setItem] = useState("");

  
    return (
        <div>
            <div className='Footer'>
                <div className='items-left'>
                    {items}items left
                </div>
                <div className='Footerlink'>
                    <FooterLink 
                    />
                </div>
                <div onClick={clearCompletedHandle} className='completed switch'>
                    clear completed
                </div>
            </div>
        </div>
    )
  }
  
export default Footer;