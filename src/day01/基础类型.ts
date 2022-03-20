const basicType = () => {
  const isDone: boolean = true; //Boolean,布尔类型
  const name: string = "zhangsan"; //String，字符串类型
  const age: number = 22; //Number，数字类型
  const sentence: string = `我的名字是${name},我今年${age}岁了`; //模板字符串也是String类型
  const list: number[] = [1, 2, 3]; //Array,数组类型，元素类型后跟上[]，表示这个类型的数组
  const list2: string[] = ["你", "好", "世", "界"];
  const list3: Array<number> = [1, 2, 3]; //Array<元素类型>,数组泛型的形式
  const list4: Array<string> = ["你", "好", "世", "界"];
  const t: [string, number] = ["hi", 10]; //Tuple,元组类型，不可越界
  enum Color {
    red,
    blue,
    yellow,
  } //枚举类型
  let colorName: string = Color[0];
  console.log(colorName);
};

export default basicType;
