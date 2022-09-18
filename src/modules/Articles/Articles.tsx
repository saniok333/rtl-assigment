import { Main } from '../../shared/layouts/Main';
import data from '../../mocks/mock.json';
import { ListItem } from '../../shared/components/ListItem';

const Articles = () => {
  const { title, label, description, image, bundelItems } =
    data as ArticlesModel.ApiResponse;

  const [{ urlAlias }] = bundelItems;

  console.log(urlAlias);

  return (
    <Main
      imageData={image}
      title={title}
      label={label}
      description={description}
    >
      {bundelItems.map(
        ({ urlAlias, titel, lead, id, labelValue, afbeelding }) => (
          <ListItem
            key={id}
            imageData={afbeelding}
            urlAlias={urlAlias}
            title={titel}
            label={labelValue}
            description={lead}
          />
        )
      )}
    </Main>
  );
};

export default Articles;
