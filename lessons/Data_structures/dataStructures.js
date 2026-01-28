class Stack{
    #array
    #topPointer
    constructor(){
        this.#array = []
        this.#topPointer = -1
    }

    push(element){
        this.#array.push(element)
        this.#topPointer += 1
    }

    pop(){
        this.#topPointer < 0 ?  console.log('The stack is empty') : this.#topPointer -= 1
    }

    peek(){
        this.#topPointer < 0 ? console.log('The stack is empty') : console.log(this.#array[this.#topPointer])
    }

    show(){
        console.log(this.#array)
    }
}

let myStack = new Stack()
myStack.push('15')
myStack.push('45')
myStack.push('75')
myStack.push('95')
myStack.show()
myStack.peek()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.peek()