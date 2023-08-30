export const Transitions = {
  leaveFade: {
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    from: {
      transform: 'translateX(100%)',
    },
    leave: {
      opacity: 0,
    },
  },
};
