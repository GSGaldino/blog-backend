const connection = require('../database');

module.exports = {
  async index(req, res){
    const posts = await connection('posts').select('*');

    res.json(posts);
  },

  async create(req, res){
    const {post_title, post_content} = req.body;
    const [post_id] = await connection('posts').insert({post_title, post_content});
    
    res.json({
      post_id: post_id,
    });
  }
};
