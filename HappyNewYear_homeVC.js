require("BaseViewController,UIViewController, UIImage , UIColor, UIButton , UIImageView , UIView , MASConstraintMaker,UIApplication,NSData ");

defineClass("BaseViewController",  {
            
            setNavBarBgWithColor: function(color) {

            var image = UIImage.imageWithColor(color);
            self.navigationController().navigationBar().setBackgroundImage_forBarMetrics(image,0)
            
            },
            
            setNavBarBgHappyNewYear: function() {
//            ///设置背景颜色
//            var color  = UIColor.colorWithString("0xff4318");
//            self.setNavBarBgWithColor(color);
            
//            var path = resourcePath('jsImage/nav_background-');
//            var image = require('UIImage').imageNamed(path);
            var path = resourcePath('jsImage/nav_background-');
            var image = require('UIImage').imageNamed(path);
            if(image == false){
                path = 'https://m.taoqian123.com/images/theme-newyear/nav_background-@2x-s.png';
                locationData = NSData.dataWithContentsOfURL(require('NSURL').URLWithString(path));
                image = UIImage.imageWithData_scale(locationData, 2);
            }
            var edge ={top:0, left:0, bottom:0, right:0};
            image = image.resizableImageWithCapInsets_resizingMode(edge, 1);

         
            self.navigationController().navigationBar().setBackgroundImage_forBarMetrics(image,0)
            
            self.navigationController().navigationBar().setShadowImage(UIImage.new());
            
           
            },
            
            
            setTitleAsWhiteColor: function() {
            ///设置背景颜色
            
            ///title 颜色
            var titleDict = {"NSColor":UIColor.whiteColor()};
            self.navigationController().navigationBar().setTitleTextAttributes(titleDict);
            
            
            },
            
            
            
            
            },{});

defineClass("UIViewController",{
            
            stateBarAsWhite: function(white) {
            var aa = 0;
            console.log(white);
            if (white == 1) {
            aa = 1;
            } else {
            aa = 0;
            }
            UIApplication.sharedApplication().setStatusBarStyle(aa);
            },
            
            },{});
            
defineClass("Home_tabbar_ViewController",{
            viewDidLoad: function() {
            
                self.ORIGviewDidLoad();
                self.setNavBarBgHappyNewYear();
                self.setTitleAsWhiteColor();
                ///修改文字按钮
                self.modifyHomeCatgView();
                self.modifySucessLable();
            
                ///location按钮
                var path = resourcePath('jsImage/icon_position_w');
                var locationBtnImg = require('UIImage').imageNamed(path);
                if(locationBtnImg == false){
                     path = 'https://m.taoqian123.com/images/theme-newyear/icon_position_w@2x.png';
                     locationData = NSData.dataWithContentsOfURL(require('NSURL').URLWithString(path));
                     locationBtnImg = UIImage.imageWithData_scale(locationData, 2);
                }
            
            
            
                self.locationBtn().setImage_forState(locationBtnImg,0);
                self.locationBtn().setTitleColor_forState(UIColor.whiteColor(), 0);
                
                ///联系我们按钮
                self.showBarButton_imageName(1,"home-page_icon_C_w");
                
                ///状态栏高亮
                self.stateBarAsWhite(1);
            
            
            },
            ///table 添加背景色
            initTable:function(group){
            self.ORIGinitTable(group);
            
            var path = resourcePath('jsImage/nav_background-');
            var image = require('UIImage').imageNamed(path);
            if(image == false){
                path = 'https://m.taoqian123.com/images/theme-newyear/nav_background-@2x-s.png';
                imagedata = NSData.dataWithContentsOfURL(require('NSURL').URLWithString(path));
                image = UIImage.imageWithData_scale(imagedata, 2);
            
            }
            
            
            
            
            var edge ={top:0, left:0, bottom:0, right:0};
            image = image.resizableImageWithCapInsets_resizingMode(edge, 0);
            
            var bgImgView = UIImageView.alloc().init();
            bgImgView.setImage(image);
            self.table().addSubview(bgImgView);
            
            bgImgView.mas__makeConstraints(block("MASConstraintMaker*", function(make) {
                                            
                                                 make.left().equalTo()(0);
                                                 make.right().equalTo()(0);
                                                 make.bottom().equalTo()(0);
                                                 make.height().equalTo()(1000);
                                                 make.width().equalTo()(self.table().mas__width());
                                            
                                            
                                            })) ;
            
            
            
            },

            //修改成功案例
            initCaseLabel: function() {
                self.ORIGinitCaseLabel();
                var caseLabel = self.caseLabel();
                caseLabel.iconBtn().setHidden(1);

                ///文字颜色
                var label1 = caseLabel.label1();
                label1.setTextColor(UIColor.whiteColor());
                
                var label2 = caseLabel.label2();
                label2.setTextColor(UIColor.whiteColor());
                
            
            require('JPEngine').defineStruct({
                                             "name": "UIEdgeInsets",
                                             "types": "FFFF",
                                             "keys": ["top", "left", "bottom", "right"]
                                             })
            

            
                var edge ={top:10, left:50, bottom:10, right:20};
            
            
                ///bgImage
                var path = resourcePath('jsImage/bg_case-');
                var btnImg = require('UIImage').imageNamed(path);
                btnImg = btnImg.resizableImageWithCapInsets_resizingMode(edge, 1);
                if(btnImg == false){
                    path = 'https://m.taoqian123.com/images/theme-newyear/bg_case-@2x.png';
                    imagedata = NSData.dataWithContentsOfURL(require('NSURL').URLWithString(path));
                    btnImg = UIImage.imageWithData_scale(imagedata, 2);
                
                }
                
//                caseLabel.setBackgroundColor(UIColor.colorWithPatternImage(btnImg));
            
            
            var bgView = UIImageView.alloc().initWithImage(btnImg);
            bgView.setFrame({x:0, y:0, width:500, height:36});
            
            caseLabel.addSubview(bgView);
            caseLabel.sendSubviewToBack(bgView);
//            bgBtn.setFrame(self.frame());
            
//            bgBtn.setBackgroundImage_forState(btnImg,0);
//            bgBtn.setImage_forState(btnImg,0);
            
            
            bgView.mas__makeConstraints(block("MASConstraintMaker*", function(make) {
                            make.edges().equalTo(caseLabel);
                        }));
            
            
//            console.log(btnImg);
            

            
            },
            
            ///修改分类按钮图片
            modifyHomeCatgView: function() {

                var homeCatgView = self.homeCatgView();

                var images = ["icon_book","icon_Briefcase","icon_computer","icon_Self-employed-person"];
                
                var btns = [homeCatgView.b1(),homeCatgView.b2(),homeCatgView.b3(),homeCatgView.b4()];
    //            console.log(btns);

                for (var o in images) {
                    var imageName = images[o];
                    var btn = btns[o];
                
                    imageName = "jsImage/"+imageName+".png";
                
                    var path = resourcePath(imageName);
                    var btnImg = require('UIImage').imageNamed(path);
                    if(btnImg == false){
                        path = 'https://m.taoqian123.com/images/theme-newyear/'+images[o]+'@2x.png';
                        imagedata = NSData.dataWithContentsOfURL(require('NSURL').URLWithString(path));
                        btnImg = UIImage.imageWithData_scale(imagedata, 2);
                    
                    }
                    btn.setImage_forState(btnImg,0);
                
                
                }
            
            
            }
            
            },{});
