(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{439:function(t,i,s){var e=s(2),n=s(440);e({global:!0,forced:parseInt!=n},{parseInt:n})},440:function(t,i,s){var e=s(5),n=s(235).trim,r=s(236),h=e.parseInt,o=/^[+-]?0[Xx]/,a=8!==h(r+"08")||22!==h(r+"0x16");t.exports=a?function(t,i){var s=n(String(t));return h(s,i>>>0||(o.test(s)?16:10))}:h},495:function(t,i,s){"use strict";s.r(i);s(136),s(439),s(246);var e={data:function(){return{millisecond:0,second:0,minute:0,hour:0,day:0,time:"",str:""}},mounted:function(){var t=new Date("2019/10/02 00:00:00").getTime(),i=((new Date).getTime()-t)/1e3;this.day=parseInt(i/86400+""),this.hour=parseInt(i/3600+"")-24*this.day,this.minute=parseInt(i%3600/60+""),this.second=parseInt(i%60+""),this.timeStart()},methods:{timeStart:function(){this.time=window.setInterval(this.timer,50)},timer:function(){this.millisecond=this.millisecond+50,this.millisecond>=1e3&&(this.millisecond=0,this.second+=1),this.second>=60&&(this.second=0,this.minute+=1),this.minute>=60&&(this.minute=0,this.hour+=1),this.hour>=24&&(this.hour=0,this.day+=1),this.str=this.format0(this.day)+"天"+this.format0(this.hour)+"时"+this.format0(this.minute)+"分"+this.format0(this.second)+"秒"},format0:function(t){return t<10?"0"+t:""+t}},destroy:function(){window.clearInterval(this.time)}},n=s(31),r=Object(n.a)(e,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("h1",[i("span",[this._v(this._s(this.str))])])])}),[],!1,null,"75705271",null);i.default=r.exports}}]);