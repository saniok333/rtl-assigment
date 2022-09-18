import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import { getSrcMap } from '../../utils/getSrcMap';
import { Picture } from '../Picture';
import styles from './ListItem.module.scss';
import { ListItemSrcMap } from './ListItem.namespace';

interface IImageData {
  afbeelding: string;
  crops: ArticlesModel.Crop[];
}

export interface PropsT {
  title: string;
  label: string;
  description: string;
  urlAlias: string;
  imageData: IImageData;
}

const ListItem: React.FC<PropsT> = ({
  title,
  label,
  description,
  urlAlias,
  imageData,
}): JSX.Element => {
  const { crops, afbeelding } = imageData;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(containerRef);

  const srcMap = getSrcMap({
    config: ListItemSrcMap,
    crops,
  });

  return (
    <div ref={containerRef} className={styles.itemContainer}>
      <a href={urlAlias}>
        {isVisible && <Picture srcMap={srcMap} defaultSrc={afbeelding} />}
        <div className={styles.infoContainer}>
          <h3 className={styles.label}>{label}</h3>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ListItem;
