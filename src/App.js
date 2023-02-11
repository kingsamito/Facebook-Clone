import React from "react"
import Head from "./components/Head"
import Stories from "./components/Stories"
import Navbar from "./components/Navbar"
import Feeds from "./components/Feeds"
import "./styles.css"
import Sidebar from "./components/Sidebar"


export default function App() {
  return (
    <div >
      <Navbar />
      <div className="H-S">
        <Head />
        <Stories />
      </div>

      <Feeds /> 
      <Sidebar />
    </div>
  )
}