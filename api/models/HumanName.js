module.exports = {

  attributes: {
    text: {
      type: 'string'
    },
    family: {
      type: 'array'
    },
    given: {
      type: 'array'
    },
    prefix: {
      type: 'array'
    },
    suffix: {
      type: 'array'
    },
    use: {
      type: 'string',
      enum: ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden']
    }
  },

  beforeCreate: function (values, cb) {
    var prefixes = values.prefix.join(' ');
    var fullGivenName = values.given.join(' ');
    var fullFamilyName = values.family.join(' ');
    var suffixes = values.suffix.join(' ');
    values.text = [prefixes, fullGivenName, fullFamilyName, suffixes].join(' ');
    cb();
  }
};