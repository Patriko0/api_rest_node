import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['Id não enviado'] });

      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });

      const novoUser = await user.update(req.body);

      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['Id não enviado'] });

      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });

      await user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
