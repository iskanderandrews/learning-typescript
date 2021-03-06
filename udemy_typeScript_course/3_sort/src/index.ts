import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollections';
import { CharactersCollection } from  './CharactersCollection';
import { LinkedList } from './LinkedList';

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

/* const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data); */

/* const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data); */


// Old JS
/* class Sorter {
   collection: number[];

   constructor(collection: number[]) {
     this.collection = collection;
   }
} */

// New JS 
// For Numbers
/* class Sorter {
  constructor(public collection: number[] | string) { }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Collection === number[]
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        // If collection is string do this logic instead:
         // ~~~logic to compare and swap characters in a string
        if (typeof this.collection === 'string') {
          
        }
      }
    }
  }
}
 */

/**
 * TypeOf: Narrow type of a value to a primitive type { number, string, boolean, symbol }
 * 
 * InstanceOf: Every other calue that is created with constructor function 
 */




// For strings
/* class Sorter {
   constructor(public collection: number[] | string) {}

   sort(): void {
     const { length } = this.collection;

     for (let i = 0; i < length; i++) {
       for (let j = 0; j < length - i - 1; j++) {
        // If collection is an array of numbers
         if (this.collection[j] > this.collection[j+1]) {
           const temp = this.collection[j];
           this.collection[j] = this.collection[j+1];
           this.collection[j+1] = temp;
         }

         // If collection is string do this logic instead:
         // ~~~logic to compare and swap characters in a string

       }
     }
   }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection); */