const express = require('express');
// const sha256 = require('sha256');
// const { uuid } = require('uuidv4');
const jsonParser = require('body-parser').json();
// const path = require('path');
// const multer = require('multer');

// const { response, uploadS3 } = require('../utils/common');
// const userUtils = require('../utils/user');
const galleryUtils = require('../utils/gallery');
const { verifyToken } = require('../middlewares');
// const { BUCKETS } = require('../aws_defines');
const { HTTP_STATUS_CODE } = require('../../status_code');

// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: {
//     fileSize: 1000,
//   },
// });

const router = express.Router();
router.use(jsonParser);

router.get('/', verifyToken, async (req, res, next) => {
  try {
    const gallery = await galleryUtils.findOne(req.id, res);
    const paintings = await galleryUtils.getPaintings();
    const collections = await galleryUtils.getCollections();

    const { name, address, tel, mobile, profileUrl, profileMsg } = gallery;

    return res.status(HTTP_STATUS_CODE.OK)
      .json({
        gallery: { name, address, tel, mobile, profileUrl, profileMsg },
        paintings,
        collections,
      });
  } catch (err) {
    return next(err);
  }
});

router.get('/:id', verifyToken, async (req, res, next) => {
  try {
    const gallery = await galleryUtils.findOne(req.params.id, res);
    const paintings = await galleryUtils.getPaintings();
    const collections = await galleryUtils.getCollections();

    const { name, address, tel, mobile, profileUrl, profileMsg } = gallery;

    return res.status(HTTP_STATUS_CODE.OK)
      .json({
        gallery: { name, address, tel, mobile, profileUrl, profileMsg },
        paintings,
        collections,
      });
  } catch (err) {
    return next(err);
  }
});

router.get('/all', verifyToken, async (_req, res, next) => {
  try {
    const galleries = await galleryUtils.findAll(res);

    return res.status(HTTP_STATUS_CODE.OK).json({ galleries });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
