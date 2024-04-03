import React from "react"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import SearchIcon from "@mui/icons-material/Search"
import MapsUgcIcon from "@mui/icons-material/MapsUgc"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import CollectionsIcon from "@mui/icons-material/Collections"
import VideocamIcon from "@mui/icons-material/Videocam"
import MoodIcon from "@mui/icons-material/Mood"
import sam from "../asset/img/sam.JPG"

export default function Head() {
    return (
        <>

            <div className="head">
                <div className="head-top">
                    <div className="menu-fb">
                        <MenuRoundedIcon className="menu-fb-menuIcon" />
                        <h2>facebook</h2>
                    </div>
                    <div className="search-msg">
                        <div className="search-icon-con">
                            <SearchIcon fontSize="large" className="search-icon" />
                            <p className="">Search Facebook</p>
                        </div>
                        <MapsUgcIcon fontSize="large" className="msg-icon" />
                        <NotificationsNoneIcon fontSize="large" className="notify-icon" />
                    <img src={sam} className="side" />
                    </div>
                </div>
            </div>
            <div className="head-bottom">
                <img src={sam} className="img" />
                <p>What's on your mind?</p>
                <div className="head-bottom-icon">
                    <div className="md-none">
                        <VideocamIcon className="VideocamIcon" />
                        <span>Live video</span>
                    </div>
                    <div>
                        <CollectionsIcon className="collections" />
                        <span className="md-none">Photo/video</span>
                    </div>
                    <div className="md-none">
                        <MoodIcon className="MoodIcon" />
                        <span>Feeling/activity</span>
                    </div>
                </div>
            </div>
        </>

    )
}