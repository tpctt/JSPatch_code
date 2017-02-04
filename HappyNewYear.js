require("BaseViewController,UIViewController, UIImage , UIColor,HTTopView ,TQBTipsLabel ,  UITableViewCell , UIView,UIButton , MASConstraintMaker , Config ");


defineClass("Product_tabbar_ViewController",{
            viewDidLoad: function() {
            
            self.ORIGviewDidLoad();
            self.setNavBarBgHappyNewYear();
            self.setTitleAsWhiteColor();
            self.initTipsLabel();
            
            self.showBarButton_title_fontColor(1, "精准推荐", UIColor.whiteColor());

            },
            
            
            initTipsLabel: function() {
                self.ORIGinitTipsLabel();
            
            var btn = self.tipsLabel().btn();
            ///文字颜色
            btn.titleLabel().setTextColor(UIColor.whiteColor());
            
            
            
            require('JPEngine').defineStruct({
                                             "name": "UIEdgeInsets",
                                             "types": "FFFF",
                                             "keys": ["top", "left", "bottom", "right"]
                                             })
            
            
            
            //TITLE
            var edge0 ={top:0, left:55, bottom:0, right:5};
            btn.setTitleEdgeInsets(edge0);

            
            var edge ={top:6, left:50, bottom:6, right:20};

            ///bgImage
            var path = resourcePath('jsImage/bg_raiders');
            var btnImg = require('UIImage').imageNamed(path);
            var hadLocalImage = true;
            
            if(btnImg == false){
                path = 'https://m.taoqian123.com/images/theme-newyear/'+'bg_raiders'+'@2x.png';
                imagedata = NSData.dataWithContentsOfURL(require('NSURL').URLWithString(path));
                btnImg = UIImage.imageWithData_scale(imagedata, 2);
                hadLocalImage = false;

            }
            
            btnImg = btnImg.resizableImageWithCapInsets_resizingMode(edge, 1);
            
     
            btn.setBackgroundImage_forState(btnImg,0);
            
            
            
            btn.mas__updateConstraints(block("MASConstraintMaker*", function(make) {
                                             if(hadLocalImage == false){
                                             
                                                make.left().equalTo()(5);///http 图片需要
                                             }
                                             make.right().equalTo()(-5);
                                             make.top().equalTo()(8);
                                             make.bottom().equalTo()(-8);
                                             
                                             
                                             
                                            })) ;
         
            },
            initHeader: function() {
            self.ORIGinitHeader();
            
            self.tipsLabel().mas__updateConstraints(block("MASConstraintMaker*", function(make) {
                                             make.height().greaterThanOrEqualTo()(64);
    
                                             
                                             
                                             })) ;
            },

            
            },{});

defineClass("Guwen_tabbar_ViewController",{
            viewDidLoad: function() {
            
            self.ORIGviewDidLoad();
            self.setNavBarBgHappyNewYear();
            self.setTitleAsWhiteColor();
           
            
            
            },
            
            
            
            
            },{});


defineClass("Tips_tabbar_ViewController",{
            viewDidLoad: function() {
            
            self.ORIGviewDidLoad();
            self.setNavBarBgHappyNewYear();
            self.setTitleAsWhiteColor();
           
            
            ///联系我们按钮
            self.showBarButton_imageName(1,"home-page_icon_C_w");
            
            
            ///修改topView
            self.initTitleView();
            
            
            },
            
            initTitleView: function() {
                self.ORIGinitTitleView();

                var topView = self.topView();
        
                topView.setSelectionIndicatorColor(UIColor.whiteColor());
                topView.setBottomTrimColor(UIColor.clearColor());
                topView.setBackgroundColor(UIColor.clearColor());
            topView.setTitleColor_forState(UIColor.whiteColor(), 0);
            topView.setTitleColor_forState(UIColor.whiteColor(), 1 << 2);
            
            
            
            },
            
            
            },{});



defineClass("User_tabbar_ViewController",{
            viewDidLoad: function() {
            
                self.ORIGviewDidLoad();
                self.setNavBarBgHappyNewYear();
                self.setTitleAsWhiteColor();
            
          
            },
            
            dealNavaIfBlack: function() {
            self.setNavBarBgHappyNewYear();

            
            },
            
            
            getBtnWith:function(title,image){
            
            
            var btn = UIButton.alloc().init() ;
            btn.setBackgroundColor(UIColor.whiteColor()) ;
            
            btn.titleLabel().setFont(UIFont.systemFontOfSize(14));
            btn.setTitleColor_forState(UIColor.colorWithString("0X222222"), 0) ;
            
            btn.setImage_forState(UIImage.imageNamed(image), 0) ;
            btn.setTitle_forState(title, 0) ;
            
            btn.setImageEdgeInsets({top:0, left:-5, bottom:0, right:0} ) ;
            btn.setTitleEdgeInsets({top:0, left:5, bottom:0, right:0}) ;
            
//                             btn.setImageEdgeInsets(UIEdgeInsetsMake(0, -5, 0, 0)) ;
//                             btn.setTitleEdgeInsets(UIEdgeInsetsMake(0, 5, 0, 0)) ;
            
            return btn;
            
            
            },
            
            getNormalHeaderCell: function() {
            ///
            
            var cell = self.table().dequeueReusableCellWithIdentifier("getNormalHeaderCell") ;

            if (!cell) {
            cell = UITableViewCell.alloc().initWithStyle_reuseIdentifier(3, "getNormalHeaderCell") ;
            cell.setBackgroundColor(UIColor.whiteColor());
            
            
            
            console.log(cell);

            
            var btn1 = self.getBtnWith("产品申请记录","usercenter_icon_history");
            var btn2 = self.getBtnWith("还款闹钟","usercenter_icon_clock");

            cell.addSubview(btn1) ;
            cell.addSubview(btn2) ;
            
            btn2.setFrame({x:200,y:0,width:200,height:30});
            
            
            btn1.mas__makeConstraints(block("MASConstraintMaker*", function(make) {
                                            make.top().equalTo(0);
                                            make.bottom().equalTo(0);
                                            make.left().equalTo(0);
                                            
                                            })) ;
            
            btn2.mas__makeConstraints(block("MASConstraintMaker*", function(make) {
                                            make.top().equalTo(0);
                                            make.bottom().equalTo(0);
                                            make.right().equalTo(0);
                                            
                                            })) ;
            
            var weakBtn1 = __weak(btn1);
            btn2.mas__makeConstraints(block("MASConstraintMaker*", function(make) {
                                            
                                            make.left().equalTo()(weakBtn1.mas__right()).with().offset()(0);
                                            make.width().equalTo()(weakBtn1.mas__width());
                                            
                                            
                                            })) ;
            
            btn1.addTarget_action_forControlEvents(self, "gotoProductHistory", 1 <<  6) ;
            btn2.addTarget_action_forControlEvents(self, "gotoAlertList", 1 <<  6) ;
            
            
            
            
            
            ///happynewYear
            
            var recodeBtnpath = resourcePath('jsImage/bg_record');
            var recodeBtnbtnImg = require('UIImage').imageNamed(recodeBtnpath);
            
            var clockBtnpath = resourcePath('jsImage/bg_alarm-clock-');
            var clockBtnpathImg = require('UIImage').imageNamed(clockBtnpath);
            
            if(recodeBtnbtnImg == false){
                var  path = 'https://m.taoqian123.com/images/theme-newyear/'+'bg_record'+'@2x.png';
                imagedata = NSData.dataWithContentsOfURL(require('NSURL').URLWithString(path));
                recodeBtnbtnImg = UIImage.imageWithData_scale(imagedata, 2);
            
            }
            
            if(clockBtnpathImg == false){
                var  path = 'https://m.taoqian123.com/images/theme-newyear/'+'bg_alarm-clock-'+'@2x.png';
                imagedata = NSData.dataWithContentsOfURL(require('NSURL').URLWithString(path));
                clockBtnpathImg = UIImage.imageWithData_scale(imagedata, 2);
            
            }
            
            
            
            
            
            btn1.setBackgroundImage_forState(recodeBtnbtnImg,0);
            btn2.setBackgroundImage_forState(clockBtnpathImg,0);
            
            
            
            
            
            }
            
            cell.setHeight(60);
            
            
            
            
            
            return cell;
            
            },
            
            
            
            
            
            getNormalHeaderCell22: function() {
            var cell = self.ORIGgetNormalHeaderCell();

           
            
            
            var contentView = cell.contentView();
            var subViews = contentView.subViews();
            console.log(cell);
            console.log(contentView);
            console.log(subViews);


            var recodeBtn = subViews[0];
            var clockBtn = subViews[1];

            
            
            var recodeBtnpath = resourcePath('jsImage/bg_record');
            var recodeBtnbtnImg = require('UIImage').imageNamed(recodeBtnpath);
            
            var clockBtnpath = resourcePath('jsImage/bg_alarm-clock-');
            var clockBtnpathImg = require('UIImage').imageNamed(clockBtnpath);
           
            
            recodeBtn.setBackgroundImage_forState(recodeBtnbtnImg,0);
            clockBtn.setBackgroundImage_forState(clockBtnpathImg,0);
            
//            console.log("cell2");

            return cell;
            
            },

           
            
            },{});


