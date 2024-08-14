const Connection = require('../config/Connection')

require('../models/UserModel')
require('../models/PostModel')

Connection.sync({ force: false })