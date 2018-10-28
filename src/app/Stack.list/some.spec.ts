import { TestBed, async } from '@angular/core/testing';
import { ConcreteAggregate } from './some';


describe('some', () => {
    beforeEach(async(() => {

    }));

    it('Add_Raw_Value_Success_Cases', async(() => {
        var aggregate = new ConcreteAggregate([0, 1, 2, 3, 4, 5, 6, 7])
        aggregate.CreateIterator();
        while (aggregate.iterator.Next()) {
           // console.log(aggregate.iterator.CurrentItem());
        }       
        

    }));

});
