import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2860862bcb234b1dae760f1bdd77b9c2",
  },
});
