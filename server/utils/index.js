/* eslint-disable no-underscore-dangle */
module.exports = {
  convertId: (obj) => {
    const clone = Object.assign({}, obj);
    clone.id = clone._id;
    delete clone._id;
    return clone;
  },
};
/* eslint-enable no-underscore-dangle */
