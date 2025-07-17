import axios from "axios";

export default async function fetchUsers() {
  try {
    const response = await axios.get("/api/users");
    console.log("These are our users", response.data);
    return response.data;
  } catch (error) {
    console.error("There was a problem fetching from users table", error);
  }
}
