const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

// Importig our doc json
const documents = require("./documents.json");

// If q is not provided, the endpoint should return all documents.
// If q is provided, the endpoint should return the documents with some field that matches the value of q.

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search
app.get("/search", (req, res) => {
  const q = req.query.toLowerCase();

  try {
    if (q) {
      const filteredDocuments = documents.filter((doc) => {
        const values = Object.values(doc);
        return values.some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(q.toLowerCase())
        );
      });

      if (filteredDocuments) {
        res.send(filteredDocuments);
      } else {
        res.status(404).send("Your files is not found");
      }
    } else {
      res.send(documents);
    }
  } catch (error) {
    res.status(500).end(error);
  }
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  try {
    const documentId = Number(req.params.id);
    const document = documents.find((doc) => doc.id === documentId);
    if (!document) {
      return res.status(404).send(`Document with id: ${documentId} not Found!`);
    }
    res.json(document);
  } catch (error) {
    res.status(500).end(error);
  }
});

// POST /search
app.post("/search", (req, res) => {
  try {
    const q = req.query.q;
    const fields = req.body.fields;

    if (fields) {
      const documents = documents.filter((doc) => {
        for (const [key, value] of Object.entries(fields)) {
          if (doc[key] != value) {
            return false;
          }
        }
        return true;
      });

      return res.json(documents);
    } else {
      res.send("No search query provided");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
