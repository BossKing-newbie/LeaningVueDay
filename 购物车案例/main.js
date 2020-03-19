const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《Unix编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2006-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 100.00,
        count: 1
      }
    ]
  },
  methods:{
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      this.books[index].count--;
    },
    removeHandler(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    getTotalPrice(){
      return this.books.reduce(function (previousValue,book) {
        return previousValue+book.price*book.count
      },0)
    }
  },
  filters:{
    showPrice(price){
      return '￥'+ price.toFixed(2)
    }
  }
})