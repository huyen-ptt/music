<template>
  <div>
    <h1>Age: {{ age }}</h1>
    <h1>Full Name: {{ name }}</h1>
    <h1> {{ hi }}</h1>
    <h1> {{ hello }}</h1>
    <h1> {{ Tong }}</h1>

    <h1>Hobbies: {{ formatHobbies() }}</h1>
<!--    <h1>Student: {{ student.name }}, Age: {{ student.age }}</h1>-->
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const hello = ref('hello bbi');
const age = ref<number>(19);
const name = ref<string>("Huyền");
console.log(age)

// const hihi = ref<boolean>(true);
const hi: string = "hi";
const soThich = ref<string[]>(["đọc sách", "nghe nhạc"]);

// const person = ref<[string, number]>(["John", 25]);
interface objType {
  obj1: string;
  name1?: number;
  name2?: string;
}
interface studentType {
  id: number;
  name: string;
  age: number,
  obj?: objType
}
const arr1: studentType[] = [];
const student = ref<any>({
  id: 1,
  name: "Ngọc",
  age: 16,
  obj: {
    obj1: '123'
  },
});

let huyen: string = "huyền xin chào"
 huyen = "hifsjdu"
console.log('huyen: ', huyen);

arr1.push(student.value)
console.log('arr1: ', arr1);
console.log('student: ', student.value)
// const keys = Object.keys(student.value);
// keys.forEach((k: string) => {
//   console.log('k value: ', student.value[k])
// })
// console.log('keys: ', keys);

// student.name;
// student.obj.obj1;
const key = 'obj'
const test = student.value[key]['obj1']
console.log('test: ', test);

let roomNames: 'chinh' | 'hoang' = 'chinh'
console.log('roomNames: ', roomNames);
roomNames = 'hoang'
const arr: any[] = ['a', 'b', 'c', 'd']
// arr[1]
for (let index = 0; index < arr.length; index++) {
  console.log('arr,', arr[index])
}
function add(a: number, b: number): number {
  return a + b;
}
const Tong = add(5, 10);
// console.log(Tong);
const formatHobbies = () => {
  return soThich.value.join(', ');
};
</script>
