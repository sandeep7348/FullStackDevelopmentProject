import React, { useEffect } from "react";
import "../style/feed.scss";
import { usePost } from "../hooks/usePost";

import {
  FaHeart,
  FaRegComment,
  FaPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";

export const Feed = () => {
  const { post, loading, handleAllPost } = usePost();

  useEffect(() => {
    handleAllPost();
  }, []);

  const dummyPosts = [
    {
      _id: "1",
      caption: "Enjoying a beautiful sunset 🌅",
      img_url: "https://picsum.photos/500/600?random=1",
      user: {
        username: "sandeep",
        profile_url: "https://i.pravatar.cc/150?img=1",
      },
    },
    {
      _id: "2",
      caption: "Coding my Instagram clone 💻",
      img_url: "https://picsum.photos/500/600?random=2",
      user: {
        username: "developer",
        profile_url: "https://i.pravatar.cc/150?img=2",
      },
    },
  ];

  const postsToShow =
    post && post.length > 0 ? post : dummyPosts;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main className="feed-page">
      <div className="feed">
        {postsToShow.map((item) => (
          <div className="post" key={item._id}>
            <div className="user">
              <img
                src={
                  item.user?.profile_url ||
                  "https://i.pravatar.cc/150"
                }
                alt="profile"
              />

              <div className="user-info">
                <p className="username">
                  {item.user?.username || "User"}
                </p>
              </div>
            </div>

            <div className="post-image">
              <img
                src={item.img_url}
                alt={item.caption}
              />
            </div>

            <div className="post-actions">
              <div className="left-actions">
                <button>
                  <FaHeart />
                </button>

                <button>
                  <FaRegComment />
                </button>

                <button>
                  <FaPaperPlane />
                </button>
              </div>

              <button className="save-btn">
                <FaRegBookmark />
              </button>
            </div>

            <div className="content">
              <p className="caption">
                <strong>{item.user?.username}</strong>{" "}
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};