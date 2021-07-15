exports.parseHeader = (req, res, next) => {
  let ipaddress;

  if (!req.headers['x-forwarded-for']) {
    ipaddress = 'Unable to get IP address.';
  }
  else {
    ipaddress = req.headers['x-forwarded-for'].split(',')[0];
  }
  res.json({
    ipaddress,
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].split(/[\(\)]/)[1]
  });
}
