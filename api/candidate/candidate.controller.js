var candidateService = require('./candidate.service');

exports.getCandidateById = function(req, res) {
  var candidateId = req.params.id;

  candidateService
    .findCandidate(candidateId)
    .then(function(candidate){
      res.send(candidate);
    });
}

exports.getElectedOfficials = function(req, res) {
  candidateService
    .findElectedCandidates()
    .then(function(officials){
      res.send(officials);
    });
}