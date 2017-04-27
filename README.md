# WebSocket Challenge

## Solving the challenge:

1. Create WebSocket and set binaryType = `"arraybuffer"`;
2. Registration:
   
   ```js
   /** Think about cool participant name and then send a registration message **/
   
   { "name":"SuperHero", "command": "challenge accepted" }
   ```
3. The server will respond with:
   
   ```js
   /** 
      Message contains an authentication token which you will attach to your messages 
      for identification and the next task name.
   **/
   {"message":"You successfully accept challenge","next":"arithmetic","token":"eae34860c6f507f2"}
   ```
   
4. Request the next task with:

   ```js
   { "token": my_saved_token, "command": saved_next_task_name }
   ```
   
   There are 2 simple tasks:
   
   ```js
   {"name":"arithmetic","task":{"sign": OPERATION ,"values": ARRAY}}
      
   /**
       where:
       ARRAY {Array}        numbers array, length = 4;
       OPERATION {String}   random operator (+, -, *) which corresponds to an arithmetic operation 
                            you have to perform with ARRAY values

       and then send answer with:
   **/  
   { "token": my_saved_token, "command": "arithmetic", "answer": RESULT }
   ```
   ```js 
   /** if answer is correct, server will respond with: **/
      
   { "message":"You solve task","nextTask":"binary_arithmetic" }
      
   /** if answer is correct, server will respond with: **/
      
   { "token": my_saved_token, "command": saved_next_task_name }   
   
    /** request the next task with: **/
   
   { "token": my_saved_token, "command": saved_next_task_name }
      
    ```
    2nd task: 
    
   ```js
      
   /** Server will send you the following message **/
      
   { "name":"binary_arithmetic","task": { "bits": BITS} }
   
   /** where BITS is either 8 or 16.
       ---------------------------------------------
       Immediately after that you should receive a binary message (16 bytes) 
       which you should treat as a Uint8Array or Uint16Array 
       depending on the bits field. Your task is to sum the resulting array's 
       elements and send the result: 
   **/
   
   { "token": my_saved_token, "command": "binary_arithmetic", "answer": RESULT }
   ```
   ```js 
   /** if RESULT is correct, server will respond with **/
   
   { "message": "You solve task", "nextTask":"win" }
   
   ```
      
   ```js
   /** Request the win! **/
      
   { "token": my_saved_token, "command": "win" }
   ```
   
  5. Send the uniq code
