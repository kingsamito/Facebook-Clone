import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import VideoCallIcon from "@mui/icons-material/VideoCall"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import contacts from "../data/contacts"


export default function Sidebar() {
    const contactData = contacts.map(item => {
        return(
            <div className="sidebar-icons md-none" key={item.id}>
                <img src={item.img} className="sidee" />
                <span>{item.name}</span>
            </div>
        )
    })
    return (

        <div className="sidebar">
            <div className="sidebar-icons md-none">
                <h4>Contacts</h4>
                <div className="sidebar-vsm">
                    <div>
                        <VideoCallIcon />
                    </div>
                    <div>
                        <SearchIcon />
                    </div>
                    <div>
                        <MoreHorizIcon />
                    </div>

                </div>

            </div>
            {contactData}
        </div>
    )
}