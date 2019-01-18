var vm=new Vue({
    el:"#app",
    data:{
        list:[
            {todo:"eating",finished:false},
            {todo:"singing",finished:false},
            {todo:"dancing",finished:false}],
        ipt:""
    },
    methods:{
        addItem:function(){
            if (vm.ipt==null) return;
            vm.list.push({todo:vm.ipt,finished:false});
            vm.ipt=null;
        },
        checkFinished:function(item){
            item.finished=!item.finished;
        },
        clear:function(){
            vm.list=[];
        },
        removeItem:function(index){
            vm.list.splice(index,1);
        }
    }
})
