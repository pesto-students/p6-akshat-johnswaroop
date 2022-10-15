## What is the output of the below problem and why

  

    function  createIncrement() {
    let  count = 0;
    
    function  increment() {
    count++;
    }
    
    let  message = `Count is ${count}`;
    
    function  log() {
    console.log(message);
    }
  
    return [increment, log];
    }
       
    const [increment, log] = createIncrement();
    
    increment(); 
    increment();
    increment();
    log(); // What is logged?

Expected Output : **Count is 0**

The *increment()* funtion has been invoked three times, which increments the *Count* variable by 1 each time, hence the current value of *count* variable is 3.


when the *log()* function is called  *Count is 0* is logged since the value of variable *message* is created by using string interpolation of *count* variable when the value was 0 and this process occurs only once during the instantiation of the function *createIncrement()*
therefore subsequent calls of *increment()* funtion does not effect the value of message 