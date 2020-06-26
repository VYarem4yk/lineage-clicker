const XP_GAIN = "XP_GAIN";

let initialState = {
  characterHP: 100,
  characterDMG: 20,
  characterMP: 100,
  characterXP: 0,
  characterLVL: 1,
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case XP_GAIN:
      let stateCopy = { ...state };
      stateCopy.characterXP += action.xp;
      return stateCopy;
    default:
      return state;
  }
};

export const xpGain = (gainedXP) => ({ type: XP_GAIN, xp: gainedXP });

