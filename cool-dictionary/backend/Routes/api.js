/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

// Controller Imports
const apiHome = require('../Controller/apiHome');
const auth = require('../Controller/auth');
const sellerModification = require('../Controller/sellerModification');

router.post('/auth/getWords', auth.extractWords);


// API
// Base API Route
router.get('/', apiHome.getApi);
router.post('/', apiHome.postApi);

//Register User Route
router.get('/auth/login/user', auth.getLoginUser);
router.post('/auth/login/user', auth.loginUser);

// Register Users(customer and seller) Route
router.post('/auth/register/user', auth.validateRegistration, auth.registerUser);


// user information
router.post('/auth/information/user', auth.checkAuth, auth.userInfo);

// router.use(auth.checkAuth); // Routes that require and api_token after this

// 404 paths
router.use(apiHome.invalidPath);

// Return Router
module.exports = router;
