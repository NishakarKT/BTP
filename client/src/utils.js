export const truncateStr = (str, n) => (str.length > n) ? str.substr(0, n - 1) + '...' : str;