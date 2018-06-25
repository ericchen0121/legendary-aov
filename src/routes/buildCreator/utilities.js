export function to_uppercase_first(words) {
  return words.split(' ').map(w => w[0].toUpperCase() + w.slice(1,)).join(' ')
}
