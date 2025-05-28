import axios from "axios";

export default async function fetchUsers() {
    try {
      const response = await axios.get("/api/users")
      console.log("This is my item", response.data)
    } catch (error) {
      console.error("There was a problem fetching from items table", error)
    }
  }