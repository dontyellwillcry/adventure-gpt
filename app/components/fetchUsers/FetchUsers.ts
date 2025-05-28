import axios from "axios";

export default async function fetchUsers() {
    try {
      const response = await axios.get("/api/users")
      console.log("This is my item", response.data)
      return response.data
    } catch (error) {
      console.error("There was a problem fetching from users table", error)
    }
  }