module.exports = {

  attributes: {
    text: {
      type: 'string'
    },
    family: {
      type: 'string'
    },
    given: {
      type: 'string'
    },
    prefix: {
      type: 'string'
    },
    suffix: {
      type: 'string'
    },
    use: {
      type: 'string',
      enum: ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden']
    }
  }
};