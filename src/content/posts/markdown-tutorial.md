---
title: Markdown 教程
published: 2025-01-20
pinned: false
description: 一个 Markdown 博客文章的简单示例。
tags: [Markdown]
category: Examples
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
---

# Markdown 教程

这是一个 Markdown 示例，展示如何编写 Markdown 文件。本文档整合了核心语法及其扩展（GFM）。

- [块级元素](#块级元素)
  - [段落和换行](#段落和换行)
  - [标题](#标题)
  - [块引用](#块引用)
  - [列表](#列表)
  - [代码块](#代码块)
  - [水平线](#水平线)
  - [表格](#表格)
- [行内元素](#行内元素)
  - [链接](#链接)
  - [强调](#强调)
  - [代码](#代码)
  - [图片](#图片)
  - [删除线](#删除线)
- [杂项](#杂项)
  - [自动链接](#自动链接)
  - [反斜杠转义](#反斜杠转义)
- [内联 HTML](#内联-html)

## 块级元素

### 段落和换行

#### 段落

HTML 标签：`<p>`

一个或多个空白行。（空白行是指只包含**空格**或**制表符**的行。）

代码：

    This will be
    inline.

    This is second paragraph.

预览：

---

This will be
inline.

This is second paragraph.

---

#### 换行

HTML 标签：`<br />`

在一行末尾加上**两个或更多空格**。

代码：

    This will be not
    inline.

预览：

---

This will be not  
inline.

---

### 标题

Markdown 支持两种标题样式：Setext 和 atx。

#### Setext

HTML 标签：`<h1>`、`<h2>`

使用**等号（=）**作为 `<h1>`，使用**连字符（-）**作为 `<h2>` 进行"下划线"标记，数量不限。

代码：

    This is an H1
    =============
    This is an H2
    -------------

预览：

---

# This is an H1

## This is an H2

---

#### atx

HTML 标签：`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`

在行首使用 1-6 个**井号（#）**，分别对应 `<h1>` - `<h6>`。

代码：

    # This is an H1
    ## This is an H2
    ###### This is an H6

预览：

---

# This is an H1

## This is an H2

###### This is an H6

---

你也可以选择性地"关闭" atx 样式的标题。结尾的井号**不需要匹配**开头使用的井号数量。

代码：

    # This is an H1 #
    ## This is an H2 ##
    ### This is an H3 ######

预览：

---

# This is an H1

## This is an H2

### This is an H3

---

### 块引用

HTML 标签：`<blockquote>`

Markdown 使用电子邮件风格的 **>** 字符来表示块引用。最佳实践是将文本硬换行并在每一行前添加 >。

代码：

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    >
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

预览：

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

Markdown 允许你偷懒，只将 > 放在硬换行段落的第一行前。

代码：

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

预览：

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

块引用可以嵌套（即引用中的引用），通过添加更多层级的 > 来实现。

代码：

    > This is the first level of quoting.
    >
    > > This is nested blockquote.
    >
    > Back to the first level.

预览：

---

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

---

Blockquotes can contain other Markdown elements, including headers, lists, and code blocks.

Code:

    > ## This is a header.
    >
    > 1.   This is the first list item.
    > 2.   This is the second list item.
    >
    > Here's some example code:
    >
    >     return shell_exec("echo $input | $markdown_script");

Preview:

---

> ## This is a header.
>
> 1.  This is the first list item.
> 2.  This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

---

### Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.

#### Unordered

HTML Tag: `<ul>`

Unordered lists use **asterisks (\*)**, **pluses (+)**, and **hyphens (-)**.

Code:

    *   Red
    *   Green
    *   Blue

Preview:

---

- Red
- Green
- Blue

---

is equivalent to:

Code:

    +   Red
    +   Green
    +   Blue

and:

Code:

    -   Red
    -   Green
    -   Blue

#### Ordered

HTML Tag: `<ol>`

Ordered lists use numbers followed by periods:

Code:

    1.  Bird
    2.  McHale
    3.  Parish

Preview:

---

1.  Bird
2.  McHale
3.  Parish

---

It's possible to trigger an ordered list by accident, by writing something like this:

Code:

    1986. What a great season.

Preview:

---

1986. What a great season.

---

你可以使用**反斜杠转义（\）**来处理句点：

代码：

    1986\. What a great season.

预览：

---

1986\. What a great season.

---

#### 缩进列表

##### 块引用

要在列表项中放置块引用，块引用的 > 分隔符需要缩进：

代码：

    *   A list item with a blockquote:

        > This is a blockquote
        > inside a list item.

预览：

---

- A list item with a blockquote:

  > This is a blockquote
  > inside a list item.

---

##### 代码块

要在列表项中放置代码块，代码块需要缩进两次——**8 个空格**或**两个制表符**：

代码：

    *   A list item with a code block:

            <code goes here>

预览：

---

- A list item with a code block:

      <code goes here>

---

##### 嵌套列表

代码：

    * A
      * A1
      * A2
    * B
    * C

预览：

---

- A
  - A1
  - A2
- B
- C

---

### 代码块

HTML 标签：`<pre>`

将块中每一行缩进至少 **4 个空格**或 **1 个制表符**。

代码：

    This is a normal paragraph:

        This is a code block.

预览：

---

This is a normal paragraph:

    This is a code block.

---

代码块会一直持续，直到遇到未缩进的行（或文章结束）。

在代码块中，**_&（&）_** 和尖**括号（< 和 >）**会自动转换为 HTML 实体。

代码：

        <div class="footer">
            &copy; 2004 Foo Corporation
        </div>

预览：

---

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

---

以下部分围栏代码块和语法高亮是扩展功能，你也可以使用其他方式编写代码块。

#### 围栏代码块

只需将代码包裹在 ` ``` ` 中（如下所示），就无需缩进四个空格。

代码：

    Here's an example:

    ```
    function test() {
      console.log("notice the blank line before this function?");
    }
    ```

预览：

---

Here's an example:

```
function test() {
  console.log("notice the blank line before this function?");
}
```

---

#### 语法高亮

在围栏代码块中，添加可选的語言标识符后，我们会对其进行语法高亮（[支持的语言列表](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)）。

代码：

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

预览：

---

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---

### 水平线

HTML 标签：`<hr />`
在单独一行放置**三个或更多连字符（-）、星号（\*）或下划线（\_）**。你可以在连字符或星号之间使用空格。

代码：

    * * *
    ***
    *****
    - - -
    ---------------------------------------
    ___

预览：

---

---

---

---

---

---

---

---

### 表格

HTML 标签：`<table>`

这是一个扩展功能。

使用**竖线（|）**分隔列，用**连字符（-）**分隔表头，使用**冒号（:）**进行对齐。

外层的**竖线（|）**和对齐方式是可选的。每个单元格至少有 3 个分隔符用于区分表头。

代码：

```
| Left | Center | Right |
|:-----|:------:|------:|
|aaa   |bbb     |ccc    |
|ddd   |eee     |fff    |

 A | B
---|---
123|456


A |B
--|--
12|45
```

预览：

---

| Left | Center | Right |
| :--- | :----: | ----: |
| aaa  |  bbb   |   ccc |
| ddd  |  eee   |   fff |

| A   | B   |
| --- | --- |
| 123 | 456 |

| A   | B   |
| --- | --- |
| 12  | 45  |

---

## 行内元素

### 链接

HTML 标签：`<a>`

Markdown 支持两种样式的链接：内联和引用。

#### 内联链接

内联链接的格式如下：`[链接文字](URL "标题")`

标题是可选的。

代码：

    This is [an example](http://example.com/ "Title") inline link.

    [This link](http://example.net/) has no title attribute.

预览：

---

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

---

如果你引用的是同一服务器上的本地资源，可以使用相对路径：

代码：

    See my [About](/about/) page for details.

预览：

---

See my [About](/about/) page for details.

---

#### 引用链接

你可以预定义链接引用。格式如下：`[id]: URL "标题"`

标题同样是可选的。然后引用链接的格式为：`[链接文字][id]`

代码：

    [id]: http://example.com/  "Optional Title Here"
    This is [an example][id] reference-style link.

预览：

---

[id]: http://example.com/ "Optional Title Here"

This is [an example][id] reference-style link.

---

也就是说：

- 方括号包含链接标识符（**不区分大小写**，可以选择从左边界缩进最多三个空格）；
- 后面跟一个冒号；
- 后面跟一个或多个空格（或制表符）；
- 后面跟链接的 URL；
- 链接 URL 可以选择用尖括号括起来。
- 可选地后面跟链接的标题属性，用双引号、单引号或括号括起来。

以下三个链接定义是等价的：

代码：

    [foo]: http://example.com/  "Optional Title Here"
    [foo]: http://example.com/  'Optional Title Here'
    [foo]: http://example.com/  (Optional Title Here)
    [foo]: <http://example.com/>  "Optional Title Here"

使用空的方括号时，链接文本本身将用作名称。

代码：

    [Google]: http://google.com/
    [Google][]

预览：

---

[Google]: http://google.com/

[Google][]

---

### 强调

HTML 标签：`<em>`、`<strong>`

Markdown 将**星号（\*）**和**下划线（\_）**视为强调的指示符。**一个分隔符**将是 `<em>`；**两个分隔符**将是 `<strong>`。

代码：

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

预览：

---

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

---

但如果你在 \* 或 \_ 周围加上空格，它将被视为字面意义的星号或下划线。

你可以使用反斜杠转义它：

代码：

    \*this text is surrounded by literal asterisks\*

预览：

---

\*this text is surrounded by literal asterisks\*

---

### 代码

HTML 标签：`<code>`

用**反引号（`）**包裹起来。

代码：

    Use the `printf()` function.

预览：

---

Use the `printf()` function.

---

要在代码范围内包含反引号字符，可以使用**多个反引号**作为开头和结尾的分隔符：

代码：

    ``There is a literal backtick (`) here.``

预览：

---

``There is a literal backtick (`) here.``

---

围绕代码范围的反引号分隔符可以包含空格——开头后一个，结尾前一个。这允许你在代码范围的开头或结尾放置字面意义的反引号字符：

代码：

    A single backtick in a code span: `` ` ``

    A backtick-delimited string in a code span: `` `foo` ``

预览：

---

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

---

### 图片

HTML 标签：`<img />`

Markdown 使用一种类似于链接语法的图片语法，支持两种样式：内联和引用。

#### 内联图片

内联图片语法如下：`![Alt文字](URL "标题")`

标题是可选的。

代码：

    ![Alt text](/path/to/img.jpg)

    ![Alt text](/path/to/img.jpg "Optional title")

预览：

---

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp)

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title")

---

也就是说：

- 一个感叹号：!；
- 后面跟一组方括号，包含图片的 alt 属性文本；
- 后面跟一组圆括号，包含图片的 URL 或路径，以及可选的用双引号或单引号括起来的标题属性。

#### 引用图片

引用样式的图片语法如下：`![Alt文字][id]`

代码：

    [img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp  "Optional title attribute"
    ![Alt text][img id]

预览：

---

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title attribute"

![Alt text][img id]

---

### 删除线

HTML 标签：`<del>`

这是一个扩展功能。

GFM 添加了给文本添加删除线的语法。

代码：

```
~~Mistaken text.~~
```

预览：

---

~~Mistaken text.~~

---

## 杂项

### 自动链接

Markdown 支持为 URL 和电子邮件地址创建"自动"链接的快捷方式：只需用尖括号将 URL 或电子邮件地址括起来。

代码：

    <http://example.com/>

    <address@example.com>

预览：

---

<http://example.com/>

<address@example.com>

---

GFM 会自动链接标准 URL。

代码：

```
https://github.com/emn178/markdown
```

预览：

---

https://github.com/emn178/markdown

---

### 反斜杠转义

Markdown 允许你使用反斜杠转义来生成那些在 Markdown 格式化语法中具有特殊含义的字面字符。

代码：

    \*literal asterisks\*

预览：

---

\*literal asterisks\*

---

Markdown 为以下字符提供反斜杠转义：

代码：

    \   反斜杠
    `   反引号
    *   星号
    _   下划线
    {}  花括号
    []  方括号
    ()  圆括号
    #   井号
    +   加号
    -   减号（连字符）
    .   句点
    !   感叹号

## 内联 HTML

对于 Markdown 语法未涵盖的任何标记，直接使用 HTML 即可。无需添加前缀或分隔符来指示你正在从 Markdown 切换到 HTML；只需使用标签即可。

代码：

    This is a regular paragraph.

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    This is another regular paragraph.

预览：

---

This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.

---

注意，Markdown 格式化语法**不会在块级 HTML 标签内处理**。

与块级 HTML 标签不同，Markdown 语法**会在行内级标签内处理**。

代码：

    <span>**Work**</span>

    <div>
        **No Work**
    </div>

预览：

---

<span>**Work**</span>

<div>
  **No Work**
</div>
***