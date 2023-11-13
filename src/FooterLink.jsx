import React from 'react'


    function FooterLink({ AllHandle, ActiveHandle, CompletedHandle }) {
   // const [item, setItem] = useState("");

  
    return (
        <div>
            <div className='FooterLink'>
                <div onClick={AllHandle} className='All switch'>
                    All
                </div>
                <div onClick={ActiveHandle} className='Active switch'>
                    Active
                </div>
                <div onClick={CompletedHandle} className='complete switch'>
                    Completed
                </div>
            </div>
        </div>
    )
  }
  
export default FooterLink;