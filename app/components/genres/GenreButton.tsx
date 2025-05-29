interface GenreButtonProps {
  genre: string;
  chooseGenre: (genre: string) => void;
}

const GenreButton: React.FC<GenreButtonProps> = ({ genre, chooseGenre }) => {
  return (
    <div className="w-1/2 h-1/2 flex justify-center items-center rounded-3xl">
      <button onClick={() => chooseGenre(genre)} className="border-4 w-64 h-12 bg-black rounded-full transition duration-500 ease-in-out hover:bg-white hover:text-black text-white font-bold text-lg transform hover:-translate-y-1">
        {genre}
      </button>
    </div>
  );
};

export default GenreButton;
