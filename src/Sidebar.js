import React from 'react';
import './Sidebar.css';
import SideBarOption from './SidebarOption';
import SearchIcon from '@material-ui/icons/Search';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SideBarOption active text="Home" Icon={HomeIcon}/>
            <SideBarOption text="Explore" Icon={SearchIcon}/>
            <SideBarOption text="Explore" Icon={NotificationsNoneIcon}/>
            <SideBarOption text="Messages" Icon={MailOutlineIcon}/>
            <SideBarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SideBarOption text="Lists" Icon={ListAltIcon}/>
            <SideBarOption text="Profile" Icon={PermIdentityIcon}/>
            <SideBarOption text="More" Icon={MoreHorizIcon}/>
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
