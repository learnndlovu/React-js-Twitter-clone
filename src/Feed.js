import React,{ useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
      <div className="feed">
        {/* header */}
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        {/* tweetBox */}
        <TweetBox />

        {/* post */}

        <FlipMove>
          {posts.map((post) => {
            return (
              <Post
              key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar}
              />
            );
          })}
        </FlipMove>

        {/* <Post
          displayName="LNdlovu"
          username="@mina"
          verified
          text="Yoo its working"
          image="./images/image.jpg"
          avatar="./images/profile-pic.jpg"
        /> */}
      </div>
    );
}

export default Feed;
