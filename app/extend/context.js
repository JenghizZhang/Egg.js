module.exports = {
  params(key) {
    const method = this.request.method;
    if (method === 'GET') {
      return key ? { [key]: this.query[key] } : this.query;
    }
    return key ? { [key]: this.request.body[key] } : this.request.body;

  },
};
