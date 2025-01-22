/*const fs = require("fs"); // fs is the file system module

//const fs = require("fs");  fs is the file system module

const username = "dhr";
const email = "dhr@gmail.com";

// Convert data into JSON format
const data = JSON.stringify({ username, email }, null, 2); // Pretty format with 2 spaces

fs.writeFile("./a.json", data, (err) => {
    if (err) {
        console.error("An error occurred:", err);
        return;
    }
    console.log("File written successfully in JSON format");
});


/*const username = "dhr";
const email = "dhr@gmail.com";

fs.writeFile("./a.txt", `${username} and ${email}`, (err) => {
    if (err) {
        console.error("An error occurred:", err);
        return;
    }
    console.log("File written successfully");
});

*/

//writeFile is one of the function in fs
/*fs.readFile("./a.txt","utf-8",(err,data)=>{

    if(err){
        console.error(err);
    }else{
    console.log(data)
    }
}) 

    const fs = require("fs"); // fs is the file system module

    const username = "dhr";
    const email = "dhr@gmail.com";
    
    // Convert data into JSON format
    const data = JSON.stringify({ username, email }, null, 2); // Pretty format with 2 spaces
    
    fs.writeFile("./a.txt", data, (err) => {
        if (err) {
            console.error("An error occurred:", err);
            return;
        }
        console.log("File written successfully in JSON format");
    });
    */

/*const express = require("express");
const app = express();
const fs=require("fs")

app.use(express.json())
app.post("/",(req,res)=>{
    const name=req.body.name;
    //const std = req.body.std; //give res.send put std also
    fs.writeFile("./a.txt",name,(err)=>{
        res.send(`${name}`);
    })

    res.send(`${name}`);
})

app.use(express.json())// middle ware always be on top if its down it will come as error


// send user name from post ,fetch username from text both match means logged in otherwise no
app.post("/",(req,res)=>{
    const name=req.body.name;
    const std = req.body.std;

    res.send(`${name} ${std}`);
})

*/
/*
app.post("/",(req,res)=>{
    const token=req.headers.token

    res.send(`${token}`);
})

for passing tokens in headers
*/


/*app.get("/pages", (req, res) => {
    const name=req.query.username;
    const email=req.query.email;
    res.send(`${name}and ${email}`)

    res.send("post route")
})
//const PORT = process.evn
app.listen(3000,()=>{
        console.log("server started or listening on port no 3000")

})   // for port no using always give this no if busy give another no.*/

/*app.get("/pages", (req, res) => {
    //res.send("server responded success")
    const pageNumber = req.query.pageNumber;
    res.send(pageNumber);
})*/
// app.get(path,callback) req is request,res response u want to anything can send here abc,bbc its not crt way  if we didnt send anything the requset and res will happen continously if give in new terminal the error msg will come as 3000 port already in use
// one response we have 1 request cnt have many,browser can get only not do other methods,using postman for restaring and deleting the command is node --watch filename
// for sharing data we use json format method is http method and query params(less sensitive),body(very sensitive),headers(large data) are used for sending in frontend to backend
/* app.get("/login",(req,res)=>{
     res.send("login sucess")
 })

app.post("/users", (req, res) => {
    res.send("post route")
})

app.put("/users", (req, res) => {
    res.send("put route")
})

app.delete("/users", (req, res) => {
    res.send("route")
})*/


/*const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
function sampleMiddleware(req,res,next){
    if(username==="dhr"){
        next();// we should give this function for the next purpode if dont give it will not be stuck in middle
    }
    else{
        res.send("not logged")
    }
}
app.post("/users",sampleMiddleware,(req,res)=>{
    res.send("sucess in users route")
   
})

app.put("/login",sampleMiddleware,(req,res)=>{
    res.send("sucess in users route")
   
})
app.post("/signup",sampleMiddleware,(req,res)=>{
    res.send("sucess in users route")
   
})

app.listen(3000, () => {
    console.log("server started");
})
/* // Save username
app.post("/users", (req, res) => {
    const username = req.body.username;

    if (!username) {
        return res.status(400).send("Username is required.");
    }

    fs.writeFile("./a.txt", username, (err) => {
        if (err) {
            return res.status(500).send("Error saving username.");
        }
        res.send(`Username ${username} saved successfully.`);
    });
});

// Fetch and validate username
app.get("/users/:username", (req, res) => {
    const username = req.params.username;

    fs.readFile("./a.txt", "utf8", (err, savedUsername) => {
        if (err) {
            return res.status(500).send("Error reading saved username.");
        }

        if (savedUsername === username) {
            res.send("Logged in.");
        } else {
            res.send("Username is wrong.");
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.listen(3000, () => {
    console.log("server started");
})*/

//create  post,put,post with routes name different respectively /users,/log,/signup and all should have the same condition username=req.body.username if(username===username)
/*
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
function sampleMiddleware(req,res,next){
    const username = req.body.username;
    if(username==="dhr"){
        next();// we should give this function for the next purpode if dont give it will not be stuck in middle
    }
    else{
        res.send("not logged")
    }
}

function sampleMiddlewareIP(req,res,next){
    const ip= req.headers.ip;
    if(ip === "1.12.12"){
        next();// we should give this function for the next purpode if dont give it will not be stuck in middle
    }
    else{
        res.send("not logged ")
    }
}

app.post("/users",sampleMiddleware ,sampleMiddlewareIP,(req, res) => {
    res.send("not logged in")
});

app.listen(3000, () => {
    console.log("server started");
})

// Middleware for username validation and processing
const validateAndProcessUsername = (req, res, next) => {
    const username = req.body.username;

    if (!username) {
        return res.status(400).send("Username is required.");
    }

    // Save the username to the request object for further use
    req.username = username;
    next();
};

// Save username to a file (used in /users)
const saveUsernameToFile = (username, res) => {
    fs.writeFile("./a.txt", username, (err) => {
        if (err) {
            return res.status(500).send("Error saving username.");
        }
        res.send(`Username ${username} saved successfully.`);
    });
};

// POST /users - Save username
app.post("/users", validateAndProcessUsername, (req, res) => {
    saveUsernameToFile(req.username, res);
});

// PUT /log - Validate username
app.put("/log", validateAndProcessUsername, (req, res) => {
    fs.readFile("./a.txt", "utf8", (err, savedUsername) => {
        if (err) {
            return res.status(500).send("Error reading saved username.");
        }

        if (savedUsername === req.username) {
            res.send("Logged in successfully.");
        } else {
            res.status(400).send("Username does not match.");
        }
    });
});

// POST /signup - Simulate signup
app.post("/signup", validateAndProcessUsername, (req, res) => {
    res.send(`Signup successful for ${req.username}.`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



const express = require("express");
const app = express();

app.set("view engine", "ejs"); // Connection has been created
app.use(express.static("public")); // Serve static files from the 'public' folder

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
*/

/*const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("mongodb://localhost:27017")
    .then(() => { console.log("db connect"); })
    .catch(() => { console.log("db not connect"); });

// Schema definition
const mySchema = mongoose.Schema({
    user: String,
    email: {
        type: String,
        required: true,
    },
    phone_number: Number
});

const User = mongoose.model("user", mySchema); // Model creation

// POST route for login (add user details)
app.post("/login", (req, res) => {
    const { username, email, phone_number } = req.body;
    const details = {
        user: username,
        email: email,
        phone_number: phone_number
    };

    const userDetails = new User(details);
    userDetails.save()
        .then(() => { res.send("success"); })
        .catch(() => { res.send("went wrong"); });
});

// DELETE route for removing user details by username, email, and phone number
app.delete("/delete", (req, res) => {
    const { username, email, phone_number } = req.body;

    User.deleteOne({ user: username, email: email, phone_number: phone_number })
        .then((result) => {
            if (result.deletedCount > 0) {
                res.send("User deleted successfully");
            } else {
                res.send("No matching user found");
            }
        })
        .catch(() => {
            res.send("Error while deleting user");
        });
});

// GET route for fetching user details
app.get("/fetch", async (req, res) => {
    try {
        const { username } = req.query;

        if (username) {
            const user = await User.findOne({ user: username });
            if (user) {
                res.json(user);
            } else {
                res.send("No user found with the given username");
            }
        } else {
            const users = await User.find();
            res.json(users);
        }
    } catch (error) {
        res.send("Error while fetching users");
    }
});


app.get("/fetch",(req,res)=>{
    const  username=req.query.username;
    user.findOne({user:username})
    .then((response)=>{
        res.send(response);
    })
    .catch(()=>{
        res.send("did not"+username);
    })
})

//const async await
app.listen(3000, () => {
    console.log("Server started on port 3000");
});


// DELETE route for removing user details by username
app.delete("/delete", (req, res) => {
    const { username } = req.body;

    User.deleteOne({ user: username })
        .then((result) => {
            if (result.deletedCount > 0) {
                res.send("User deleted successfully");
            } else {
                res.send("No matching user found");
            }
        })
        .catch(() => {
            res.send("Error while deleting user");
        });
});

// GET route for fetching user details (using async/await)
app.get("/fetch", async (req, res) => {
    try {
        const { username } = req.query;

        if (username) {
            const user = await User.findOne({ user: username });
            if (user) {
                res.json(user);
            } else {
                res.send("No user found with the given username");
            }
        } else {
            const users = await User.find();
            res.json(users);
        }
    } catch (error) {
        res.send("Error while fetching users");
    }
});

// Schema definition
const mySchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("user", mySchema); // Model creation

// POST route for login (add user details)
app.post("/login", (req, res) => {
    const { username } = req.body;
    const details = {
        user: username
    };

    const userDetails = new User(details);
    userDetails.save()
        .then(() => { res.send("success"); })
        .catch(() => { res.send("went wrong"); });
});

app.get("/",(req,res)=>{
    res.send("server started");
})

//fetching from postman to mongodb

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/")
    .then(() => { console.log("db connect"); })
    .catch(() => { console.log("db not connect"); });



const mySchema= new mongoose.Schema({randomName:String})
const user=mongoose.model("user",mySchema)


 app.post("/sample",async(req,res)=>{
     const randomName= req.body.randomName;
     const details={
         randomName:randomName
     };
     const userDetails=new user(details);
     const response= await userDetails.save()
     res.send(response)
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

//fetching name from frontend to backend
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("db connect");
  })
  .catch(() => {
    console.log("db not connect");
  });

const mySchema = new mongoose.Schema({ randomName: String });
const User = mongoose.model("user", mySchema);

app.post("/sample", async (req, res) => {
  try {
    const randomName = req.body.randomName; // Extracting from body
    const details = { randomName };
    const userDetails = new User(details);
    const response = await userDetails.save();
    res.send(response); // Send the saved response
  } catch (error) {
    res.status(500).send("Error saving details");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});


//create a backend store username and password the password should be cypertext using jwttokens
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 3000;
const SECRET_KEY = "your_jwt_secret_key"; // Use a strong, secret key in production

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/authDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection failed:", err));

// Define a schema and model for users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Route to register a new user
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Route to log in a user
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Route to verify JWT token (optional)
app.post("/verify", (req, res) => {
  const { token } = req.body;

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ message: "Token is valid", decoded });
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// from frontend to backend

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 3000;
const SECRET_KEY = "your_jwt_secret_key"; // Use a secure key in production

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/authDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection failed:", err));

// Schema and Model for Users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Register a user
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Log in a user
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



//from frontend to mangodb database

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/authDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Registration Endpoint
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user in the database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});






const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
app.post





app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  }); 

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
var jwt = require("jsonwebtoken");
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/sampleDB")
  .then(() => {
    console.log("DB Ready");
  })
  .catch(() => {
    console.log("DB Not Connected");
  });

app.post("/", (req, res) => {
  res.json({ success: true });
});

*/
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/authDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Endpoint for signing in
app.post("/signin", async (req, res) => {
  try {
    const { username } = req.body;

    // Search for the user in the database
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ success: true }); // Username found
    } else {
      return res.json({ success: false }); // Username not found
    }
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Default route to test connection
app.post("/", (req, res) => {
  res.json({ success: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
