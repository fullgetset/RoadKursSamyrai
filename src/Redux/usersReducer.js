const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {
    //   id: '1',
    //   photoUrl: 'https://icdn.lenta.ru/images/2020/08/05/13/20200805130643193/square_1280_0b7365786cbd9c48bf2c212b973ba4b5.jpg',
    //   followed: true,
    //   fullName: 'Yuri',
    //   status: 'I am boss',
    //   location: {city: 'Vitebsk', country: 'Belarus',}
    // },
    // {
    //   id: '2',
    //   photoUrl: 'https://icdn.lenta.ru/images/2020/08/05/13/20200805130643193/square_1280_0b7365786cbd9c48bf2c212b973ba4b5.jpg',
    //   followed: false,
    //   fullName: 'Nastya',
    //   status: 'I women',
    //   location: {city: 'Moscow', country: 'Russia',}
    // },
    // {
    //   id: '3',
    //   photoUrl: 'https://icdn.lenta.ru/images/2020/08/05/13/20200805130643193/square_1280_0b7365786cbd9c48bf2c212b973ba4b5.jpg',
    //   followed: false,
    //   fullName: 'Tamara',
    //   status: 'I am cat',
    //   location: {city: 'House', country: 'Bathroom',}
    // },
    // {
    //   id: '4',
    //   photoUrl: 'https://icdn.lenta.ru/images/2020/08/05/13/20200805130643193/square_1280_0b7365786cbd9c48bf2c212b973ba4b5.jpg',
    //   followed: true,
    //   fullName: 'AudiA6C5',
    //   status: 'I am car',
    //   location: {city: 'street', country: 'Road',}
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true,}
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false,};
          }
          return u;
        })
      };

    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]};
    }

    default:
      return state;

  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
