export const convertToHtml = (text) => {
    // Ensure text is a string to prevent errors
    let html = text ? String(text) : '';
  
    // Convert bold text (using ** for bold)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
    // Convert newlines to <br> tags
    html = html.replace(/\n/g, '<br>');
  
    // Convert bullet points (starting with `- ` to <li> tags)
    html = html.replace(/^\s*-\s*(.*)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
  
    // Convert headers (##, ###, etc.)
    for (let i = 6; i > 0; i--) {
      const regex = new RegExp('^' + '#'.repeat(i) + '\\s*(.*?)$', 'gm');
      html = html.replace(regex, `<h${i}>$1</h${i}>`);
    }
  
    return html;
  };

  export const getPercentageCompletion = (completed, total) => {
    if (total === 0) {
      return 0; // Prevent division by zero
    }
  
    // Ensure completed does not exceed total
    const adjustedCompleted = Math.min(completed, total);
  
    const percentage = (adjustedCompleted / total) * 100;
    return Math.round(percentage); // Rounding to nearest whole number
  };


export const calculatePieChartPortions = (values, total = 360) => {
    // Ensure the total is not zero and the values array has three elements
    if (total === 0 || values.length !== 3) {
      return [0, 0, 0];
    }
  
    // Calculate the sum of the input values
    const sumOfValues = values.reduce((acc, value) => acc + value, 0);
  
    // Ensure the sum of values is not zero to prevent division by zero
    if (sumOfValues === 0) {
      return [0, 0, 0];
    }
  
    // Calculate the proportion each value occupies in the pie chart
    return values.map(value => (value / sumOfValues) * total);
  };


export const extractUsage = (data) => {
    // Check if data is an array
    if (!Array.isArray(data)) {
      console.error('Input is not an array');
      return [];
    }
  
    // Check if each item in data is an object with the 'usage' property
    if (data.some(item => typeof item !== 'object' || item === null || !('usage' in item))) {
      console.error('Array contains invalid items');
      return [];
    }
  
    return data.map(item => item.usage);
  };


