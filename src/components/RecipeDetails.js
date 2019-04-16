import React, { Component } from 'react';
import { recipe } from './tempDetails';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: recipe,
      url: `https://www.food2fork.com/api/get?key=99aca2e5f66533a92b35fe33e8ff48cb&rId=${
        this.props.id
      }`
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipe: jsonData.recipe
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { handleIndex } = this.props;
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                className="btn btn-warning text-capitalize mb-5"
                onClick={() => handleIndex(1)}
              >
                back to recipe list
              </button>
              <img src={image_url} alt="recipe" className="d-block w-100" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-slanted mb-5">
                Provided By {publisher}
              </h6>
              <a
                href={publisher_url}
                className="btn btn-primary text-capitalize mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                publisher webpage
              </a>
              <a
                href={source_url}
                className="btn btn-success text-capitalize mt-2 mx-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredients.map((ingredient, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default RecipeDetails;
