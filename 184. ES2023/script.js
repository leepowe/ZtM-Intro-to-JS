const ztmMonsters = [
    { id: 1, monster: 'Mr. Mouse', level: 1 },
    { id: 2, monster: 'Mac', level: 30 },
    { id: 3, monster: 'Denodude', level: 17 },
    { id: 4, monster: 'Pye', level: 5 },
];

//.findLast()
const lastMonster = ztmMonsters.findLast(item => item.level > 15);
console.log(lastMonster);

//.findLastIndex()
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
console.log(lastMonsterIndex);
console.log(ztmMonsters);

//.toReversed()
const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];
console.log(ztmMonstersList.toReversed()); //keeps the original list
console.log(ztmMonstersList);

//.toSorted()
console.log(ztmMonstersList.toSorted()); //keeps the original list
console.log(ztmMonstersList);

//.toSpliced()
console.log(ztmMonstersList.toSpliced(2, 1)); //keeps the original list  2 is index and 1 is how many items
console.log(ztmMonstersList);

//.toSorted()
console.log(ztmMonstersList.with(1, 'Ghost')); //keeps the original list 1 is index and 'Ghost' is what to replace with
console.log(ztmMonstersList);
