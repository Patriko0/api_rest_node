import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
  }

  async store(req, res) {}

  async show(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

export default new AlunoController();
