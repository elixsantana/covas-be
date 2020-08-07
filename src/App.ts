// import express = require("express");
import express from "express";

class App {
  public express: any;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.send("COVAS back-end");
    });
    this.express.use("/", router);
  }
}

export default new App().express;
