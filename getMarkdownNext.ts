import { error } from "console";
import { App, Notice } from "obsidian";

export async function getNowFileMarkdownContentNext(
    app: App,
) {
    const nowFile = app.workspace.getActiveFile();
    let emoji = '';
    let cover = '';
    let tags = [];
    let type = '';
    let slug = '';
    let stats = '';
	let status = '';
    let category = '';
    let summary = '';
    let paword = '';
    let favicon = '';
    let datetime = '';

    const FileCache = app.metadataCache.getFileCache(nowFile);
    try {
        emoji = FileCache.frontmatter.titleicon;
        cover = FileCache.frontmatter.coverurl;
        tags = FileCache.frontmatter.tags;
        type = FileCache.frontmatter.type;
        slug = FileCache.frontmatter.slug;
        stats = FileCache.frontmatter.stats || FileCache.frontmatter.status;
        category = FileCache.frontmatter.category;
        summary = FileCache.frontmatter.summary;
        paword = FileCache.frontmatter.password;
        favicon = FileCache.frontmatter.icon;
        datetime = FileCache.frontmatter.date;
    } catch (error) {
        new Notice(error);
    }
    if (nowFile) {
        const markDownData = await nowFile.vault.read(nowFile);
        return {
            markDownData,
            nowFile,
            emoji,
            cover,
            tags,
            type,
            slug,
            stats,
            category,
            summary,
            paword,
            favicon,
            datetime,
        };
    } else {
        new Notice("No active file open");
        return;
    }
}
