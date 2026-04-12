import { readFile } from 'fs/promises';
import { createServer } from 'http';

const server = createServer(async (req, res) => {

  try {
    if (req.method === "GET") {

      if (req.url === "/") {
        const data = await readFile("./index.html");
        // res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(data);
      }

      if (req.url === "/style.css") {
        const data = await readFile("./style.css");
        // res.writeHead(200, { "Content-Type": "text/css" });
        return res.end(data);
      }

      // 🔥 fallback (IMPORTANT)
      res.writeHead(404);
      res.end("Page Not Found");
    }

  } catch (error) {
    console.log(error);
    res.writeHead(500);
    res.end("Server Error");
  }

});

server.listen(3002, () => {
  console.log("Running on http://localhost:3002");
});