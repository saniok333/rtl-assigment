import { ListItemSrcMap } from '../components/ListItem/ListItem.namespace';
import { getSrcMap } from './getSrcMap';

const cropsMock: ArticlesModel.Crop[] = [
  {
    type: 'inline_small',
    height: 150,
    width: 200,
    ratio: '1.33:1',
    path: 'https://www.rtlboulevard.nl/sites/default/files/styles/inline_small/public/content/images/2018/06/19/ANP-56919532.jpg?itok=uYTfDZPr',
  },
  {
    type: 'artikel_top',
    height: 395,
    width: 694,
    ratio: '1.76:1',
    path: 'https://www.rtlboulevard.nl/sites/default/files/styles/artikel_top/public/content/images/2018/06/19/ANP-56919532.jpg?itok=SikI_AJI',
  },
  {
    type: 'liggend',
    height: 576,
    width: 1024,
    ratio: '1.78:1',
    path: 'https://www.rtlboulevard.nl/sites/default/files/styles/liggend/public/content/images/2018/06/19/ANP-56919532.jpg?itok=TBK54eRq',
  },
  {
    type: 'liggend_breed_nieuwsopening',
    height: 430,
    width: 1024,
    ratio: '2.38:1',
    path: 'https://www.rtlboulevard.nl/sites/default/files/styles/liggend_breed_nieuwsopening/public/content/images/2018/06/19/ANP-56919532.jpg?itok=HUPFexR0',
  },
  {
    type: 'square_medium',
    height: 400,
    width: 400,
    ratio: '1:1',
    path: 'https://www.rtlboulevard.nl/sites/default/files/styles/square_medium/public/content/images/2018/06/19/ANP-56919532.jpg?itok=TE8J4FE3',
  },
];

describe('getSrcMap', () => {
  it('should return srcMap', () => {
    const extraPath1 = cropsMock[3].path;
    const extraPath2 = cropsMock[4].path;

    const srcMap = getSrcMap({
      config: ListItemSrcMap,
      crops: cropsMock,
    });

    expect(srcMap).toMatchSnapshot();
    expect(srcMap.find((item) => item.src === extraPath1)).toBeFalsy();
    expect(srcMap.find((item) => item.src === extraPath2)).toBeFalsy();
  });

  it('should skip 1200 breakpoint when missing path', () => {
    cropsMock[1].path = '';

    const srcMap = getSrcMap({
      config: ListItemSrcMap,
      crops: cropsMock,
    });

    expect(srcMap).toMatchSnapshot();
  });
});
