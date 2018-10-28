import { TestBed, async } from '@angular/core/testing';
import { Stack } from './stack';


describe('StackTests_List', () => {
    let Push_TestData: number[][];
    beforeEach(async(() => {
        Push_TestData = [
            [0],
            [0, 1],
            [0, 1, 2],
            [0, 1, 2, 3],
            [0, 1, 2, 3, 4]
        ];
    }));

    it('Stack_Success_Cases', async(() => {

        for (const testData of Push_TestData) {
            //console.log(testCase);           
            let stack = new Stack<number>();
            for (let i = 0; i < testData.length; i++) {
                expect(stack.Count()).toEqual(i);

                stack.Push(testData[i]);

                expect(stack.Count()).toEqual(i + 1);

                expect(testData[i]).toEqual(stack.Peek());

                let counter = i;
                let node = stack.GetEnumerator().Head;
                node.Next = stack.GetEnumerator().Head.Next;
                while (node != null) {
                    expect(node.Value).toEqual(testData[counter]);
                    node = node.Next;
                    counter--;
                }
            }
            expect(testData.length).toEqual(stack.Count());
            for (let i = testData.length - 1; i >= 0; i--) {
                let expected = testData[i];
                expect(expected).toEqual(stack.Peek());
                expect(expected).toEqual(stack.Pop());
                expect(i).toEqual(stack.Count());
            }
        }
    }));
});
