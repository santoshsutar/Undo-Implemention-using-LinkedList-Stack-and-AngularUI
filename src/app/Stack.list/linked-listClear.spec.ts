import { TestBed, async } from '@angular/core/testing';
import { LinkedList } from './linked-list';
import { LinkedListNode } from './linked-list-node';

describe('linkedListClear', () => {
    let Add_Success_Cases: number[][];
    beforeEach(async(() => {
        Add_Success_Cases = [
            [0],
            [0, 1],
            [0, 1, 2],
            [0, 1, 2, 3]
        ];
    }));

    it('Clear_Empty', async(() => {

        let list = new LinkedList<number>();

        expect(list.Count).toEqual(0);
        expect(list.Head).toBeNull();
        expect(list.Tail).toBeNull();
        list.Clear();
        expect(list.Count).toEqual(0);
        expect(list.Head).toBeNull();
        expect(list.Tail).toBeNull();
    }));


    it('Clear_Success_Cases', async(() => {

        for (const testCase of Add_Success_Cases) {
            //console.log(testCase);           
            let list = new LinkedList<number>();
            testCase.forEach(element => {
                list.Add(element);
            });
            expect(testCase.length).toEqual(list.Count);
            expect(list.Head).toBeDefined();
            expect(list.Tail).toBeDefined();
            list.Clear();
            expect(list.Count).toEqual(0);
            expect(list.Head).toBeNull();
            expect(list.Tail).toBeNull();
        }
    }));
});
