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
            console.log(result.dataValues);
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

    async putRepositoryOne({ idx, content }) {
        try {
            const result = await this.model.update({ content }, { where: { id: idx } });
            return result; // [1]
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(idx) {
        try {
            console.log(idx);
            const result = await this.model.destroy({ where: { id: idx } });
            return result; //1
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = ReplyRepository;

