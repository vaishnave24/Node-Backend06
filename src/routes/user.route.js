const express = require('express');
const allowedRoles = require('../middelware/roleBasedAccess');
const { deleteUser } = require('../controller/auth.controller');
const router = express.Router();


router.post('/userDelete',allowedRoles('admin','superadmin'),deleteUser)

module.exports = {userRoute:router}