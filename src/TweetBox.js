import React, { useState } from 'react';
import './TweetBox.css';
import { Button, Avatar } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [image, setImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'user',
            username: '@username',
            verified: true,
            text: tweetMessage,
            image: image,
            avatar: "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.0-9/107376037_3135015606588921_6019925896933124338_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=M4biv4oyxfUAX_oV6k8&_nc_ht=scontent.fjnb11-1.fna&oh=12f9e64342ac1d04a867d35528395098&oe=5F8125B4"
        })

        setTweetMessage('')
        setImage("")
    }


    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.0-9/107376037_3135015606588921_6019925896933124338_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=M4biv4oyxfUAX_oV6k8&_nc_ht=scontent.fjnb11-1.fna&oh=12f9e64342ac1d04a867d35528395098&oe=5F8125B4"/>
                    <input 
                    placeholder="What's happening" type="text"
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)}
                    />
                </div>
                <input 
                placeholder="Enter image URL" type="text"
                className="tweetBox__imageInput"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
            <Button 
            className="tweetBox__tweetButton"
            type="submit"
            onClick={sendTweet}
            >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
