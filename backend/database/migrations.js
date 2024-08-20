const Connection = require('../config/Connection')

require('../models/UserModel')
require('../models/PostModel')
require('../models/ProductModel')

Connection.sync({ force: false })