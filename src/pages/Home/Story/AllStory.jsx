import useAllStories from "../../../Hooks/useAllStories";
import StoryCard from "./StoryCard";


const AllStory = () => {
    const stories = useAllStories()
    return (
        <div className="">
            <h1 className='text-3xl lg:text-5xl font-semibold text-slate-800 text-center my-10'>Our Available Packages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  px-6">
                {
                    stories?.map(item => <StoryCard key={item._id} item={item}></StoryCard>)
                }

            </div>
        </div>

    );
};

export default AllStory;