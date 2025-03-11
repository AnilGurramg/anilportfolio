import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";

const app = express();
const PORT = 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: "*" }));    
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/message", (req, res) => {
    res.json({ message: "hello world123" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});