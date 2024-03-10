import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Ss11L51qkxBEGuWeBfX1w4VxzW61Ytroqq6mRikw6ROIq-GpjYTtwZu8WF-7YObsvpMe9f2etySlEan1gmoyQb6pK3Al9ShORRSSWnUR-dP3OVrBzRK0Die2C9nsZXYx",
  },
});
