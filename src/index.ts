import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/books.routes";
import booksRoutes from "./routes/books.routes";
import affirmationsRoutes from "./routes/affirmations.routes";
import meditationsRoutes from "./routes/meditations.routes"

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// Rutas
app.use("/api/users", usersRoutes);
app.use("/api/books", booksRoutes);
app.use("/api/affirmations", affirmationsRoutes);
app.use("/api/meditations", meditationsRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
