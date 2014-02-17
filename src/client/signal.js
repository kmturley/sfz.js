var Signal = function(opts){
  this.context = opts.context
  if (typeof opts.value == "undefined") opts.value == 1

  var n = 4096
  var real = new Float32Array(n)
  var imag = new Float32Array(n)

  for (var x = 1; x < n; x+=2) {
    imag[x] = opts.value
  }

  var wavetable = opts.context.createPeriodicWave(real, imag)
  this.setPeriodicWave(wavetable)
}

var SignalFactory = function(opts){
  var osc = opts.context.createOscillator()
  Signal.call(osc, opts)

  return osc
}

module.exports = SignalFactory
