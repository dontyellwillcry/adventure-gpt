import axios from "axios";

export default async function fetchItems() {
  try {
    const response = await axios.get("/api/items");
    console.log("This is my item", response.data);
    return response.data;
  } catch (error) {
    console.error("There was a problem fetching from items table", error);
  }
}

//test push
