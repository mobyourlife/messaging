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
  this.executeMessage = syncObject.bind(this)

  // Initialise BackSync service
  this.sync = new BackSync()

  /**
   * Start BackSync service.
   */
  this.start = () => {
    sync.start()
  }

  /**
   * Stop BackSync service.
   */
  this.stop = () => {
    sync.stop()
  }
}

/**
 * Synchronise objects.
 * @param  {Object} data Object to be synchronised.
 */
function syncObject (data) {
  this.sync.enqueue(data)
}
