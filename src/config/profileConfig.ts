import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "https://i2.hdslb.com/bfs/face/e82b188f282da5d877969ec3d0c2dd39f8bc1220.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "450Safe",
	bio: "一个热爱编程和技术的小站长，喜欢分享和交流各种有趣的项目和想法。",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/385597490",
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/safe-450",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/safe-450",
		},
	],
};
