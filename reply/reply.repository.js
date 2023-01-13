class ReplyRepository {
    constructor(_models) {
        this.model = _models;
    }

    async getRepositoryAll(board_idx) {
        try {
            const result = await this.model.findAll({ where: { board_idx: board_idx } });
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async postRepositoryOne({ userid, content, board_idx }) {
        try {
            const result = await this.model.create({ userid, content, board_idx });
            return result.dataValues;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getRepositoryOne({ id }) {
        try {
            const result = await this.model.findOne({ id });
            return result.dataValues;
        } catch (error) {
            throw new Error(error);
        }
    }

    async putRepositoryOne({ id, content }) {
        try {
            const result = await this.model.update({ content }, { where: { id: id } });
            return result; // [1]
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete({ id }) {
        try {
            const result = await this.model.destroy({ where: { id } });
            return result; //1
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = ReplyRepository;

