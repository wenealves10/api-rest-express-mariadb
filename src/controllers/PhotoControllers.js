class PhotoControllers {
  async store(req, res) {
    return res.status(200).json({ status: req.file });
  }
}

export default new PhotoControllers();
