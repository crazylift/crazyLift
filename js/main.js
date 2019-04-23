
//创建画布
const canvas = wx.createCanvas();
//创建英雄图片
const hero = wx.createImage();
//获取手机屏幕的宽度
var screenWidth;
//获取手机屏幕的高度
var screenHeight;
//获取画布内容
var context;
//英雄人物的横坐标
var heroX;
//英雄人物的纵坐标
var heroY;

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    //初始化游戏
    this.initGame();
    //绘制主人公
    this.drawHero();
  }
  /**
   * 初始化游戏界面
   */
  initGame() {
    //获取手机屏幕的宽度
    screenWidth = canvas.width;
    //获取手机屏幕的高度
    screenHeight = canvas.height;
    //获取画布内容
    context = canvas.getContext('2d');
    //改变英雄图片的宽度
    hero.width = 80;
    //改变英雄图片的高度
    hero.height = 120;
    //获取英雄首次在手机屏幕的x位置
    heroX = (screenWidth - hero.width) / 2;
    //获取英雄首次在手机屏幕的Y位置
    heroY = screenHeight - hero.height;
    //指定英雄图片的src 其实也就是告诉要显示的图片在哪里
    hero.src = "./images/hero/hero.jpg";
  }

  /**
    * 绘制游戏主人公
    */
  drawHero() {
    //需要英雄的图片加载完成才可以在界面上绘制 否则不显示
    hero.onload = function () {
      //绘制英雄
      //第一个参数是图片 第二个参数 是在屏幕上的横坐标 第三个参数 是在屏幕上的纵坐标 
      context.drawImage(hero, heroX, heroY, hero.width, hero.height);
    }
  }
}

/**
  * 手机屏幕点击事件
  */
wx.onTouchStart(function(e) {
  //console 这样方便在控制台 也就是下方打印相关信息 以下打印的就是点击屏幕的x y坐标
  //console.log("X坐标:" + e.touches[0].clientX + ",Y坐标" + e.touches[0].clientY);
  //通过点击屏幕判断是控制人物向上还是向下
});
