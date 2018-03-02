module.exports = function (key, fallback) {
  return process.env[key] || fallback
}
