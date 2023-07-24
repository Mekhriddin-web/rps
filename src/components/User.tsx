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
      className={`relative max-w-[150px] m-auto rounded-full border-4 ${
        user.ready ? 'border-green' : 'border-transparent'
      }`}
    >
      <img
        src={user.image}
        alt='img desc'
        className='w-[150px] h-[150px] rounded-full'
      />
      {user.figure !== null && (
        <div className='absolute top-[-20px] right-[-20px] z-10 flex items-center justify-center w-[80px] h-[80px] rounded-full bg-purple'>
          <img
            src={`${
              user.figure === 0
                ? '/images/s-icon.jpg'
                : user.figure === 1
                ? '/images/p-icon.jpg'
                : '/images/r-icon.jpg'
            }`}
            alt='img desc'
            className='w-[80px] h-[80px] rounded-full'
          />
        </div>
      )}
      <div className='opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity'>
        <p className='text-[20px] font-semibold text-center'>{user.name}</p>
      </div>
    </div>
  );
};

export default User;
