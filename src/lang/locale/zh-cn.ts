// 简体中文

export default {
  //main.ts
  "Mobile devices are not supported at this time": "移动设备暂不支持",
  "Note: During minimization, can't open modal windows, such as control panels.": "注意：最小化期间，无法打开模态窗，比如控制面板。",

  //dialog.ts
  "Please input the image address":"请输入图片地址",
  "Please input the image alter":"请输入图片的alt",
  "Please input the image title":"请输入图片标题",
  "Please input the link address":"请输入链接地址",
  "Please input the link name":"请输入链接名",
  "Please input the link title":"请输入链接title",
  "Please input the audio address":"请输入音频地址",
  "Please input the video address":"请输入视频地址",
  "Please select the type of the video":"请选择视频类型",
  "Please input the url address":"请输入URL地址",
  "Please input the width and height":"请输入宽度和高度",
  "Must": "必填",
  "Width optional": "宽度可选",
  "Height optional": "高度可选",
  "Optional": "可选",

  //ColorPicker.ts
  "More colors": "更多颜色",
  "Choose a color":"选择一个颜色",
  "Use this color":"用这个颜色",

  //QuickInsert.ts
  "Search in browser":"浏览器搜索",

  // setting.ts
  "Quick insert markdown code":"快速插入Markdown代码",
  "If enabled, you can use /ii to quickly insert Markdown code.":"开启后你可以使用 /ii 快速插入Markdown代码。",

  "Zen mode deep":"深度禅模式",
  "If enabled, when you toggle a Zen command, the active document will be full-screen and the surrounding views will be hidden.":"开启后，当你触发深度禅模式命令时，当前文档将会全屏，其他面板将会隐藏。",
  "Zen mode light":"轻禅模式",
  "If enabled, when you toggle a Zen light command, the active document will be full-window and the surrounding views will be hidden.":"开启后，如果你触发轻度禅模式命令时，当前文档将会全屏，其他面板将会隐藏。",
  "Zen mode slight":"微禅模式",
  "If enabled, when you toggle a Zen command, the surrounding views will be hidden.":"开启后，当你触发微禅模式命令时，将会隐藏无用面板。",
  "Show command in context menu":"开启右键菜单",
  "If enabled, the command context menu will be displayed when you right-click.":"开启后，你选择的命令将会在右键菜单中显示。",
  "Show doc size in status":"状态栏显示文档大小",
  "If enabled, the current document occupies space will be displayed in the status bar.":"开启后，将会在状态栏显示当前文档大小。",
  "Show search in browser":"浏览器搜索",
  "If enabled, it will search for the keywords you selected in the browser, through the context menu.":"开启后，你可以通过右键菜单在浏览器中搜索选中关键词。",
  "Search in browser search engine":"浏览器搜索引擎",
  "What search engine to use, when you right-click to search. {selection} means search keyword.":"当你右键搜索时，使用什么搜索引擎，{selection}代表搜索关键词。",
  "Show color picker modal":"显示颜色选择器",
  "If enabled, the color picker modal will be displayed when you click the color command.":"开启后，当你触发颜色或背景颜色命令时，将会打开颜色选择面板。",
  "Common color codes":"常用颜色代码",
  "The color code here will be displayed in the color dialog modal, with each color code on a separate line.":"这里的颜色代码将会在颜色选择面板中显示，每个颜色代码单独占一行。",
  "Show image and link modal":"显示图片和链接选项对话框",
  "If enabled, the dialog will be displayed when you click the link or image command.":"开启后，当你触发图片或链接命令时，将会显示更多选项对话框。",
  "Show media modal":"显示媒体选项对话框",
  "If enabled, the dialog will be displayed when you click the audio, video, iframe command.":"开启后，当你触发Audio，Video和Iframe命令时，将会显示更多选项对话框。",
  "Show tips in images and link code":"图片和链接代码占位提示文字",
  "If enabled, tips text will be added when inserting images or link code.":"开启后，生成的图片和链接代码中，将会显示占位提示文字。",
  "Use only standard Markdown code":"仅用标准Markdown格式",
  "If enabled, only code in standard Markdown format will be generated.":"开启后，仅使用标准Markdown格式生成代码。",
  "Status bar can drag":"可拖动状态栏",
  "If enabled, the status bar can be dragged.":"开启后，可自由拖动你的状态栏。",
  "Add minimize button to settings panel":"给Obsidian的设置面板添加最小化按钮",
  "If enabled, will add a minimize button in obsidian's settings panel.":"开启后，Obsidian的设置面板上将会增加最小化按钮。",
  "Date format":"日期格式化",
  "Date formatting codes, Y, M, D, d represent year, month, day, and week respectively.":"插入日期时的代码格式化，YYYY, MM, DD, dddd 分别代表年，月，日和星期。",
  "Time format":"时间格式",
  "Time formatting codes, Y, M, D, H, m, s represent year, month, day, hour, minute, and second respectively.":"插入时间时的代码格式，YYYY, MM, DD, HH, mm, ss分别代表年，月，日，时，分，秒。",
  "Style codes":"CSS代码片段",
  "The style of the Zen mode and others.":"这里可以输入和调整禅模式的样式及其他元素的样式。",
  "Choose which codes enable":"选择开启哪些命令",
  "Only the code you checked is added to the list of commands.":"只有你选择的命令才会添加到命令面板中。",
  "Choose which show in context menu":"选择哪些命令添加到右键菜单",
  "Only the code you checked is added to the list of context menu.":"只有你选择的命令才会添加到右键菜单中。",
  "Custom codes":"用户自定义命令",
  "Format: \nName::Code::menu\n\nExample: \nMy Link::<a href=\"{cursor}\">{selection}</a>::menu":"格式： \nName::Code::menu\n\n例如：\nMy Link::<a href=\"{cursor}\">{selection}</a>::menu",
  "Javascript code snippets":"JavaScript代码片段",
  "The javascript code snippets will be executed when the plugin is loaded.":"这里的JavaScript代码片段将会在插件加载时执行。",
  "You can open the devtools console to debug as you write.\nExample:\nconsole.log('Nice day!')":"你可以打开devtools控制台边写边调试。\n示例：\nconsole.log('What a nice day!')",
  "settings.customCodeDesc": "1. 每个命令单独占一行<br />2. 格式：Name::Code::menu<br />3. ::menu代表同时添加到右键菜单<br />4. 变量：{selection}代表选中的文字，{cursor}代表光标位置，默认在插入代码的最后<br />5. ::开头的行是注释将会忽略<br />6. 换行用\\n代替",
  "Remember dragged position": "记住拖动位置",
};
