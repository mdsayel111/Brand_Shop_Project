const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookiePerser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51OEV5zDsoBM3ry43CA7u3xs0Mh2ij3QaWJqalFwpu43zbwEivIQukSrsMdokuGofnlmVYnUysHOAEexTIWdT3YKs00mSKAmvoS"
);

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://brand-shop.surge.sh", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(cookiePerser());

// middleware

const verifyToken = async (req, res, next) => {
  const { uid } = req.params;
  const { token } = req.cookies;
  jwt.verify(token, "shhhhh", function (err, decoded) {
    if (err) {
      return res.status(400).send(err);
    }
    if (decoded.uid === uid) {
      return next();
    }
    console.log(uid, decoded.uid);
    return res.status(400).send({ massage: "unathorized" });
  });
};

const uri = `mongodb+srv://mdsayel111:${process.env.MONGODB_USER_PASSWORD}@brand-shop-project.afaympc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db("Brand_Shop");
const Cars = database.collection("Cars");
const Users = database.collection("Users");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    app.get("/", (req, res) => res.send(`surver is running port ${port}`));

    app.get("/user/:uid", async (req, res) => {
      const param = req.params.uid;
      const query = { uid: param };
      result = await Users.findOne(query);
      console.log(result);
      res.send(result);
    });

    app.get("/totalProduct", async (req, res) => {
      const count = await Cars.estimatedDocumentCount();
      res.send({ count });
    });

    app.get("/cars/:car", async (req, res) => {
      const param = req.params.car;
      const query = { brandName: `${param}` };
      const cursor = await Cars.find(query);
      const allCars = await cursor.toArray();
      res.send(allCars);
    });

    app.get("/car/:id", async (req, res) => {
      const param = req.params.id;

      const query = { _id: new ObjectId(param) };
      const car = await Cars.findOne(query);
      res.send(car);
    });

    app.get("/cars", async (req, res) => {
      let { currentPage, itemPerPage, minPrice, maxPrice, search } = req.query;
      console.log(req.query);
      let query = {};
      if (maxPrice !== "undefined") {
        currentPage = 1;
        query = {
          price: { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) },
        };
      }

      if (search) {
        query.name = {
          $regex: new RegExp(search),
          $options: "i",
        };
      }

      console.log(query);
      const cars = await Cars.find(query)
        .skip((parseInt(currentPage) - 1) * parseInt(itemPerPage))
        .limit(parseInt(itemPerPage))
        .toArray();
      console.log(cars.length);
      res.send(cars);
    });

    app.get("/my_cart/:uid", verifyToken, async (req, res) => {
      const param = req.params.uid;
      const query = { uid: param };
      const User = await Users.findOne(query);
      res.send(User?.cart ? User.cart : []);
    });

    app.get("/logOut", async (req, res) => {
      res.clearCookie("token");
      res.send("cookie foo cleared");
    });

    app.post("/create-payment-intent", async (req, res) => {
      const { item } = req.body;
      console.log(item);

      const price = parseFloat(item) * 100

      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: price,
        currency: "usd",
        payment_method_types: ["card"],
      });
      console.log(paymentIntent.client_secret);

      res.send({clientSecret: paymentIntent.client_secret});
    });

    app.post("/token", async (req, res) => {
      const data = req.body;
      var token = jwt.sign(data, "shhhhh", { expiresIn: "1h" });
      // console.log(req.cookies);
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: false,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });
      res.send({ massage: "Success" });
    });

    app.post("/car", async (req, res) => {
      const car = req.body;
      const result = await Cars.insertOne(car);
      res.send(result);
    });

    app.post("/user", async (req, res) => {
      const user = req.body;
      user.cart = [];
      const result = await Users.insertOne(user);
      res.send(result);
    });

    app.put("/car/:id", async (req, res) => {
      const param = req.params.id;
      const updatedCarDetails = {
        $set: {
          ...req.body,
        },
      };
      const query = { _id: new ObjectId(param) };
      const options = { upsert: true };
      const result = await Cars.updateOne(query, updatedCarDetails, options);
      res.send(result);
    });

    app.put("/addCart/:userUid", async (req, res) => {
      const param = req.params.userUid;
      const car = req.body;
      const query = { uid: param };
      const options = { upsert: true };
      const User = await Users.findOne(query);
      User.cart.push(car);
      const updateDoc = {
        $set: {
          ...User,
        },
      };
      const result = await Users.updateOne(query, updateDoc, options);
      res.send(result);
    });

    app.put("/my_cart/:uid", async (req, res) => {
      const car = req.body;
      const param = req.params.uid;
      const query = { uid: param };
      const user = await Users.findOne(query);
      const updateCart = user.cart.filter((item) => item._id !== car._id);
      user.cart = updateCart;
      const updateDoc = {
        $set: {
          ...user,
        },
      };
      const options = { upsert: true };
      const result = await Users.updateOne(query, updateDoc, options);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
