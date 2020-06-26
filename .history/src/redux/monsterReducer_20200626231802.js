const MONSTER_ATACKED = "MONSTER_ATACKED";
const MONSTER_KILLED = "MONSTER_KILLED";

let initialState = {
  monsterHP: 100,
  curentMonsterHP: 100,
  monsterDMG: 10,
  monsterXP: 15,
  i
};

export const monsterReducer = (state = initialState, action) => {
  switch (action.type) {
    case MONSTER_ATACKED: {
      let stateCopy = { ...state };
      stateCopy.curentMonsterHP =
        stateCopy.curentMonsterHP - action.characterDMG;
      return stateCopy;
    }

    case MONSTER_KILLED: {
      let stateCopy = { ...state };
      stateCopy.curentMonsterHP = stateCopy.monsterHP;
      return stateCopy;
    }

    default:
      return state;
  }
};

export const monsterAtacked = (characterDMG) => ({
  type: MONSTER_ATACKED,
  characterDMG: characterDMG,
});
export const monsterKilled = (csdg) => ({
  type: MONSTER_KILLED,
});
