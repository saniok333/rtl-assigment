import { BREAK_POINTS } from '../../constants/breakPoints';
import { SrcMapTypes } from '../../utils/types/srcMap.types';

export const ListItemSrcMap = {
  [BREAK_POINTS.EXTRA_LARGE]: {
    type: SrcMapTypes.liggend,
  },
  [BREAK_POINTS.LARGE]: {
    type: SrcMapTypes.artikelTop,
  },
  [BREAK_POINTS.MEDIUM]: {
    type: SrcMapTypes.inlineSmall,
  },
};
