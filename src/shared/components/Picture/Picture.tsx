import React from 'react';
import { ISrcMapItem } from '../../utils/types/srcMap.types';
import styles from './Picture.module.scss';

interface PropsT {
  srcMap: ISrcMapItem[];
  defaultSrc: string;
  imageStyles?: Object;
}

const Picture: React.FC<PropsT> = ({ srcMap, defaultSrc, imageStyles }) => {
  return (
    <picture>
      {srcMap.map(({ breakPoint, src }) => (
        <source
          key={breakPoint}
          srcSet={src}
          media={`(max-width: ${breakPoint}px)`}
        />
      ))}
      <img src={defaultSrc} className={styles.image} style={imageStyles} />
    </picture>
  );
};

export default Picture;
