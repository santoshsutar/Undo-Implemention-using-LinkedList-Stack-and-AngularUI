import { LinkedList } from "../Stack.list/linked-list";


export interface myCallbackType { (myArgument: string): void }
export class Stack<T> {
    private _list: LinkedList<T> = new LinkedList<T>();

    

    /// <summary>
    /// Adds the specified item to the stack
    /// </summary>
    /// <param name="item">The item</param>
    public Push(item: T): void {
        this._list.AddValueFirst(item);
    }

    /// <summary>
    /// Removes and returns the top item from the stack
    /// </summary>
    /// <returns>The top-most item in the stack</returns>
    public Pop(): T {
        if (this._list.Count == 0) {
            throw "The stack is empty";
        }

        let value = this._list.Head.Value;
        this._list.RemoveFirst();

        return value;
    }
    /// <summary>
    /// Returns the top item from the stack without removing it from the stack
    /// </summary>
    /// <returns>The top-most item in the stack</returns>
    public Peek(): T {
        if (this._list.Count == 0) {
            throw "The stack is empty";
        }

        return this._list.Head.Value;
    }
    /// <summary>
    /// The current number of items in the stack
    /// </summary>
    public Count(): number {
        return this._list.Count;

    }

    /// <summary>
    /// Removes all items from the stack
    /// </summary>
    public Clear(): void {
        this._list.Clear();
    }
    public GetEnumerator():LinkedList<T>
    {
        return this._list;
    }
}
