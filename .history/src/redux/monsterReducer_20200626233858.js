const MONSTER_ATACKED = "MONSTER_ATACKED";
const MONSTER_KILLED = "MONSTER_KILLED";
const NEXT_ENEMY = "NEXT_ENEMY";

let initialState = {
  monsterHP: 100,
  curentMonsterHP: 100,
  monsterDMG: 10,
  monsterXP: 15,
  isMonsterDead: false,
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
      stateCopy.isMonsterDead = true;
      return stateCopy;
    }

    case MONSTER_KILLED: {
      let stateCopy = { ...state };
      stateCopy.curentMonsterHP = stateCopy.monsterHP;
      stateCopy.isMonsterDead = true;
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
export const monsterKilled = () => ({
  type: MONSTER_KILLED,
});
export const nextEnemy = () => ({
  type: NEXT_ENEMY,
});
