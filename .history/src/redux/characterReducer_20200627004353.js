const XP_GAIN = "XP_GAIN";
const LEVEL_UP = "LEVEL_UP";

let initialState = {
  characterLVL: 1,
  characterHP: 100,
  characterDMG: 30,
  characterMP: 100,
  characterXP: 0,
  c
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case XP_GAIN: {
      let stateCopy = { ...state };
      stateCopy.characterXP += action.xp;
      return stateCopy;
    }
    case LEVEL_UP: {
      let stateCopy = { ...state };
      stateCopy.characterXP = 0;
      stateCopy.characterLVL = state.characterLVL + 1;

      return stateCopy;
    }

    default:
      return state;
  }
};

export const xpGain = (gainedXP) => ({ type: XP_GAIN, xp: gainedXP });
export const levelUp = () => ({ type: LEVEL_UP });
