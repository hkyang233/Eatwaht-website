// 最后编辑日期 2020.4.25 by yang
// Eatwhat by yang 
// 遵循MIT协议开源
setTimeout("eatwhat()","0");
function eatwhat() {
    var food=75;    //录入食物的数量
    var number=Math.floor(Math.random()*food);    // 可均衡获取食物数量的随机整数。
    switch (number){
        case 0:eatfood="小榄鱼球";
        break;
        case 1:eatfood="烤全羊";
        break;
        case 3:eatfood="老婆饼";
        break;
        case 4:eatfood="炼奶龟苓膏";
        break;
        case 5:eatfood="红豆龟苓膏";
        break;
        case 6:eatfood="蜂蜜龟苓膏";
        break;
        case 7:eatfood="芒果西米露";
        break;
        case 8:eatfood="椰汁西米露";
        break;
        case 9:eatfood="桃胶椰汁西米露";
        break;
        case 10:eatfood="(喝)珍珠奶茶";
        break;
        case 11:eatfood="(喝)焦糖珍珠奶茶";
        break;
        case 12:eatfood="(喝)斋奶茶";
        break;
        case 13:eatfood="盐焗鸡爪";
        break;
        case 14:eatfood="陈醋鸡爪";
        break;
        case 15:eatfood="薯条配炸鸡";
        break;
        case 15:eatfood="老八秘制小汉堡(雾)";
        break;
        case 16:eatfood="芝士烤榴莲";
        break;
        case 17:eatfood="提拉米苏";
        break;
        case 18:eatfood="芒果千层";
        break;
        case 19:eatfood="榴莲千层";
        break;
        case 20:eatfood="法棍";
        break;
        case 21:eatfood="吐司";
        break;
        case 22:eatfood="红烧乳鸽";
        break;
        case 23:eatfood="盐焗乳鸽";
        break;
        case 24:eatfood="乳鸽饭";
        break;
        case 25:eatfood="清蒸鲈鱼";
        break;
        case 26:eatfood="清蒸排骨";
        break;
        case 27:eatfood="清蒸龙虾";
        break;
        case 28:eatfood="麻婆豆腐";
        break;
        case 29:eatfood="炒三丝";
        break;
        case 30:eatfood="爆炒牛肉";
        break;
        case 31:eatfood="咖喱牛肉";
        break;
        case 32:eatfood="白切鸡";
        break;
        case 33:eatfood="酱油鸡";
        break;
        case 34:eatfood="榨菜蒸鸡";
        break;
        case 35:eatfood="艇仔粥";
        break;
        case 36:eatfood="皮蛋瘦肉粥";
        break;
        case 37:eatfood="窝蛋牛肉粥";
        break;
        case 38:eatfood="老火靓汤";
        break;
        case 39:eatfood="奥尔良鸡翅";
        break;
        case 40:eatfood="盐焗鸡翅";
        break;
        case 41:eatfood="蛋挞";
        break;
        case 42:eatfood="葡挞";
        break;
        case 43:eatfood="酸奶冰激凌";
        break;
        case 44:eatfood="哈根达斯";
        break;
        case 45:eatfood="酸梅汤";
        break;
        case 46:eatfood="罗宋汤";
        break;
        case 47:eatfood="紫菜瘦肉汤";
        break;
        case 48:eatfood="冬瓜剑骨汤";
        break;
        case 49:eatfood="玉米猪骨汤";
        break;
        case 50:eatfood="奶油泡芙";
        break;
        case 51:eatfood="可乐鸡翅";
        break;
        case 52:eatfood="油焖大虾";
        break;
        case 53:eatfood="椒盐濑尿虾";
        break;
        case 54:eatfood="麦麦脆汁鸡";
        break;
        case 55:eatfood="抹茶蛋糕";
        break;
        case 56:eatfood="凤梨酥";
        break;  
        case 57:eatfood="炒酸奶";
        break;
        case 58:eatfood="油炸鸡米花";
        break;
        case 59:eatfood="蟹香小丸子";
        break;
        case 60:eatfood="章鱼小丸子";
        break;
        case 61:eatfood="芝士年糕";
        break;
        case 62:eatfood="芝士蛋糕";
        break;
        case 63:eatfood="芝士玉米";
        break;
        case 64:eatfood="烤热狗";
        break;
        case 65:eatfood="蜜汁叉烧饭";
        break;
        case 66:eatfood="广式烧腊";
        break;
        case 67:eatfood="(喝)柠乐";
        break;
        case 68:eatfood="海鲜焗饭";
        break;
        case 69:eatfood="烧春鸡";
        break;
        case 70:eatfood="海南鸡饭";
        break;
        case 71:eatfood="鲜虾云吞面";
        break;
        case 72:eatfood="牛腩云吞面";
        break;
        case 73:eatfood="（喝）港式奶茶";
        break;
        case 74:eatfood="猪扒包";
        break;
        case 75:eatfood="五羊牌甜筒"
        break;
    }
        document.getElementById("eatwhat").innerHTML=eatfood;
    }
