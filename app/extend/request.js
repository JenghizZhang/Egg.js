module.exports = {
  get token() {
    console.log('get token', this.get('token'));
    return this.get('token');
  },
};
