class FotoController {
  async store(req, res) {
    res.send(req.file);
  }
}

export default new FotoController();
