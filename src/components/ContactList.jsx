import React from 'react'

function ContactList(props) {
  return (
    <div>
        <ul className={`${props.style} text-zinc-300`}>
            <li className='liCss flex mb-5'>
              <span className='text-greenCl mr-3'>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <a target='__blank' href="https://www.google.com/maps/place/Smart+Software/
              @-18.8947745,-41.9542923,17z/data=!3m1!4b1!4m6!3m5!1s0xb1a788bcec06c7:
              0xf534a73a317597ec!8m2!3d-18.8947796!4d-41.9517174!16s%2Fg%2F11tk161967"> 
                <p>Av. Luíz Gonçalves Lessa, 4 - <br /> Vila Isa, Gov. Valadares - MG</p>
            </a>
            </li>
            <li className='liCss flex mb-5'>
              <span className='text-greenCl mr-3'>
                <i className="fa-solid fa-phone"></i>
              </span>
              <a href="tel:33999260357">
                <p>(33) 9 9926-0357</p>
              </a>
            </li>
            <li className='liCss flex'>
              <span className='text-greenCl mr-3'>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <a href="mailto:contato@bttis.com">
                <p>contato@bttis.com</p>
              </a>
            </li>
          </ul>
    </div>
  )
}

export default ContactList