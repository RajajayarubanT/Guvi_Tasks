1. Blog on Difference between HTTP1.1 vs HTTP2


- HTTP1.1
    1. The usest works on the textual format.
    2. It uses requests resource Inlining for use getting multiple pages
    3. There is head of line blocking that blocks all the requests behind it until it doesn’t get its all resources.
    4. It compresses data by itself.

- HTTP2
    1. It works on the binary protocol.
    2. It uses PUSH frame by server that collects all multiple pages 
    3. It allows multiplexing so one TCP connection is required for multiple requests.
    4. It uses HPACK for data compression.

2. Blog on Objects And Its Internal Representation In JavaScript

Objects, in JavaScript, is it’s most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript’s primitive data-types(Number, String, Boolean, null, undefined and symbol) in the sense that while these primitive data-types all store a single value each (depending on their types).
Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.
An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.
Properties of JavaScript objects can also be accessed or set using a bracket notation (for more details see property accessors). Objects are sometimes called associative arrays, since each property is associated with a string value that can be used to access it. So, for example, you could access the properties of the myCar object as follows: