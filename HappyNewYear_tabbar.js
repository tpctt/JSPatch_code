require("UIColor, Home_tabbar_ViewController, Product_tabbar_ViewController, Guwen_tabbar_ViewController, Tips_tabbar_ViewController, User_tabbar_ViewController, NSMutableArray array, UITabBarItem, NSString, NSString, UIFont, UIFont, BaseNavViewController, UIImage, UIImage");


defineClass("Tabbar1_ViewController",{
            viewDidLoad: function() {
            
            self.ORIGviewDidLoad();
//            self.setNavBarBgHappyNewYear();
//            self.setTitleAsWhiteColor();
//            self.initTipsLabel();
//            self.modifyTabbarImg();
            

            
            },
            
            
           
            ///修改按钮图片
           
            
            init__tabVC: function() {
            
            self.tabBar().setBackgroundColor(UIColor.whiteColor() );
            
            
            var homeVC = Home_tabbar_ViewController.alloc().init() ;
            var productVC = Product_tabbar_ViewController.alloc().init() ;
            var guwenVC = Guwen_tabbar_ViewController.alloc().init() ;
            var tipsVC = Tips_tabbar_ViewController.alloc().init() ;
            var userVC = User_tabbar_ViewController.alloc().init() ;
            
            var array  =[homeVC,productVC,guwenVC,tipsVC,userVC];
            
            var titles = ["首页","贷款产品","贷款顾问","贷款攻略","个人中心"];
            var images = ["tab_home","tab_product","tab-adviser","tab_Raiders","tab_personal"];

            
//            var views = NSMutableArray.array() ;
            var views  = new Array();
            

            for (var i in images) {
                var vc = array[i];
                vc.setTitle(titles[i]);
            

                var imageName = images[i];
                imageName = "jsImage/"+imageName+".png";
            
                var path = resourcePath(imageName);
                var btnImg = require('UIImage').imageNamed(path);
                if(btnImg == false){
                    path = 'https://m.taoqian123.com/images/theme-newyear/'+images[i]+'@2x.png';
                    imagedata = NSData.dataWithContentsOfURL(require('NSURL').URLWithString(path));
                    btnImg = UIImage.imageWithData_scale(imagedata, 2);
                    
                }
            
                btnImg = btnImg.imageWithRenderingMode(1);
            
            
                var title = titles[i];
            
            
                var item =
                UITabBarItem.alloc().initWithTitle_image_selectedImage(title,btnImg,btnImg) ;
                
                ///title 颜色
                var titleDict1 = {"NSColor":UIColor.colorWithString("0x666666")};
                var titleDict2 = {"NSColor":UIColor.colorWithString("0xff4318")};
                
            
            
                item.setTitleTextAttributes_forState(titleDict1, 0) ;
                item.setTitleTextAttributes_forState(titleDict2, 1<<2) ;
            
            
    //            item.setTitlePositionAdjustment(UIOffsetMake(0, -2));
                
                var nav = BaseNavViewController.alloc().initWithRootViewController(vc) ;
                nav.setTabBarItem(item);
                

    //            views.addObject(nav) ;
                views[i] = nav ;
                
            
            }

            
//            console.log(views);
            

            self.setViewControllers(views);
            
            
            
            
            }
            
            
            
            },{});



            
