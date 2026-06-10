---
title: Windows11 自用配置
published: 2026-06-10
description: Scoop+美化
image: https://cdn.microsoftstore.com.cn/media/category/windows/windows11_1_251223.jpg
tags: ["Windows", "配置"]
category: "技术"
draft: false
---

# 最终效果
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-10_14-29-32.png)
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/1.gif)
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/2.gif)

# 镜像

> Windows11 LTSC 2024

---

# 1：激活

- 转 IoT 密钥：`CGK42-GYN6Y-VD22B-BX98W-J8JXD`
- 数字激活自行上网搜寻，之前用过数字激活的在输入密钥后会直接激活
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-09_13-54-53.png)
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-09_13-55-05.png)
---

# 2：睡眠
```
powercfg /h off
```
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-09_13-56-19.png)

---

# 3：保存新内容的地方
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-09_13-56-51.png)
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-09_13-57-05.png)
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-09_13-54-03.png)
---

# 4：安装 Microsoft Store

```powershell
wsreset -i
```

---

# 5：安装 Scoop 及换源

> 管理员账户在最后一行命令中加入：
> `-RunAsAdmin`

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
irm scoop.201704.xyz -outfile 'install.ps1'
.\install.ps1 -RunAsAdmin -ScoopDir 'E:\Scoop' -ScoopGlobalDir 'E:\GlobalScoopApps'
```

## 换源

```powershell
scoop bucket rm main
scoop bucket rm extras
scoop bucket add main https://gitee.com/scoop-installer/Main
scoop bucket add extras https://gitee.com/scoop-installer/Extras
scoop bucket add java https://gitee.com/scoop-installer/Java
scoop bucket add scoopcn https://gitee.com/scoop-installer/scoopcn
scoop bucket add aki https://gitee.com/scoop-installer/aki
```

> 推荐 Scoop 图形 GUI：https://github.com/AmarBego/Rscoop
![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-10_15-37-31.png)
---

# 6：自用软件配置

```powershell
scoop install vscode 123pan 7zip alipan baidudisk clash-verge-rev dark everything filezilla freedownloadmanager git idea innounp lessmsi localsend nodejs-lts obs-studio peerbanhelper picgo potplayer python qbittorrent-enhanced qq-nt quarkpan rainmeter screentogif wechat windhawk zulu25-jdk
```

# 7：美化
 ## 使用 Windhawk 美化
  ### 安装图中所示插件
  ![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-10_14-36-53.png)
  ### 配置插件
   > Windows 11 File Explorer Styler
   ![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-10_14-36-40.png)

   >Windows 11 Start Menu Styler
   ![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-10_14-37-33.png)

   >Windows 11 Taskbar Styler
   ![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-10_14-37-44.png)
 ## 通过 Lyricify Lite 配置任务栏歌词
  ![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-10_14-56-07.png)
 ## 亚克力右键菜单
 > 使用软件：FluentContextMenu
   <iframe width="100%" height="468" src="//player.bilibili.com/player.html?isOutside=true&aid=114164408326390&bvid=BV1UkQyYCERL&cid=25769808525&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

   #### 在右键菜单内勾选如下选项并重启explorer即可
   ![img](https://raw.gitcode.com/safe-450/img/raw/master/Windows11-Config/Snipaste_2026-06-10_15-01-35.png)
