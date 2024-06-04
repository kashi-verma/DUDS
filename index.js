const express = require("express");
const bodyParser = require("body-parser");
// const admin = require("firebase-admin");

// const serviceAccount = require("./permission.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL:
//     "https://console.firebase.google.com/project/fir-api-fbf5d/firestore/databases/-default-/data/~2FFirbase-API~2F2flWP7ifyjDLnquF9fqe",
// });

const app = express();
app.use(bodyParser.json());

const deliveryPartnerRoutes = require("./routes/deliveryPartner.js");
// app.use("/api/delivery-partner", deliveryPartnerRoutes);
app.use("/", deliveryPartnerRoutes);
const PORT = 80;
app.listen(PORT, () => {
  console.log("Server is running on port 80");
});
