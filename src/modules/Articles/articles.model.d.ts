declare global {
  namespace ArticlesModel {
    type CropType =
      | 'inline_small'
      | 'artikel_top'
      | 'staand'
      | 'liggend_breed'
      | 'liggend'
      | 'liggend_breed_nieuwsopening'
      | 'square_medium'
      | 'square_small';

    interface Crop {
      type: CropType;
      height: number;
      width: number;
      ratio: string;
      path: string;
    }

    interface Article {
      id: number;
      titel: string;
      urlAlias: string;
      labelValue: string;
      lead: string;
      afbeelding: {
        afbeelding: string;
        crops: Crop[];
      };
    }

    interface ApiResponse {
      bundelItems: Article[];
      title: string;
      label: string;
      description: string;
      image: {
        imageUrl: string;
        crops: Crop[];
      };
    }
  }
}

export {};
