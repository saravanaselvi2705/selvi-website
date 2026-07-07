import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendContactEmail } from "./emailService.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FALLBACK_DB_PATH = path.join(__dirname, 'db_fallback.json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

const seedProjects = [
  {
    title: "Smart Task Coordination Dashboard",
    description: "A professional project management platform for tracking development cycles, team workloads, and resource pipelines in real time.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/saravanaselvi2705",
    liveUrl: "",
    category: "MERN Stack"
  },
  {
    title: "Robotic Arm with Pick and Place",
    description: "An interactive, multi-axis robotic hardware arm that uses pick-and-place control logic.",
    tags: ["Arduino", "Hardware", "C++", "Robotics"],
    category: "Automation",
    githubUrl: "https://github.com/saravanaselvi2705",
    liveUrl: ""
  },
  {
    title: "RAWCE IEEE SIGHT Project",
    description: "Reliable and Water Clean Energy dashboard monitoring grid loads and local battery health.",
    tags: ["Sensors", "IoT", "Clean Energy", "Embedded"],
    category: "Engineering",
    githubUrl: "https://github.com/saravanaselvi2705",
    liveUrl: ""
  },
  {
    title: "Home Automation using Li-Fi Technology",
    description: "High-speed light fidelity communication transceivers managing household node systems.",
    tags: ["Li-Fi", "Hardware", "Automation"],
    category: "Automation",
    githubUrl: "https://github.com/saravanaselvi2705",
    liveUrl: ""
  },
  {
    title: "IoT-based Robotic Car",
    description: "An internet-controlled autonomous robotic vehicle integrated with local sensors.",
    tags: ["IoT", "Robotics", "Hardware", "C++"],
    category: "Automation",
    githubUrl: "https://github.com/saravanaselvi2705",
    liveUrl: ""
  }
];

// Database state tracker
let dbMode = 'none'; // 'mongoose' or 'fallback'
let fallbackDb = {
  projects: [...seedProjects],
  messages: []
};

// Mongoose Models definitions
let ProjectModel;
let MessageModel;

const setupMongooseModels = () => {
  const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    githubUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" },
    category: { type: String, enum: ['Engineering', 'MERN Stack', 'Automation'], required: true }
  });

  const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });

  ProjectModel = mongoose.model('Project', ProjectSchema);
  MessageModel = mongoose.model('Message', MessageSchema);
};

// Seed function for Mongoose
const seedMongooseDb = async () => {
  try {
    const count = await ProjectModel.countDocuments();
    if (count === 0) {
      await ProjectModel.insertMany(seedProjects);
      console.log('Seeded database with initial engineering and MERN projects.');
    }
  } catch (err) {
    console.error('Failed to seed projects:', err);
  }
};

// Fallback JSON DB functions
const loadFallbackDb = () => {
  try {
    if (fs.existsSync(FALLBACK_DB_PATH)) {
      const raw = fs.readFileSync(FALLBACK_DB_PATH, 'utf8');
      fallbackDb = JSON.parse(raw);
      console.log('Loaded fallback database from disk.');
    } else {
      saveFallbackDb();
    }
  } catch (err) {
    console.error('Error loading fallback DB, using in-memory state:', err);
  }
};

const saveFallbackDb = () => {
  try {
    fs.writeFileSync(FALLBACK_DB_PATH, JSON.stringify(fallbackDb, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving fallback DB to disk:', err);
  }
};

// DB Connection logic
const initDatabase = async () => {
  const customUri = process.env.MONGODB_URI;

  if (customUri) {
    try {
      console.log(`Connecting to MONGODB_URI: ${customUri}`);
      await mongoose.connect(customUri);
      setupMongooseModels();
      await seedMongooseDb();
      dbMode = 'mongoose';
      console.log('Connected to custom MongoDB instance successfully.');
      return;
    } catch (err) {
      console.error('Custom MongoDB URI connection failed, trying memory server...', err);
    }
  }

  // Attempt MongoMemoryServer
  try {
    console.log('Starting MongoDB In-Memory Server...');
    const { MongoMemoryServer } = await import('mongodb-memory-server');
    const mongoServer = await MongoMemoryServer.create({
      instance: {
        dbName: 'portfolio'
      }
    });
    const memoryUri = mongoServer.getUri();
    console.log(`MongoDB Memory Server started at: ${memoryUri}`);

    await mongoose.connect(memoryUri);
    setupMongooseModels();
    await seedMongooseDb();
    dbMode = 'mongoose';
    console.log('Connected to MongoDB Memory Server successfully.');
  } catch (err) {
    console.error('Could not initialize MongoDB Memory Server (possibly offline/architecture restriction):', err.message);
    console.log('Enabling JSON File-Based Database Fallback...');
    loadFallbackDb();
    dbMode = 'fallback';
  }
};

// Initialize DB connection
await initDatabase();

// --- API ROUTES ---

// GET /api/projects
app.get('/api/projects', async (req, res) => {
  try {
    if (dbMode === 'mongoose') {
      const projects = await ProjectModel.find();
      return res.json(projects);
    } else {
      return res.json(fallbackDb.projects);
    }
  } catch (err) {
    console.error('GET /api/projects error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /api/projects
app.post('/api/projects', async (req, res) => {
  try {
    const { title, description, tags, githubUrl, liveUrl, category } = req.body;

    // Simple validation
    if (!title || !description || !category) {
      return res.status(400).json({ error: 'Title, description, and category are required.' });
    }

    const validCategories = ['Engineering', 'MERN Stack', 'Automation'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ error: `Category must be one of: ${validCategories.join(', ')}` });
    }

    if (dbMode === 'mongoose') {
      const newProject = new ProjectModel({
        title,
        description,
        tags: Array.isArray(tags) ? tags : [],
        githubUrl: githubUrl || "",
        liveUrl: liveUrl || "",
        category
      });
      await newProject.save();
      console.log('Project saved via Mongoose:', newProject);
      return res.status(201).json(newProject);
    } else {
      const newProject = {
        _id: new Date().getTime().toString(),
        title,
        description,
        tags: Array.isArray(tags) ? tags : [],
        githubUrl: githubUrl || "",
        liveUrl: liveUrl || "",
        category
      };
      fallbackDb.projects.push(newProject);
      saveFallbackDb();
      console.log('Project saved via JSON Fallback:', newProject);
      return res.status(201).json(newProject);
    }
  } catch (err) {
    console.error('POST /api/projects error:', err);
    res.status(500).json({ error: 'Failed to create project.' });
  }
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (dbMode === 'mongoose') {
      const newMessage = new MessageModel({ name, email, message });
      await newMessage.save();

      // Send notification email
      await sendContactEmail({
        name,
        email,
        message
      });

      console.log('Message saved via Mongoose:', newMessage);

      return res.status(201).json({
        success: true,
        message: 'Message sent successfully!',
        data: newMessage
      });
    } else {
      const newMessage = {
        _id: new Date().getTime().toString(),
        name,
        email,
        message,
        createdAt: new Date()
      };
      fallbackDb.messages.push(newMessage);
      saveFallbackDb();

      // Send notification email
      await sendContactEmail({
        name,
        email,
        message
      });

      console.log('Message saved via JSON Fallback:', newMessage);

      return res.status(201).json({
        success: true,
        message: 'Message sent successfully!',
        data: newMessage
      });
    }
  } catch (err) {
    console.error('POST /api/contact error:', err);
    res.status(500).json({ error: 'Failed to process message.' });
  }
});
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    project: "Saravana Selvi Portfolio Backend",
    version: "1.0.0",
    database: dbMode,
    endpoints: {
      health: "/health",
      projects: "/api/projects",
      contact: "/api/contact"
    }
  });
});
// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', databaseMode: dbMode });
});

// Start express server
app.listen(PORT, () => {
  console.log(`Backend Server running on port ${PORT} in [${dbMode}] mode.`);
});
