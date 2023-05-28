import PromptCard from "./PromptCard"
import RoundLoader from "./UI Components/RoundLoader"

const Profile = ({name, desc, data, handleDeletePost}) => {
  return (
    <section className='w-full max-w-full flex flex-col flex-start'>
      <h1 className="head_text">
        <span className="orange_gradient">{name} Profile.</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      {data.length !== 0 ? (
        <div className="mt-16 prompt_layout">
        {
          data.map((post) => (
              <PromptCard
                key={post._id}  
                post={post}
                handleDeletePost={handleDeletePost}
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
    </section>
  )
}

export default Profile



