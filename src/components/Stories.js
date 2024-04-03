import React from "react"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import ImportContactsIcon from "@mui/icons-material/ImportContacts"
import MovieIcon from "@mui/icons-material/Movie"
import stories from "../data/stories"
import sam from "../asset/img/sam.JPG"

export default function Stories(props) {
    const storiesData = stories.map(item => {
        return (
            <div className="stories-child" key={item.id}>
                <img src={item.storyPic} className="full-img" />
                <img src={item.profilePic} className="round-img" />
                <span>{item.name}</span>
                <div className="overlay"></div>
            </div>
        )
    })
    return (
        <>
            <div className="story-reels md-none">
                <div className="sr-active">
                    <ImportContactsIcon />
                    <span>Stories</span>
                </div>
                <div>
                    <MovieIcon />
                    <span>Reels</span>
                </div>
            </div>
            <div className="stories">
                <div className="create-story">
                    <img src={sam} />
                    <div className="create-story-text">
                        <div className="add-icon-con">
                            <AddRoundedIcon fontSize="large" className="add-icon" />
                        </div>
                        <h4>Create</h4>
                        <h4>story</h4>
                    </div>

                </div>

                {storiesData}

            </div>
        </>

    )
}