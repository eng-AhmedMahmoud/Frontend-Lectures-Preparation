// CSV Worker script
self.onmessage = function (e) {
  if (e.data.command === 'process') {
    processCSV(e.data.data);
  }
};

function processCSV(data) {
  const startTime = performance.now();

  try {
    const lines = data.split('\n');
    const header = lines[0].split(',');
    const values = [];

    // Process data line by line
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '') continue;

      const row = lines[i].split(',');
      const numericValues = row.map(val => parseFloat(val)).filter(val => !isNaN(val));
      values.push(...numericValues);

      // Report progress periodically
      if (i % 100 === 0) {
        const progress = Math.floor((i / lines.length) * 100);
        self.postMessage({
          type: 'progress',
          value: progress
        });
      }
    }

    // Calculate statistics
    const sum = values.reduce((acc, val) => acc + val, 0);
    const avg = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const count = values.length;

    // Calculate processing time
    const endTime = performance.now();
    const processingTime = (endTime - startTime).toFixed(2);

    // Send results back to main thread
    self.postMessage({
      type: 'result',
      sum: sum,
      avg: avg,
      min: min,
      max: max,
      count: count,
      time: processingTime
    });
  } catch (error) {
    self.postMessage({
      type: 'error',
      message: error.message
    });
  }
}