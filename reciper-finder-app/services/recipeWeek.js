import axios from "axios";

async function getRecipeWeek() {
  const url =
    "https://api.edamam.com/api/recipes/v2?type=public&app_id=7399df41&app_key=f21cb635ad6a425d9ed9dee34d999a3d&dishType=Main%20course&from=0&to=15";
  try {
    const response = await axios.get(url);

    const recipes = response.data.hits;
    const randomRecipes = [];

    // Rastgele tarifler seçiyoruz

    return recipes;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export default getRecipeWeek;
