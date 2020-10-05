const connection = require('../database');

module.exports = {
  async index(req, res){
    const posts = await connection('posts').select('*');

    res.json(posts);
  },

  async singlePost(req, res){
    const {post_id} = req.params;
    const post = await connection('posts')
      .where('post_id', post_id)
      .select('*')
      .first();

    if(!post){
      res.status(500).json({
        message: "Internal server error"
      })
      return
    }
    res.json(post);
  },

  async create(req, res){
    const {post_title, post_content} = req.body;
    const {path} = req.file;
    const [post_id] = await connection('posts').insert({post_title, post_content, path});
    
    res.json({
      post_id: post_id,
    });
  }
};
