import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { BsHandIndexThumbFill } from "react-icons/bs";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col border-2 border-dashed border-red-500 ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 border-2 border-double border-blue-200">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 border-2 border-dotted border-red-200">
        {data?.map((song, isPlaying, activeSong, index) => (
          <SongCard
            key={song.key}
            song={song}
            index={index}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};
export default Discover;
