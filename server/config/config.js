const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    SECRET: 'SUPERSECRETPASSWORD123',
    DATABASE: 'mongodb://kevin:kevin@ds139929.mlab.com:39929/bookshelf-dev'
  }
};

exports.get = function get(env){
  return config[env] || config.default;
};