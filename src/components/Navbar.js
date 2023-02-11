import React from "react"
import HomeIcon from "@mui/icons-material/Home"
import PeopleIcon from "@mui/icons-material/People"
import GroupsIcon from "@mui/icons-material/Groups"
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo"
import StoreIcon from "@mui/icons-material/Store"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import MenuIcon from "@mui/icons-material/Menu"
import WorkHistoryIcon from "@mui/icons-material/WorkHistory"
import AppsRoundedIcon from "@mui/icons-material/AppsRounded"
import LinkIcon from "@mui/icons-material/Link"

import groups from "../data/groups"
import groupss from "../data/groupss"

export default function Navbar() {
    const groupsData = groups.map(item => {
        return (
            <div className="navbar-icons md-none marginicon" key={item.id}>
                <img src={item.img} className="side" />
                <span>{item.name}</span>
            </div>
        )
    })
    const groupssData = groupss.map(item => {
        return (
            <div className="navbar-icons md-none marginicon" key={item.id}>
                <img src={item.img} className="side" />
                <span>{item.name}</span>
            </div>
        )
    })
    return (

        <div className="navbar">
            <div className="navbar-icons active">
                <HomeIcon />
                <span>Home</span>
            </div>
            <div className="navbar-icons md-none">
                <img src="./sam.jpg" className="sidee" />
                <span>Samito Robito</span>
                <hr className="hr" />
            </div>

            <div className="navbar-icons">
                <PeopleIcon />
                <span>Friends</span>
            </div>
            <div className="navbar-icons md-none">
                <GroupsIcon />
                <span>Groups</span>
            </div>
            <div className="navbar-icons">
                <OndemandVideoIcon />
                <span>Watch</span>
            </div>
            <div className="navbar-icons">
                <StoreIcon />
                <span>Marketplace</span>
            </div>
            <div className="navbar-icons md-none">
                <WorkHistoryIcon />
                <span>Most Recent</span>
            </div>
            <div className="navbar-icons navbar-icons-none">
                <NotificationsNoneIcon />
                <span>Notifications</span>
            </div>
            <div className="navbar-icons navbar-icons-none">
                <MenuIcon />
                <span>Menu</span>
            </div>
            <div className="navbar-icons md-none marginicon">
                <AppsRoundedIcon fontSize="large" className="AppsRoundedIcon" />
                <span>See all</span>
                <hr className="hr" />
            </div>

            {groupsData}

            <div className="navbar-icons md-none marginicon">
                <GroupsIcon fontSize="large" className="AppsRoundedIcon" />
                <span>See all groups</span>
                <hr className="hr" />
            </div>

            {groupssData}

            <div className="navbar-icons md-none">
                <LinkIcon fontSize="large" className="AppsRoundedIcon" />
            </div>
        </div>
    )
}