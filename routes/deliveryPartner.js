const express = require("express");
const router = express.Router();
// const admin = require("firebase-admin");
// const db = admin.firestore();

router.get("/sign-up", async (req, res) => {
  res.json("hello World 123342");
  console.log("hello");
  //   const { mobile_number, name, driving_license, aadhar_card, bank_account } =
  //     req.body;
  //   if (
  //     !mobile_number ||
  //     !name ||
  //     !driving_license ||
  //     !aadhar_card ||
  //     !bank_account
  //   ) {
  //     return res.status(400).send("All fields are required");
  //   }
  //   try {
  //     const newPartner = {
  //       mobile_number,
  //       name,
  //       driving_license,
  //       aadhar_card,
  //       bank_account,
  //       created_at: admin.firestore.FieldValue.serverTimestamp(),
  //     };
  //     const docRef = await db.collection("delivery_partners").add(newPartner);
  //     res.status(201).send(`Delivery partner created with ID: ${docRef.id}`);
  //   } catch (error) {
  //     console.error("Error adding delivery partner: ", error);
  //     res.status(500).send("Internal Server Error");
  //   }
});

module.exports = router;
