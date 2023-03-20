const Mock = require("mockjs");

const data = Mock.mock({
  sampleList: [
    {
      id: 1,
      name: "sample1",
    },
    {
      id: 2,
      name: "sample2",
    },
    {
      id: 3,
      name: "sample3",
    },
  ],
});
console.log(data.sampleList);
