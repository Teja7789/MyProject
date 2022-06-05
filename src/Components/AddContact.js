import React from 'react';

class AddContact extends React.Component {
  //render bcz classcomponent
render(){
  return(
    <div className="ui main">
      <h2>Add Contacts</h2>
      <form className="ui form">
        <div className="field">
          <lable>Name</lable>
          <input type="text" name="name" placeholder="Name" />

        </div>
        <div className="field">
          <lable>Email</lable>
          <input type="text" name="email" placeholder="Email" />

        </div>
        <button className="ui button blue">Save</button>
      </form>
    </div>


  )
}
}
export default AddContact;


// const AddContact = () => {
 
//   return(
//     <div>
//      AddContact
//       </div>

//   );
// }
 
// export default AddContact;