			// 百度地图API功能	
			$('#contact-maps').css('height', $('#contact').width()*0.5);
			$(window).resize(function(){
			   $('#contact-maps').css('height', $('#contact').width()*0.5);
			});
			 var markerArr = [
                    { title: "IMAGE 北京运营服务中心", point: "116.482861,39.912461", address: "北京市朝阳区建国路SOHO现代城88号院3栋104室"},
                    { title: "IMAGE 广州运营服务中心", point: "113.330409,23.102199", address: "广东省广州市海珠区新港中路397号TIT创意园A2-101"},
                    { title: "深圳微信创科技有限公司", point: "113.961003,22.583088", address: "广东省深圳市南山区西丽红花岭工业区南区五区A栋5楼" },
                ];

                function map_init() {
                    var map = new BMap.Map("contact-maps"); // 创建Map实例
                    var point = new BMap.Point(69.417854,53.921988); //地图中心点，广州市
                    map.centerAndZoom(point, 5); // 初始化地图,设置中心点坐标和地图级别。
                    // map.enableScrollWheelZoom(true); //启用滚轮放大缩小
                    //向地图中添加缩放控件
                    var ctrlNav = new window.BMap.NavigationControl({
                        anchor: BMAP_ANCHOR_TOP_LEFT,
                        type: BMAP_NAVIGATION_CONTROL_LARGE
                    });
                    map.addControl(ctrlNav);

         

                    var point = new Array(); //存放标注点经纬信息的数组
                    var marker = new Array(); //存放标注点对象的数组
                    var info = new Array(); //存放提示信息窗口对象的数组
                    for (var i = 0; i < markerArr.length; i++) {
                        var p0 = markerArr[i].point.split(",")[0]; //
                        var p1 = markerArr[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来
                        point[i] = new window.BMap.Point(p0, p1); //循环生成新的地图点
                        marker[i] = new window.BMap.Marker(point[i]); //按照地图点坐标生成标记
                        map.addOverlay(marker[i]);
                        marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                        // var label = new window.BMap.Label(markerArr[i].title, { offset: new window.BMap.Size(20, -10) });
                        // marker[i].setLabel(label);
                        info[i] = new window.BMap.InfoWindow("<p style=’font-size:12px;lineheight:1.8em;’>" + markerArr[i].title + "</br>地址：" + markerArr[i].address + "</br></p>"); // 创建信息窗口对象
                    }
                    marker[0].addEventListener("mouseover", function () {
                        this.openInfoWindow(info[0]);
                    });
                    marker[1].addEventListener("mouseover", function () {
                        this.openInfoWindow(info[1]);
                    });
                    marker[2].addEventListener("mouseover", function () {
                        this.openInfoWindow(info[2]);
                    });
                }
                //异步调用百度js
                function map_load() {
                    var load = document.createElement("script");
                    load.src = "http://api.map.baidu.com/api?v=1.4&callback=map_init";
                    document.body.appendChild(load);
                }
                window.onload = map_load;