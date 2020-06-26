const XP_GAIN = "XP_GAIN";
const LEVEL_UP = "LEVEL_UP";
const PICK_ADENA_UP = "PICK_ADENA_UP";
const INCREASE_DMG = "INCREASE_DMG";

let initialState = {
  characterLVL: 1,
  experienceForLvl: {
    level_1: 700,
    level_2: 900,
    level_3: 1000,
    level_4: 1100,
    level_5: 1300,
    level_6: 1700,
    level_7: 2200,
    level_8: 3200,
    level_9: 4300,
    level_10: 5664,
    level_11: 7896,
    level_12: 10672,
    level_13: 13904,
    level_14: 15824,
    level_15: 700,
    level_16: 900,
    level_17: 700,
    level_18: 900,
    level_19: 700,
    level_20: 900,
  },
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

    case INCREASE_DMG: {
      let stateCopy = { ...state };
      stateCopy.characterDMG += 5;
      stateCopy.characterAdena -= 50;
      return stateCopy;
    }

    default:
      return state;
  }
};

export const xpGain = (gainedXP) => ({ type: XP_GAIN, xp: gainedXP });
export const levelUp = () => ({ type: LEVEL_UP });
export const pickAdenaUp = (adena) => ({ type: PICK_ADENA_UP, adena: adena });
export const increaseDMG = () => ({ type: INCREASE_DMG });
