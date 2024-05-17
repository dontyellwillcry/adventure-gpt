interface GenreButtonProps {
  genre: string;
}

const GenreButton: React.FC<GenreButtonProps> = ({ genre }) => {
    return (
      <div className="w-1/2 h-1/2 flex justify-center items-center backdrop-blur-md">
        <button className="border-4 w-64 h-12">{genre}</button>
      </div>
    );
  };
  
  export default GenreButton;