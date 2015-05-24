'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function PolicyService($q) {

  var service = {};

  service.get = function() {
    return $q(function (resolve) {
      resolve({
        category: 'art',
        item: {
          name: 'Picture',
          image: 'img/empty.js'
        },
        execess: 100,
        cover: 5000,
        value: 8000,
        fee: 25,
        coverages: [
          { name: 'Theft', covered: true },
          { name: 'Acccidental damage', covered: true },
          { name: 'Fire', covered: true },
          { name: 'Water', covered: false },
          { name: 'Natural dissaster', convered: true }
        ],
        insurer: 'Allianz'
      });
    });
  };

  return service;

}

servicesModule.service('PolicyService', ['$q', PolicyService]);
