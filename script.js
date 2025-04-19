var map = L.map("map").setView([51.505, -0.09], 13);

// Add a basemap tile layer
L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

// Load your GeoJSON data (replace 'your_data.geojson' with the actual filename)
// fetch("http://localhost:3000/api/download")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // Add the GeoJSON layer to the map
//     L.geoJSON(data).addTo(map);
//   });
L.geoJSON({
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [102.0, 0.5],
      },
      properties: { prop0: "value0" },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [102.0, 0.0],
          [103.0, 1.0],
          [104.0, 0.0],
          [105.0, 1.0],
        ],
      },
      properties: {
        prop0: "value0",
        prop1: 0.0,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [100.0, 0.0],
            [101.0, 0.0],
            [101.0, 1.0],
            [100.0, 1.0],
            [100.0, 0.0],
          ],
        ],
      },
      properties: {
        prop0: "value0",
        prop1: { this: "that" },
      },
    },
  ],
});
// Dashboard interaction example
map.on("click", function (e) {
  // Update dashboard based on click location
  console.log("Clicked at: ", e.latlng);
  // ... (Update chart or other dashboard elements)
});
