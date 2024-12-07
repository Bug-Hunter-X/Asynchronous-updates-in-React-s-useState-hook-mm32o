```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    console.log(count); // This will now log the updated value of count
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```