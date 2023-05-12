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
  const q = req.query.q;

  try {
    if (q) {
      const filteredDoc = documents.filter((doc) => {
        const values = Object.values(doc);
        return values.some(
          (value) =>
            typeof value === "string" &&
            value.toLocaleLowerCase().includes(q.toLocaleLowerCase())
        );
      });

      if (filteredDoc) {
        res.send(filteredDoc);
      } else {
        res.status(404).send("Document not found");
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

    if (q && fields) {
      res.status(400).send("Query parameter and data can't be provided");
    } else if (fields) {
      const document = documents.filter((doc) => {
        const docKeyValue = Object.entries(doc);
        return docKeyValue.some(([key, value]) => {
          return doc[key] === fields[key] && doc[value] === fields[value];
        });
      });

      if (document) {
        res.send(document);
      } else {
        res.send("Document not found");
      }
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
