import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import RecipeFinderSB from '../components/Recipes/RecipeFinderSB';


//                    {/* sharath.boyini@npci.org.in */}

describe('RecipeFinderSB component', () => {
  it('renders search input and button', () => {
    render(<RecipeFinderSB />);
    const searchInput = screen.getByPlaceholderText('Search for recipes like chicken');
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByText('Search');
    expect(searchButton).toBeInTheDocument();
  });

     //                 {/* sharath.boyini@npci.org.in */}


  it('fetches and displays recipes', async () => {
    render(<RecipeFinderSB />);
    const searchInput = screen.getByPlaceholderText('Search for recipes like chicken');
    fireEvent.change(searchInput, { target: { value: 'pasta' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      const recipeCards = screen.getAllByRole('article');
      expect(recipeCards.length).toBeGreaterThan(0);
    });
  });

  //                    {/* sharath.boyini@npci.org.in */}


  it('displays recipe details in modal when "Get more details" button is clicked', async () => {
    render(<RecipeFinderSB />);
    const searchInput = screen.getByPlaceholderText('Search for recipes like chicken');
    fireEvent.change(searchInput, { target: { value: 'pizza' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      fireEvent.click(screen.getByText('Get more details'));
    });

    const modalTitle = screen.getByText('Recipe Details');
    expect(modalTitle).toBeInTheDocument();

    const recipeName = screen.getByText('Pizza');
    expect(recipeName).toBeInTheDocument();
  });

});
