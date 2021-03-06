const express = require('express');
const router = express.Router();
const menu = require('./menu');
const submenu = require('./submenu');
const access = require('./access');
const getMenu = require('../../models/menu/getMenu');
const isSession = require('./../../controller/isSession');


router.get('/', (req, res, next) => {
    isSession(req, res, 2);
    getMenu(2).then(function (myResult) {
        res.render('admin/index', {
            title: 'Dashboard',
            sumber: '/sistem',
            menu: myResult
        });
    });
});

router.get('/laporan', (req, res) => {
    res.render('coming', {
        sumber: '/..'
    });
});

router.get('/jadwal', (req, res) => {
    res.render('coming', {
        sumber: '/..'
    });
});

router.get('/pengumuman', (req, res) => {
    res.render('coming', {
        sumber: '/..'
    });
});

router.get('/user', (req, res) => {
    res.render('coming', {
        sumber: '/..'
    });
});

router.get('/materi', (req, res) => {
    res.render('coming', {
        sumber: '/..'
    });
});


router.use('/menu', menu);
router.use('/submenu', submenu);
router.use('/access', access);

module.exports = router;