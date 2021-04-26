import React from "react"
import Location from './Location'

function App() {
  return (
    <div>
      <h1 className="heading">Together, we can fight Covid-19</h1>
      <h2 className="sub-heading">Which resource are you looking for?</h2>
      <div className="buttons">
        <a className="btn btn-outline-light" href="#medicine">Medicines</a>
        <a className="btn btn-outline-light" href="#plasma">Plasma</a>
        <a className="btn btn-outline-light" href="#oxygen">Oxygen</a>
        <a className="btn btn-outline-light" href="#beds">Beds</a>
        <a className="btn btn-outline-light" href="#ambulance">Ambulances</a>
        <a className="btn btn-outline-light" href="#food">Food Source</a>
    </div>
    <div className="gform">
      <h4 >If you did not find the required resource, we will put up a tweet on your behalf.</h4>
      <h4> Fill in the required details <a href="https://forms.gle/QGE4Szfje3K9nY9o6">here</a></h4>
    </div>
    <section id="medicine" className="comodity">
        <h1> Medicines Availability.</h1>
        <Location />
    </section>
    <section id="plasma" className="comodity">
        <h1> Plasma Availability.</h1>
        <Location />
    </section>
    <section id="oxygen" className="comodity">
        <h1> Oxygen Availability.</h1>
        <Location />
    </section>
    <section id="beds" className="comodity">
        <h1> Beds Availability.</h1>
        <Location />
    </section>
    <section id="ambulance" className="comodity">
        <h1> Ambulances Availability.</h1>
        <Location />
    </section>
    <section id="food" className="comodity">
        <h1> Food Availability.</h1>
        <Location />
    </section>
    </div>
  )
}

export default App

