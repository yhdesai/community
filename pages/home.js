import React, { useState, useEffect } from "react";
import { firestore } from "../utils/firebase";

import { collection, addDoc,getDocs } from "firebase/firestore";

export default function home() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([])


  // Listens to the list of posts and updates the state
  useEffect(() => {
    getDocs(collection(firestore, "posts")).then((querySnapshot) => {
      const tempPosts = [];
      querySnapshot.forEach((doc) => {
        tempPosts.push(doc.data());
      });

      setPosts(tempPosts);
    });
  });


  // Submits the post to firestore
  const submitPost = () => {
    try {
      const docRef = addDoc(collection(firestore, "posts"), {
        text: post,
      }).then((res) => {
        console.log("Document written with ID: ", docRef.id);
        setPost("");
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <>Welcome to Community!</>
      </div>
      <div className="flex justify-center items-center mt-16">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
        >
          <div className=" relative ">
            <input
              type="text"
              id='"form-subscribe-Subscribe'
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Text"
              onChange={(e) => setPost(e.target.value)}
              value={post}
            />
          </div>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
            onClick={submitPost}
          >
            Post
          </button>
        </form>

        <div>
          <ol>
            {posts.map((post) => {
              return (<li>{post.text}</li>)
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
