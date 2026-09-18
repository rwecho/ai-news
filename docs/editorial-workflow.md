# AI 新闻编辑流程

1. 在 Google Sheets 创建选题并记录来源。
2. 将原始链接、截图、视频和测试结果放入 Google Drive 的对应研究证据文件夹。
3. 根据证据撰写文章，保存到 `content/news/`，并在文章元数据中记录 Drive 素材链接。
4. 使用 Pull Request 审核事实、来源、版权和平台适配。
5. 合并后由站点部署文章，并把 GitHub 链接和发布地址回写到 Google Sheets。

## 来源分工

- Google Sheets 是状态控制中心。
- Google Drive 是唯一的研究与媒体素材库。
- GitHub 是文章正文和网站代码的唯一正式来源。

## 媒体规则

所有图片、视频、截图和大文件都保存在 Google Drive，不提交到 GitHub。公开文章只能引用已经确认公开权限和版权状态的 Drive 文件。GitHub 中只保存 Drive 链接、说明文字和必要的显示参数。

不要把最终文章长期维护在 Google Docs 中，也不要把媒体文件复制到仓库。
