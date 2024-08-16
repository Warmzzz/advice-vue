export function truncateString(sentence: string, maxLength: number) : string {
    if (sentence.length > maxLength) {
      return sentence.slice(0, maxLength) + "...";
    } else {
      return sentence;
    }
  }