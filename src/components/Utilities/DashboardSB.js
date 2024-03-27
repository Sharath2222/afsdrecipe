import React from 'react';
import { Card, Row, Col } from 'antd';
import { useFavorites } from '../Utilities/FavouritesContextSB';
import { useSearchHistory } from '../Utilities/HistoriesContextSB';


const { Meta } = Card;

function DashboardSB() {
  const { favorites } = useFavorites();
  const { searchHistory } = useSearchHistory();
  console.log(searchHistory);


  return (
    <div>
      <h1>Favorites</h1>
      <Row gutter={[16, 16]}>
        {favorites.map((favorite) => (
          <Col key={favorite.recipe.uri} xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={<img alt={favorite.recipe.label} src={favorite.recipe.image} />}
            >
              <Meta title={favorite.recipe.label} description={`Calories: ${favorite.recipe.calories}`} />
            </Card>
          </Col>
        ))}
      </Row>
      <h1>History</h1>
        {searchHistory.map((history) => (
          <ul  >
            <li>{history}</li>
          </ul>
        ))}
    </div>
    
  );
}

export default DashboardSB;
