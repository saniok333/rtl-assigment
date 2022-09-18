import { BREAK_POINTS } from '../../constants/breakPoints';
import { SrcMapTypes } from '../../utils/types/srcMap.types';

export const HeaderImageSrcMap = {
  [BREAK_POINTS.LARGE]: {
    type: SrcMapTypes.liggendBreed,
  },
  [BREAK_POINTS.MEDIUM]: {
    type: SrcMapTypes.liggend,
  },
};
