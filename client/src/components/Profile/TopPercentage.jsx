import TopRatingBarGraph from "./TopRatingBarGraph";

function TopPercentage() {
  return (
    <div className="top-percent w-[49%] bg-[#282828] p-4 rounded-md h-[30vh] mb-4">
      <div className="relative w-full min-h-[49px]">
        <div className="absolute left-0 top-0">
          <div className="text-base">Top</div>
          <div className="text-2xl">0.81%</div>
        </div>
       
      </div>
      <div className="h-[25vh] w-full text-black">
        <TopRatingBarGraph />
      </div>
    </div>
  );
}

export default TopPercentage;
