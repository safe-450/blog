// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus 13",
			image: "/images/device/oneplus-13.jpg",
			specs: "Snapdragon 8 Elite / 12G + 256G",
			description: "一加 13 样样超 Pro",
			link: "https://www.oneplus.com/cn/13",
		},
	],
	IPhone: [
		{
			name: "IPhone XS",
			image: "/images/device/iphone-xs.jpg",
			specs: "A12 / 256G",
			description: "银色",
			link: "https://support.apple.com/zh-cn/111881",
		},
	],
	Realme: [
		{
			name: "Realme GT",
			image: "/images/device/realme-gt.jpg",
			specs: "Snapdragon 888 / 8G + 128G",
			description: "全速战神,不负GT之名",
			link: "https://www.realme.com/realme-gt",
		},
	],
	Honor: [
		{
			name: "Honor V9",
			image: "/images/device/honor-v9.jpg",
			specs: "Kirin 960 / 4G + 64G",
			description: "我想要的快",
			link: "https://baike.baidu.com/item/%E8%8D%A3%E8%80%80V9/20397244",
		},
	],
	PC: [
		{
			name: "英特尔® 酷睿™ i7-12700KF",
			image: "/images/device/cpu.jpg",
			specs: "CPU",
			description: "",
			link: "https://www.intel.cn/content/www/cn/zh/products/sku/134595/intel-core-i712700kf-processor-25m-cache-up-to-5-00-ghz/specifications.html",
		},
		{
			name: "AMD Radeon RX 7800 XT",
			image: "/images/device/gpu.png",
			specs: "GPU",
			description: "",
			link: "https://www.vastarmor.com/Alloy/product24.html",
		},
		{
			name: "铭瑄 MS-挑战者 B760M",
			image: "/images/device/motherboard.jpg",
			specs: "Motherboard",
			description: "",
			link: "https://www.maxsun.com.cn/2022/1222/5859.html",
		},
		{
			name: "光威 GLOWAY 奕 1TB",
			image: "/images/device/ssd.jpg",
			specs: "SSD",
			description: "",
			link: "https://www.gloway.com.cn/?list_41/62.html",
		},
		{
			name: "泰坦军团 Titanarmy P27H2R",
			image: "/images/device/monitor.png",
			specs: "Monitor",
			description: "",
			link: "https://titanarmy.cn/goods/details/index/id/403/cid/26.html",
		},
	],
};
