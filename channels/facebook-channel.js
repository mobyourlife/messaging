'use strict'

// Load modules
const BackSync = require('mob-backsync')

// Exports module's entry point
module.exports = FacebookChannel

/**
 * Facebook integration channel.
 */
function FacebookChannel () {
  // Setup Channel
  this.channelName = 'mob#facebook'
  this.executeMessage = syncObject.bind(this.bs)

  // Initialise BackSync service
  this.bs = new BackSync()

  /**
   * Start BackSync service.
   */
  this.start = () => {
    bs.start()
  }

  /**
   * Stop BackSync service.
   */
  this.stop = () => {
    bs.stop()
  }
}

/**
 * Synchronise objects.
 * @param  {Object} data Reference of the object to be synchronised.
 */
function syncObject (data) {
  if (!data) throw new Error('Data cannot be null!')
  if (typeof data !== 'object') throw new Error('Data must be an object')
  if (!data.object_id) throw new Error('Must supply object_id!')
  if (!data.type) throw new Error('Must supply type!')
}
