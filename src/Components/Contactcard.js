import React from 'react';
const Contactcard = () => {
 
  return(
    <div class="item">
      <div className="content">
        {/* <div className="header">
          {contacts.name}</div>
          <div>{contacts.email}</div> */}
          {/* <div>Remove</div> */}
      </div>
      <i className="trash-alternate-outline-icon"
      style={{color:"red"}}>delete</i>
    </div>
  );
}
 
export default Contactcard;