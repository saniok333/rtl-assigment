import { ISrcMapItem } from './types/srcMap.types';

interface ISrcMap {
  [key: number]: { type: string };
}

interface IGetSrcMap {
  config: ISrcMap;
  crops: ArticlesModel.Crop[];
}

export const getSrcMap = ({ config, crops }: IGetSrcMap): ISrcMapItem[] => {
  const pictureConfig = Object.entries(config).map(([breakPoint, { type }]) => {
    const src = crops.find((imageCrop) => imageCrop.type === type)?.path ?? '';

    return {
      breakPoint,
      src,
    };
  });

  return pictureConfig.filter((item) => item.src);
};
