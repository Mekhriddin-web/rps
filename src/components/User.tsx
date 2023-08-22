interface IProps {
  user: {
    name: string;
    image: string;
    ready: boolean;
    figure: number | null;
    status: string;
  };
}

const User = ({ user }: IProps) => {
  return (
    <div
      className={`relative max-w-[calc(150/1512*100vw)] m-auto rounded-full border-[calc(4/1512*100vw)] ${
        user.ready ? 'border-green' : 'border-transparent'
      }`}
    >
      <img
        src={user.image}
        alt='img desc'
        className='w-[calc(150/1512*100vw)] h-[calc(150/1512*100vw)] rounded-full'
      />
      {user.figure !== null && (
        <div className='absolute top-[calc(-20/1512*100vw)] right-[calc(-20/1512*100vw)] z-10 flex items-center justify-center w-[calc(80/1512*100vw)] h-[calc(80/1512*100vw)] rounded-full bg-purple'>
          <img
            src={`${
              user.figure === 0
                ? 'images/s-icon.jpg'
                : user.figure === 1
                ? 'images/p-icon.jpg'
                : 'images/r-icon.jpg'
            }`}
            alt='img desc'
            className='w-[calc(80/1512*100vw)] h-[calc(80/1512*100vw)] rounded-full'
          />
        </div>
      )}
      <div className='opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity'>
        <p className='text-[calc(20/1512*100vw)] font-semibold text-center'>
          {user.name}
        </p>
      </div>
    </div>
  );
};

export default User;
