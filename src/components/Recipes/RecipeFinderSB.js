// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Row, Col, Modal, Flex ,message} from 'antd';
import { SearchOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { useFavorites } from '../Utilities/FavouritesContextSB';
import { useSearchHistory } from '../Utilities/HistoriesContextSB';




const { Meta } = Card;
const { Search } = Input;

function RecipeFinderSB() {
  // State hooks for managing recipe data and display
  const [recipesSharath, setRecipesSharath] = useState([]);
  // State hooks for managing recipe data and display
  const [displayedRecipesSharath, setDisplayedRecipesSharath] = useState([]);
  // State hooks for managing recipe data and display
  const [showMoreCountSharath, setShowMoreCountSharath] = useState(3);
  // State hooks for managing recipe data and display

  const [searchQuery, setSearchQuery] = useState('');
  // State hooks for managing recipe data and display

  const [selectedRecipeSharath, setSelectedRecipe] = useState(null);
  // State hooks for managing recipe data and display

  const [modalVisibleSharath, setModalVisible] = useState(false);
  // State hooks for managing recipe data and display

  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const { searchHistory, addSearchQueryToHistory } = useSearchHistory(); 

  const API_KEY = '61225dc07050e427439dcb6708c89ba8'; 
  const APP_ID = '60f4e5c9';

  //author sharath.boyini@npci.org.in
  useEffect(() => {
    fetchRecipes();
  }, []);
  //author sharath.boyini@npci.org.in

  const fetchRecipes = async (searchQuery = 'chicken') => {
    try {
      addSearchQueryToHistory(searchQuery);
      console.log(searchHistory);
      const response = await fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      setRecipesSharath(data);
      setDisplayedRecipesSharath(data.hits.slice(0, showMoreCountSharath));
    } catch (error) {
      console.error('Error fetching :', error);
    }
  };



  //author sharath.boyini@npci.org.in

  const handleShowMoreSharathRecipes = () => {
    setShowMoreCountSharath(prevCount => prevCount + 3);
    setDisplayedRecipesSharath(recipesSharath.hits.slice(0, showMoreCountSharath + 3));
  };


    //author sharath.boyini@npci.org.in


  const openModalSharathRecipes = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

    //author sharath.boyini@npci.org.in


  const closeModalSharathRecipes = () => {
    setModalVisible(false);
  };

    //author sharath.boyini@npci.org.in


  const addToFavoritesSharath = (recipe) => {
    addToFavorites(recipe);
    console.log(favorites);
    message.success('Recipe added to favorites');
  };


    //author sharath.boyini@npci.org.in

  const removeFromFavoritesSharath = (recipe) => {
    removeFromFavorites(recipe);
    message.error('Recipe removed from favorites');
  };


    //author sharath.boyini@npci.org.in

  const isFavoriteSharathRecipes = (recipe) => {
    return favorites.some(fav => fav.recipe.uri === recipe.recipe.uri);
  };


    //author sharath.boyini@npci.org.in

  return (
    <div>
      <h3>Search for recipesSharath</h3>
      <Input.Search
        placeholder="Search for recipesSharath like chicken"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={value => { setSearchQuery(value); fetchRecipes(value); }}
        style={{ marginBottom: '20px', padding: '10px', width: '900px', borderColor: 'black' }}
      />
      <h1>Recipe Details</h1>
      <Row gutter={[48, 48]}>
        {/* sharath.boyini@npci.org.in */}

        {displayedRecipesSharath.map(recipe => (
          <Col key={recipe.recipe.uri} xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card
              style={{ marginBottom: '60px' }}
              cover={<img alt="recipe" src={recipe.recipe.image} style={{ height: '400px', objectFit: 'cover' }} />}
            >
                    {/* sharath.boyini@npci.org.in */}

              <Meta title={"Name : " + recipe.recipe.label} />
              <Meta title={"Calories : " + recipe.recipe.calories} />
              <Meta title={"Meal Type : " + recipe.recipe.mealType} />
              <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper">
                <Button type="primary" style={{ marginTop: '10px', marginLeft: '200px' }} ghost onClick={() => openModalSharathRecipes(recipe)}>
                  Get more details
                </Button>
                      {/* sharath.boyini@npci.org.in */}

                {isFavoriteSharathRecipes(recipe) ? (
                  <Button type="primary" style={{ marginTop: '10px', marginLeft: '10px' }} onClick={() => removeFromFavoritesSharath(recipe)} icon={<StarFilled />} />
                ) : (
                  <Button type="primary" style={{ marginTop: '10px', marginLeft: '10px' }} onClick={() => addToFavoritesSharath(recipe)} icon={<StarOutlined />} />
                )}
                      {/* sharath.boyini@npci.org.in */}

              </Flex>
            </Card>
          </Col>

        ))}
      </Row>
      {showMoreCountSharath < recipesSharath.count && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                {/* sharath.boyini@npci.org.in */}

          <Button type="primary" onClick={handleShowMoreSharathRecipes}>View More</Button>
        </div>
      )}
      
      <Modal
        title="Recipe Details"
        visible={modalVisibleSharath}
        onCancel={closeModalSharathRecipes}
        footer={null}
        style={{width:'800px'}}
      >
        {selectedRecipeSharath && (
          <div>
                  {/* sharath.boyini@npci.org.in */}

            <h2>{selectedRecipeSharath.recipe.label}</h2>
            <img alt="recipe" src={selectedRecipeSharath.recipe.image} style={{ height: '400px', objectFit: 'cover' }} />
            <p>Calories: {selectedRecipeSharath.recipe.calories}</p>
            <p>Ingredients:</p>
            <ul>
                    {/* sharath.boyini@npci.org.in */}

              {selectedRecipeSharath.recipe.ingredients.map(ingredient => (
                <li key={ingredient.text}>
                  {` ${ingredient.text}`}
                </li>
                
              ))}
            </ul>
            <p>Total Nutrients:</p>
            <ul>
                    {/* sharath.boyini@npci.org.in */}

              {Object.entries(selectedRecipeSharath.recipe.totalNutrients).slice(0,10).map(([key, nutrient]) => (
                <li key={key}>
                  {nutrient.label}: {nutrient.quantity} {nutrient.unit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default RecipeFinderSB;
