## Promise

### Promise Condition:
1. Pending (promise is in progress)
2. Fulfilled (promise fulfilled)
3. Rejected (promise failed to be fulfilledd)


### Executor Function
Executor function have two parameters, resolve() and reject()
1. Resolve()
Resolve accepts one parameter, commonly used to pass data when the promise executes.
2. reject()
Reject accpets one parameter and it used to provide a reason why promise can't be fulfilled. When Reject is called, the Promise condition will change from pending to rejected