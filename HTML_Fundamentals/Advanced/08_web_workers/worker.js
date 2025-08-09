// Web Worker script for the prime number calculator

// Listen for messages from the main thread
self.onmessage = function (e) {
  if (e.data.command === 'calculate') {
    calculatePrimes(e.data.max);
  }
};

// Calculate prime numbers up to max
function calculatePrimes(max) {
  const start = performance.now();
  const primes = [];

  // Helper function to check if a number is prime
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  // Find all primes up to max
  for (let i = 2; i < max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }

    // Report progress periodically
    if (i % 1000 === 0) {
      const percentComplete = Math.round((i / max) * 100);
      self.postMessage({
        type: 'progress',
        value: percentComplete
      });
    }
  }

  const end = performance.now();
  const time = Math.round(end - start);

  // Send results back to main thread
  self.postMessage({
    type: 'result',
    primes: primes,
    time: time
  });
}