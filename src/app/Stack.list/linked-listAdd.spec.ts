import { TestBed, async } from '@angular/core/testing';
import { LinkedList } from './linked-list';
import { LinkedListNode } from './linked-list-node';

describe('linkedListAdd', () => {
    let Add_Success_Cases: number[][];
    beforeEach(async(() => {
        Add_Success_Cases = [
            [0],
            [0, 1],
            [0, 1, 2],
            [0, 1, 2, 3]
        ];
    }));

    it('Add_Raw_Value_Success_Cases', async(() => {

        for (const testCase of Add_Success_Cases) {
            //console.log(testCase);           
            let list = new LinkedList<number>();
            testCase.forEach(element => {
                list.Add(element);
            });
            expect(testCase.length).toEqual(list.Count);
            expect(testCase[testCase.length - 1]).toEqual(list.Head.Value);
            expect(testCase[0]).toEqual(list.Tail.Value);

            let node=list.Head;
            node.Next=list.Head.Next;
            let current=0;
            let reverse=testCase.reverse();
            while (node!=null) {
                expect(node.Value).toEqual(reverse[current]);                           
                node=node.Next;
                current++;
            }
        }
    }));

    
    it('AddFirst_Node_Value_Success_Cases', async(() => {

        for (const testCase of Add_Success_Cases) {
            let list = new LinkedList<number>();
            testCase.forEach(element => {
                list.AddFirst(new LinkedListNode<number>(element));
            });
            expect(testCase.length).toEqual(list.Count);
            expect(testCase[testCase.length - 1]).toEqual(list.Head.Value);
            expect(testCase[0]).toEqual(list.Tail.Value);

            let node=list.Head;
            node.Next=list.Head.Next;
            let current=0;
            let reverse=testCase.reverse();
            while (node!=null) {
                expect(node.Value).toEqual(reverse[current]);                           
                node=node.Next;
                current++;
            }
        }
    }));

    it('AddLast_Raw_Value_Success_Cases', async(() => {

        for (const testCase of Add_Success_Cases) {
            let list = new LinkedList<number>();
            testCase.forEach(element => {
                list.AddLast(new LinkedListNode<number>(element));
            });
            expect(testCase.length).toEqual(list.Count);
           expect(testCase[0]).toEqual(list.Head.Value);
            expect(testCase[testCase.length - 1]).toEqual(list.Tail.Value);

            let node=list.Head;
            node.Next=list.Head.Next;
            let current=0;
            let reverse=testCase;
          
            while (node!=null) {
                expect(node.Value).toEqual(reverse[current]);   
                node=node.Next;
                current++;
            }
        }
    }));

});
