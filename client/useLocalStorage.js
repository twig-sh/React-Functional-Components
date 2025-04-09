const React = require('react');


function useLocalStorage(key, defaultVal) {
  const getInitialVal = () => {
    const storedVal = localStorage.getItem(key);
    if (storedVal !== null) {
      return JSON.parse(storedVal);
    }
    return defaultVal;
  }

  const [value, setValue] = React.useState(getInitialVal());

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error('Could not write to local storage');
    }
  }, [key, value])

  const setStoredValue = (newValue) => {
    setValue(newValue);
  }

  return [value, setValue];
}

module.exports = useLocalStorage;
