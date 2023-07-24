const todoList = [
  {
    id: 1,
    task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, soluta.",
    completed: false,
    subTask: [
      {
        id: "s1",
        title: "Lorem.",
      },
    ],
  },
  {
    id: 2,
    task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, soluta.",
    completed: true,
    subTask: [
      {
        id: "s1",
        title: "Lorem.",
      },
      {
        id: "s2",
        title: "Lorem.",
      },
    ],
  },
  {
    id: 3,
    task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, soluta.",
    completed: false,
    subTask: [
      {
        id: "s1",
        title: "Lorem.",
      },
    ],
  },
  {
    id: 4,
    task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, soluta.",
    completed: false,
    subTask: [],
  },
];
//Filter örneklerı
//todo listemızdekı bıtmeyen işleri filtreme
//todo listemızdeki subtaski olanları listeleyın

//Map örneklerı
//todo listemızdeki iş başlıkları  listeleyin
//todo listemizdeki biten iş başlıklarını listeleyin
//sonra bir daha todo ile işlem yapmayın




cost filtredAndMappedTods=myTodos
.flter(x => !x. )