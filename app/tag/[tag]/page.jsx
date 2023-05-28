'use client'

import PromptCard from "@components/PromptCard"
import RoundLoader from "@components/UI Components/RoundLoader"
import { useState, useEffect } from "react"


const Tag = ({params}) => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    if(params?.tag){
      (async ()=>{
        const response = await fetch(`/api/prompt/tag/${params?.tag}`) 
        const data = await response.json();
        setPosts(data);
      })()
    }
  },[params?.tag])

  return (
    <div className="w-full">
        <div className="mt-6 pb-4 text-3xl md:text-6xl font-extrabold orange_gradient">
            #{params?.tag}
        </div>

        {posts.length !== 0 ? (
          <div className="mt-4 md:mt-16 prompt_layout">
            {
              posts.map((post) => (
                  <PromptCard
                    key={post._id}  
                    post={post}
                  />
                )
              )
            }
          </div>
        ) : (
          <section className="w-full h-[10rem] flex-center">
            <RoundLoader/>
          </section>
        )}
    </div>

    
  )
}

export default Tag
