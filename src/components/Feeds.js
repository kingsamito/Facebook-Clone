import React from "react"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import CloseIcon from "@mui/icons-material/Close"
import PeopleIcon from "@mui/icons-material/People"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import PublicIcon from "@mui/icons-material/Public"

import feeds from "../data/feeds"


export default function Feeds() {
    const feedsData = feeds.map(item => {
        return (
            <div className="feeds" key={item.id}>
                <div className="feeds-top">
                    <div className="info">
                        <img src={item.profilePic} alt="" className="dp" />
                        <p>
                            <span className="info-name">{item.name}</span>
                            <span> is {item.purpose} with</span>
                            <span className="info-with"> {item.withWho}</span>
                            <span> and</span>
                            <span className="info-others"> {item.others}</span><br />
                            <span className="info-time-who">
                                <span>{item.time} .  </span>
                                {item.whoCanView === "Public" ? <PublicIcon fontSize="Small" /> : <PeopleIcon fontSize="Small" />}
                            </span>
                        </p>
                    </div>
                    <div className="dot-close">
                        <MoreHorizIcon />
                        <CloseIcon />
                    </div>
                </div>
                <div className="feeds-middle">
                    <p className="feeds-text">{item.text}</p>
                    <img src={item.feedsPic} className="feeds-photo" />
                </div>
                <div className="feeds-bottom">
                    <div className="react-com">
                        <ThumbUpAltIcon fontSize="Small" className="thumb" />
                        <FavoriteIcon fontSize="Small" className="favorite" />
                        <span className="no-reaction">{item.reaction}</span>
                        <span className="no-comment">{item.noComment} comments</span>
                    </div>
                    <div className="react-com-send">
                        <div>
                            <ThumbUpOutlinedIcon fontSize="small" />
                            <span>Like</span>
                        </div>
                        <div>
                            <ChatBubbleOutlineOutlinedIcon className="comment" fontSize="small" />
                            <span>Comment</span>
                        </div>
                        <div>
                            <SendOutlinedIcon className="send" fontSize="small" />
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {feedsData}
            
        </>


    )
}