function total(data) {
  var sum = 0;
  for(i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function mean(data) {
  var sum = total(data);
  var mean = (total(data) / data.length);
  return mean;
}

function median(data) {
  var sorted_data = data.sort();
  if (data.length % 2 != 0) {
    var median_index = Math.floor(data.length / 2);
    var median = data[median_index]
    return median;
  } else {
    var above_median_index = data.length / 2;
    var below_median_index = above_median_index - 1;
    var median = (data[above_median_index] + data[below_median_index]) / 2;
    return median;
  }
}

function element_occurrences(data) {
  var element_occurrences = {};
  var unique_elements = [];

  for(var i = 0; i < data.length; i++) {
    if (!unique_elements.includes(data[i])) {
      unique_elements.push(data[i]);
    }
  }

  for(var i = 0; i < unique_elements.length; i++) {
    var element = unique_elements[i];
    element_occurrences[element] = 0;

    for(var j = 0; j < data.length; j++) {
      if (data[j] == element) {
        element_occurrences[element] += 1;
      }
    }
  }
  return element_occurrences;
}

module.exports.total = total;
module.exports.mean = mean;
module.exports.median = median;
module.exports.element_occurrences = element_occurrences;
