//reacthook used for react functional component -useState
import React,{ useState } from "react";

import "./App.css";
import AppHeader from './AppHeader';
import AddContact from './AddContact';
import Contactlist from './Contactlist';
// import Contactcard from './Contactcard';
export default function App() {
  const [contacts, setContacts] = useState([])
  // const contacts = [
  //   {
  //     id:"1",
  //     name:"Dipesh",
  //     email:"malvia@gmail.com"
  //   },
  //   {
  //     id:"2",
  //     name:"Mukhesh",
  //     email:"mukhesha@gmail.com"
  //   }
  // ]
  const addContactHandler = (contact) =>{
    console.log(contact)
    //from AddContact ==> contactlist
    setContacts([...contacts, contact])
  }
  return (
    <div className="ui container">
    New app
    <AppHeader/>
    {/* state */}
    {/* props as fuction used to transfer data from child to parent  */}
    <AddContact addContactHandler={addContactHandler}/>
    {/* props passing contacts property and value */}
    <Contactlist contacts={contacts}/>
    {/* <Contactcard/> */}
    </div>
  );
}
