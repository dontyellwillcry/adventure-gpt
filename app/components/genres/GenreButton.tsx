interface GenreButtonProps {
  genre: string;
  chooseGenre: (genre: string) => void;
}

const GenreButton: React.FC<GenreButtonProps> = ({ genre, chooseGenre }) => {
  return (
    <div className="w-1/2 h-1/2 flex justify-center items-center backdrop-blur-md">
      <button onClick={() => chooseGenre(genre)} className="border-4 w-64 h-12 bg-black">
        {genre}
      </button>
    </div>
  );
};

export default GenreButton;
