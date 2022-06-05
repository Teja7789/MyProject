import React from 'react';
//props used pass contacts array
const Contactlist = (props) => {
// console.log(props)
const renderContactlist = props.contacts.map((contacts)=>{
  return(
    <div class="item">
      <div className="content">
        <div className="header">
          {contacts.name}</div>
          <div>{contacts.email}</div>
          {/* <div>Remove</div> */}
      </div>
      <i className="trash-alternate-outline-icon">delete</i>
    </div>
  )
})
  return(
    <div className="ui celled list">
     {renderContactlist}
      </div>

  );
}
 
export default Contactlist;