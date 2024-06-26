import axios from "axios";

async function getRandomRecipes() {
  const url =
    "https://api.edamam.com/search?q=salad,chicken&app_id=7399df41&app_key=f21cb635ad6a425d9ed9dee34d999a3d&from=0&to=10";
  try {
    const response = await axios.get(url);

    const recipes = response.data.hits;

    return recipes;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export default getRandomRecipes;
