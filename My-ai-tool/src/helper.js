// Check if string starts and ends with ** (Markdown-style)
export function checkHeading(str) {
  return /^(\*)(\*)(.*)\*$/.test(str);
}

// Remove starting and ending ** and return clean text
export function replaceHeadingStarts(str) {
  return str.replace(/^(\*)(\*)|(\*)$/g,'');
}
