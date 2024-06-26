import axios from "axios";

async function searchApi(query) {
  try {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=658c4df6&app_key=12a3c3d7057f76c7ba0a297915888a22&from=0&to=10`
    );
    const recipes = response.data.hits;
    return recipes;
  } catch (error) {
    console.log(error);
  }
}

export default searchApi;
