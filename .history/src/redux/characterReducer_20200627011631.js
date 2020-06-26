const XP_GAIN = "XP_GAIN";
const LEVEL_UP = "LEVEL_UP";
const PICK_ADENA_UP = "PICK_ADENA_UP";


let initialState = {
  characterLVL: 1,
  characterHP: 100,
  characterDMG: 15,
  characterMP: 100,
  characterXP: 0,
  characterAdena: 0,
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

    case PICK_ADENA_UP: {
      let stateCopy = { ...state };
      stateCopy.characterAdena += action.adena;

      return stateCopy;
    }

    default:
      return state;
  }
};

export const xpGain = (gainedXP) => ({ type: XP_GAIN, xp: gainedXP });
export const levelUp = () => ({ type: LEVEL_UP });
export const pickAdenaUp = (adena) => ({ type: PICK_ADENA_UP, adena: adena });
