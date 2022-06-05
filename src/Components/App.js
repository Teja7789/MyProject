import React from "react";
import "./App.css";
import AppHeader from './AppHeader';
import AddContact from './AddContact';
import Contactlist from './Contactlist';

export default function App() {
  const contacts = [
    {
      id:"1",
      name:"Dipesh",
      email:"malvia@gmail.com"
    },
    {
      id:"2",
      name:"Mukhesh",
      email:"mukhesha@gmail.com"
    }
  ]
  return (
    <div className="ui container">
    New app
    <AppHeader/>
    <AddContact />
    {/* props passing contacts property and value */}
    <Contactlist contacts={contacts}/>
    </div>
  );
}
