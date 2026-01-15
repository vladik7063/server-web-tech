const http = require("http");

const PORT = process.env.PORT || 3000;

const LOGIN = "73571251-0d67-43a6-8f17-71d0f123732avladik7063";

const server = http.createServer((req, res) => {
  if (req.url === "/login") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(LOGIN);
    return;
  }

  if (req.url === "/hour") {
    const now = new Date();

    const moscowHour = new Intl.DateTimeFormat("ru-RU", {
      timeZone: "Europe/Moscow",
      hour: "2-digit",
      hour12: false,
    }).format(now);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(moscowHour);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
