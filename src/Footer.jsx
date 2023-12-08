import React from 'react'
import FooterLink from './FooterLink'


    function Footer({ numofInputs, clearCompletedHandler, AllHandler, ActiveHandler, CompletedHandler }) {
   // const [item, setItem] = useState("");

  
    return (
        <div>
            <div className='Footer'>
                <div className='items-left'>
                    {numofInputs} items left
                </div>
                <div className='Footerlink'>
                    <FooterLink
                        //AllHandler={AllHandler} 
                        //ActiveHandler={ActiveHandler} 
                        //CompletedHandler={CompletedHandler}
                     />
                </div>
                <div onClick={clearCompletedHandler} className='completed switch'>
                    clear completed
                </div>
            </div>
        </div>
    )
  }
  
export default Footer;