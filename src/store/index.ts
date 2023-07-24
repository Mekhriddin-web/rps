import { create } from 'zustand';

interface UserState {
  user: {
    name: string;
    image: string;
    ready: boolean;
    figure: number | null;
    status: string;
  };
  bot: {
    name: string;
    image: string;
    ready: boolean;
    figure: number | null;
    status: string;
  };
}

interface UserActions {
  choseUserFigure: (figure: number | null) => void;
  choseBotFigure: (figure: number | null) => void;
  readyStart: (isReady: boolean) => void;
}

type UserStore = UserState & UserActions;

const useUsersStore = create<UserStore>(set => ({
  user: {
    name: 'default name',
    image: 'images/avatar.jpg',
    ready: false,
    figure: null,
    status: '',
  },
  bot: {
    name: 'Bot Botovich',
    image: 'images/bot.jpg',
    ready: true,
    figure: null,
    status: '',
  },
  choseUserFigure: figure =>
    set(state => ({
      user: {
        ...state.user,
        figure: figure,
      },
    })),
  choseBotFigure: figure =>
    set(state => ({
      bot: {
        ...state.bot,
        figure: figure,
      },
    })),
  readyStart: isReady =>
    set(state => ({
      user: {
        ...state.user,
        ready: isReady,
      },
    })),
}));

export default useUsersStore;
