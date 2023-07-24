const ModalResult = ({
  isOpen,
  result,
  closeModal,
}: {
  isOpen: boolean;
  result: string;
  closeModal: ({ open, result }: { open: boolean; result: string }) => void;
}) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed top-0 left-0 z-20 py-[64px] px-[20px] flex items-center justify-center w-full h-[100vh] bg-blackOpacity`}
    >
      <div className='max-w-[806px] flex flex-col w-full h-full overflow-y-auto bg-white rounded-[15px] py-[80px] px-[20px]'>
        <h2 className='text-black text-center text-[40px] font-semibold'>
          {result === 'win' && 'victory'}
          {result === 'lose' && "Loser's window"}
          {result === 'draw' && 'draw'}
        </h2>
        <p className='mt-[50px] text-black text-center text-[28px] font-bold'>
          {result === 'win' && 'Congratulations on the victory'}
          {result === 'lose' &&
            'Сongrats you loser try again and the power will be with you!'}
          {result === 'draw' && 'try again'}
        </p>
        {result === 'win' && (
          <img
            src='images/victory.jpg'
            alt='img victory'
            className='w-[290px] h-[394px] mt-[15px] m-auto mb-[20px]'
          />
        )}
        {result === 'lose' && (
          <img
            src='images/lose.jpg'
            alt='img lose'
            className='w-[319px] h-[364px] mt-[15px] m-auto mb-[20px]'
          />
        )}

        <button
          className='flex items-center justify-center mt-auto w-full p-[25px] text-center bg-purple text-[24px] font-medium'
          onClick={() => closeModal({ open: false, result: '' })}
        >
          Close victory window
        </button>
      </div>
    </div>
  );
};

export default ModalResult;
