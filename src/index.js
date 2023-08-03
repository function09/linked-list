import LinkedList from "./modules/linkedList";

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.prepend(4);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.append(6);
linkedList.size();
linkedList.headValue();
linkedList.tailValue();
console.log(linkedList);
